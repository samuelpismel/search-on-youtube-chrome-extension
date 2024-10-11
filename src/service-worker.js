/*
  Copyright 2024 Samuel Gavassi Pismel.
  This file is part of "Search on Youtube", which is licensed under the GNU General Public License version 3 (GPLv3).
*/

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "search-on-youtube",
    title: "Search on Youtube for '%s'",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-on-youtube" && info.selectionText) {
    const query = info.selectionText;
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

    chrome.tabs.create({ url });
  }
});
