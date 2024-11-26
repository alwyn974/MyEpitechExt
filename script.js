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
            if (skill.BreakdownSkillReport === undefined) {
                total_test += skill.FullSkillReport.tests.length;
                for (let test of skill.FullSkillReport.tests)
                    passed_test += test.passed;
            } else {
                total_test += skill.BreakdownSkillReport.breakdown.count;
                passed_test += skill.BreakdownSkillReport.breakdown.passed;
            }
        }
    }

    let percentage = (passed_test / total_test * 100).toFixed(1);
    let splitted = percentage.split(".");
    if (percentage.includes(".") && splitted[1] === "0")
        return splitted[0];
    return percentage;
}

/**
 * Check if the mdl-grid exist
 * @returns {boolean}
 */
const checkGrid = () => {
    return document.querySelectorAll("main > div.mdl-grid").length === 1;
}

/**
 * Check if the main layout content equals to <strong>No results</strong>
 * @returns {boolean}
 */
const checkNoResult = () => {
    let mainGrid = document.querySelector("#elm-mdl-layout-main > div:nth-child(2) > div");
    if (mainGrid === undefined || mainGrid === null)
        return false;
    return mainGrid?.innerHTML === "No results";
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
 * Get the color from percentage
 * @param percentage the percentage
 * @returns {string} the color in string
 */
const getColor = (percentage) => {
    if (percentage < 25)
        return "red";
    else if (percentage < 75)
        return "orange"
    else
        return "limegreen";
}

/**
 * Return a progress bar
 * @param name name of the project for debug
 * @param percentage the percentage
 * @returns {HTMLDivElement} simple progress bar taken from mdl :)
 */
const getProgressBar = (name, percentage) => {
    epiLog(name + " " + percentage + "%");

    let div = document.createElement("div");
    div.className = "mdl-progress";
    div.style.height = "20px";
    div.style.margin = "5px auto";

    let text = document.createElement("div");
    text.className = "bar";
    text.innerHTML = percentage + "%";
    text.style.color = "black";
    text.style.zIndex = "2";
    text.style.width = "100%";
    text.style.fontSize = "smaller";
    text.style.margin = "2px";

    let fgDiv = document.createElement("div");
    fgDiv.className = "bar";
    fgDiv.style.width = percentage + "%";
    fgDiv.style.backgroundColor = getColor(percentage);
    fgDiv.style.zIndex = "1";
    fgDiv.style.borderRadius = "10px";

    let bgDiv = document.createElement("div");
    bgDiv.className = "bar";
    bgDiv.style.backgroundColor = getColor(percentage);
    bgDiv.style.zIndex = "0";
    bgDiv.style.borderRadius = "10px";
    bgDiv.style.opacity = "30%";
    bgDiv.style.width = "100%";

    div.appendChild(text);
    div.appendChild(fgDiv);
    div.appendChild(bgDiv);

    return div;
}

/**
 * Fix the year, module and project page
 * @param projects all the projects
 * @returns {void}
 */
const fixPercentage = (projects) => {
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
        let div = getProgressBar(projects[i].project.name, percentage);
        let textTitle = mdlGrid.childNodes[i]?.childNodes[0]?.childNodes[1]?.childNodes[0]?.childNodes[0];
        textTitle.appendChild(div);
        elements.push(div);
    }
}

const getErrors = (skills) => {
  let error = 0;
  Object.keys(skills).forEach(key => {
    if (skills[key].passed === 0) {
      error++;
    }
  });
  return error;
}

const fixError = (projects) => {
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
    let error = getErrors(projects[i].results.skills);
    let secondaryContent = mdlGrid.childNodes[i].querySelector(".mdl-list__item-secondary-content");
    if (secondaryContent) {
      secondaryContent.textContent = error;
    }
  }
}

const setDarkMode = () => {
  const mainBody = document.getElementById('elm-mdl-layout-main');
  const mdlCards = document.querySelectorAll('.mdl-card');
  const errors = document.querySelectorAll('.mdl-list__item');
  const bodyTitles = document.querySelectorAll('.mdl-color-text--black');
  const headerTitles = document.querySelectorAll('.mdl-color-text--primary-dark');
  const primaryTitles = document.querySelectorAll('.mdl-color-text--primary');
  const headerRow = document.querySelector('.mdl-layout__header-row');
  const secondaryHeader = document.querySelector('.mdl-layout__tab-bar');
  const secondaryHeaderRight = document.querySelector('.mdl-layout__tab-bar-right-button');
  const secondaryHeaderLeft = document.querySelector('.mdl-layout__tab-bar-button');
  const mdlButtons = document.querySelectorAll('.mdl-button--raised.mdl-button--colored');

  secondaryHeaderLeft.style.setProperty('background-color', 'rgba(18, 18, 18, 0.90)', 'important')
  secondaryHeaderRight.style.setProperty('background-color', 'rgba(18, 18, 18, 0.90)', 'important')
  secondaryHeader.style.setProperty('background-color', 'rgba(18, 18, 18, 0.90)', 'important')
  headerRow.style.backgroundColor = '#121212';
  
  mainBody.style.background = 'rgba(18, 18, 18, 0.80)'

  mdlButtons.forEach(button => {
    button.style.backgroundColor = '#BB86FC';
  });
  mdlCards.forEach(card => {
    card.style.backgroundColor = '#121212';
  });
  errors.forEach(error => {
    error.style.color = "#BB86FC"
  })
  bodyTitles.forEach(title => {
    title.style.setProperty('color', '#BB86FC', 'important');
  });
  headerTitles.forEach(title => {
    title.style.setProperty('color', '#BB86FC', 'important');
  });
  primaryTitles.forEach(title => {
    title.style.setProperty('color', '#BB86FC', 'important');
  });
}

/**
 * Fix the details page
 * @param project the project
 * @returns {void}
 */
const fixDetails = (project) => {
    let mdlGridSelector = document.querySelectorAll("main > div.mdl-grid");
    if (mdlGridSelector.length === 0) {
        epiLog("Mdl grid is empty !", "warn");
        return;
    }
    let mdlGrid = mdlGridSelector[0];
    let percentage = getPercentage(project);
    let div = getProgressBar(project.instance.projectName, percentage);
    let textTitle = mdlGrid.childNodes[0]?.childNodes[1]?.childNodes[0];
    textTitle.appendChild(div);
    elements.push(div);
}

/**
 * Fix my epitech
 * @returns {Promise<void>}
 */
const fixMyEpitech = async () => {
    epiLog("Finish patching my.epitech.eu", "timeStart");
    while (!checkGrid()) {
        if (checkNoResult()) {
            epiLog("No results found !");
            return;
        }
        await sleep(150);
    }

    hasBeenFixed = true;
    type = getType();
    epiLog("Fetching data of projects [Type=" + type + "]");
    try {
        let projects = await retrieveData();
        projects = type !== types.DETAILS ? projects.reverse() : projects;
        epiLog(projects, "json");

        if (type !== types.DETAILS) {
          fixPercentage(projects);
          fixError(projects);
          setDarkMode();
        }
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