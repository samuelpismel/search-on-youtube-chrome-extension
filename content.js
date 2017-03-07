
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    var text = window.getSelection().toString();
    chrome.runtime.sendMessage({"message": "search_on_youtube", "term": text});
  }
});
