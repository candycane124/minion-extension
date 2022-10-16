const CSS = 'div { background-color: #FCE029; color: #0A75BC; border-radius: 5px } h1 { font-weight: bold, color: #0A75BC; background-color: #949699; } body { border: 20px solid #0A75BC; color: #FCE029; font-family: sans-serif; }';
const TITLE_APPLY = "make colour better";
const TITLE_REMOVE = "i am colourblind";
const APPLICABLE_PROTOCOLS = ["http:", "https:"];

function toggleCSS(tab) {

  function gotTitle(title) {
    if (title === TITLE_APPLY) {
        browser.pageAction.setTitle({tabId: tab.id, title: TITLE_REMOVE});
        browser.tabs.insertCSS({code: CSS});
    } else {
        browser.pageAction.setTitle({tabId: tab.id, title: TITLE_APPLY});
        browser.tabs.removeCSS({code: CSS});
    }
  }

  let gettingTitle = browser.pageAction.getTitle({tabId: tab.id});
  gettingTitle.then(gotTitle);
}

function protocolIsApplicable(url) {
  const protocol = (new URL(url)).protocol;
  return APPLICABLE_PROTOCOLS.includes(protocol);
}

function initializePageAction(tab) {
  if (protocolIsApplicable(tab.url)) {
    browser.pageAction.setTitle({tabId: tab.id, title: TITLE_APPLY});
    browser.pageAction.show(tab.id);
  }
}

let gettingAllTabs = browser.tabs.query({});
gettingAllTabs.then((tabs) => {
  for (let tab of tabs) {
    initializePageAction(tab);
  }
});

browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  initializePageAction(tab);
});

browser.pageAction.onClicked.addListener(toggleCSS);