chrome.webRequest.onBeforeRequest.addListener(
    function (info) {
        if (info.url === "https://my.epitech.eu/app.js") {
            console.log("[MyEpitechExt] %s intercepted redirect it", info.url);
            return {redirectUrl: chrome.extension.getURL("app.js")}
        }
    },
    {
        urls: [
            "https://my.epitech.eu/*"
        ],
        types: ["script"]
    },
    ["blocking"]
);