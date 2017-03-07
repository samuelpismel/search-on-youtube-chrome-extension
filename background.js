
function searchOnYoutube(term) {
  chrome.tabs.create({url: "https://www.youtube.com/results?search_query=" + term})
}

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "search_on_youtube") {
    searchOnYoutube(request.term)
  }
});

chrome.contextMenus.create({
  id: 'search_on_youtube',
  title: 'Search on Youtube',
  contexts: ['selection']
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  searchOnYoutube(info.selectionText)
});
