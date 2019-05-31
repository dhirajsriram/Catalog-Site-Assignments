// for the current tab, inject the "inject.js" file & execute it
chrome.tabs.query({}, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.executeScript(tabs[i].id, {file: "inject.js"});
    }
}
);