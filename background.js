'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({isEnabled: true}, function() {
    chrome.browserAction.setBadgeText({text: 'ON'});
  });
  chrome.storage.sync.set({blog: true}, function() {});
  chrome.storage.sync.set({cafe: false}, function() {});
  chrome.storage.sync.set({map: false}, function() {});
});
