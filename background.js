chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.url) {
        console.log("[MyEpitechExt] %s intercepted, send refresh message", changeInfo.url);
        chrome.tabs.sendMessage(tabId, {
            message: "refresh",
            url: changeInfo.url,
        });
    }
});