'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({isEnabled: true}, function() {
    chrome.browserAction.setBadgeText({text: 'ON'});
  });
});
