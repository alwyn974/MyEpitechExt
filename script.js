const asciiArtLogo = "\n" +
    "  __  __       ______       _ _            _     ______      _   \n" +
    " |  \\/  |     |  ____|     (_| |          | |   |  ____|    | |  \n" +
    " | \\  / |_   _| |__   _ __  _| |_ ___  ___| |__ | |__  __  _| |_ \n" +
    " | |\\/| | | | |  __| | '_ \\| | __/ _ \\/ __| '_ \\|  __| \\ \\/ | __|\n" +
    " | |  | | |_| | |____| |_) | | ||  __| (__| | | | |____ >  <| |_ \n" +
    " |_|  |_|\\__, |______| .__/|_|\\__\\___|\\___|_| |_|______/_/\\_\\\\__|\n" +
    "          __/ |      | |                                         \n" +
    "         |___/       |_|                                         \n\n"

const baseUrl = "https://api.epitest.eu/me/";
const projectName = "MyEpitechExt";
const types = {
    YEAR: "year",
    MODULE: "module",
    PROJECT: "project",
    DETAILS: "details",
    UNKNOWN: "unknown"
}
let type = null;
let hasBeenFixed = false; //used for blocking multiple override
let elements = []; //all elements added

/**
 * Function to print on the console
 * @param msg the message
 * @param type the type of log
 */
const epiLog = (msg, type = "debug") => {
    switch (type) {
        case "debug":
            console.debug("[%s] %s", projectName, msg);
            break;
        case "info":
            console.info("[%s] %s", projectName, msg);
            break;
        case "error":
            console.error("[%s] %s", projectName, msg);
            break;
        case "warn":
            console.warn("[%s] %s", projectName, msg);
            break;
        case "json":
            console.debug("[%s] Json Debug", projectName, msg);
            break;
        case "timeStart":
            console.time(`[${projectName}] ${msg}`);
            break;
        case "timeEnd":
            console.timeEnd(`[${projectName}] ${msg}`);
            break;
    }
}

/**
 * Display MyEpitechExt logo
 * @returns {void}
 */
const printLogo = () => {
    console.log(asciiArtLogo);
}

/**
 * Retrieve json from url
 * @param url the url
 * @returns {Promise<any>} the json or an error
 */
let fetchData = async (url) => {
    let data;
    try {
        epiLog("Fetching data from " + url);
        const result = fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'applications/json',
                'Authorization': 'Bearer ' + localStorage.getItem("argos-api.oidc-token").replace(/"/g, "")
            }
        });
        data = (await result).json();
    } catch (e) {
        epiLog(e, "error");
        throw "Request error " + url;
    }
    return data;
}

/**
 * Get the type (Year, Module, Project, Details)
 * @returns {Promise<string>}
 */
const getType = () => {
    let windowUrl = window.location.href;
    if (windowUrl.includes("#y"))
        return types.YEAR;
    else if (windowUrl.includes("#m"))
        return types.MODULE;
    else if (windowUrl.includes("#p"))
        return types.PROJECT;
    else if (windowUrl.includes("#d"))
        return types.DETAILS;
    return types.UNKNOWN;
}

/**
 * Get the type schema
 * @returns {string}
 */
const getTypeSchema = () => {
    let windowUrl = window.location.href;
    switch (type) {
        case "year":
            return windowUrl.split("#y/")[1];
        case "module":
            return windowUrl.split("#m/")[1].slice(0, 4);
        case "project":
            return windowUrl.split("#p/")[1];
        case "details":
            let splitted = windowUrl.split("/");
            return "details/" + splitted[splitted.length - 1];
    }
}

/**
 * Retrieve the json from the api (filtered or not)
 * @returns {Promise<*>}
 */
const retrieveData = async () => {
    let typeSchema = getTypeSchema();
    let projects = await fetchData(baseUrl + typeSchema);
    let windowUrl = window.location.href;
    if (type === types.MODULE) {
        let splitted = windowUrl.split("/");
        let module = splitted[splitted.length - 1];
        projects = await projects.filter(project => project.project.module.code === module);
    }
    return projects;
}

/**
 * Util function to insert dom element
 * @param newNode the dom element
 * @param referenceNode the parent
 */
const insertAfter = (newNode, referenceNode) => {
    if (referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        elements.push(newNode);
    }
}

/**
 * Get the percentage value
 * @param project the project
 * @returns {string} the percentage
 */
const getPercentage = (project) => {
    let total_test = 0;
    let passed_test = 0;
    let skills = type === types.DETAILS ? project.skills : project.results.skills;

    if (type !== types.DETAILS) {
        for (let task in skills) {
            if (skills.hasOwnProperty(task)) {
                total_test += skills[task].count;
                passed_test += skills[task].passed;
            }
        }
    } else {
        for (let skill of skills) {
            total_test += skill.FullSkillReport.tests.length;
            for (let test of skill.FullSkillReport.tests)
                passed_test += test.passed;
        }
    }

    let percentage = (passed_test / total_test * 100).toFixed(1);
    let splitted = percentage.split(".");
    if (percentage.includes(".") && splitted[1] === "0")
        return splitted[0];
    return percentage;
}

/**
 * Find element from text value with {@link document.evaluate}
 * @param tag the tag (span, div etc)
 * @param text the text value
 * @param xpathType the type of xpath
 * @returns {XPathResult}
 */
const findElementByText = (tag, text, xpathType) => {
    let expression = text.includes('"') ? `//${tag}[text()='${text}']` : `//${tag}[text()="${text}"]`; //TODO fix this for french project (example: "Le mode d'emploi")
    try {
        return document.evaluate(expression, document, null, xpathType, null);
    } catch (e) {
        epiLog("Error on finding element from text !\n" + e, "error");
    }
    return null;
};

/**
 * Check if the mdl-grid exist
 * @returns {boolean}
 */
const checkGrid = () => {
    return document.querySelectorAll("main > div.mdl-grid").length === 1;
}

/**
 * A simple sleep function
 * @param ms time to sleep
 * @returns {Promise<void>}
 */
const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

/**
 * Fix the module and project page
 * @param projects all the projects
 * @returns {void}
 */
const tempFix = (projects) => {
    let mdlGridSelector = document.querySelectorAll("main > div.mdl-grid");
    if (mdlGridSelector.length === 0) {
        epiLog("Mdl grid is empty !", "warn");
        return;
    }
    let mdlGrid = mdlGridSelector[0];
    if (mdlGrid.childNodes.length !== projects.length) {
        epiLog("Card project are empty !", "warn");
        return;
    }
    for (let i = 0; i < mdlGrid.childNodes.length; i++) {
        let percentage = getPercentage(projects[i]);
        epiLog(projects[i].project.name + " " + percentage + "%");
        let span = document.createElement("span");
        span.innerHTML = percentage + "%";
        span.classList.add("mdl-typography--text-left", "mdl-cell--2-col-phone", "mdl-cell--4-col-tablet", "mdl-cell--6-col-desktop");
        let card = mdlGrid.childNodes[i];
        insertAfter(span, card?.childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]);
    }
}

/**
 * Fix the details page
 * @param project the project
 * @returns {void}
 */
const fixDetails = (project) => {
    let card = findElementByText("span", project.instance.projectName, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);
    if (card === null || card.snapshotLength !== 1)
        return epiLog("Project not found or there are more than one card for this project !", "warn");
    let percentage = getPercentage(project);
    epiLog(project.instance.projectName + " " + percentage + "%");
    let span = document.createElement("span");
    span.innerHTML = percentage + "%";
    span.classList.add("mdl-typography--text-right");
    insertAfter(span, card.snapshotItem(0));
}

/**
 * Fix my epitech
 * @returns {Promise<void>}
 */
const fixMyEpitech = async () => {
    epiLog("Finish patching my.epitech.eu", "timeStart");
    while (!checkGrid())
        await sleep(150);

    hasBeenFixed = true;
    type = getType();
    epiLog("Fetching data of projects [Type=" + type + "]");
    try {
        let projects = await retrieveData();
        projects = type !== types.DETAILS ? projects.reverse() : projects;
        epiLog(projects, "json");

        if (type !== types.DETAILS)
            tempFix(projects);
        else
            fixDetails(projects);
    } catch (e) {
        epiLog(e, "error");
    }
    hasBeenFixed = false;
    epiLog("Finish patching my.epitech.eu", "timeEnd");
}

/**
 * The main
 * @returns {Promise<void>}
 */
const main = async () => {
    if (window.location.href.includes("#")) {
        epiLog("Loading MyEpitech extension...");
        printLogo();
        await fixMyEpitech();
    }
}

/**
 * Update page on url change
 */
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.message === "refresh" && !hasBeenFixed) {
        elements.forEach(elem => elem.remove()); //clear elements added, can cause bug if they are not remove
        elements = [];
        await fixMyEpitech();
    }
})

window.onload = main;