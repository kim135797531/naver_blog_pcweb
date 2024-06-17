'use strict';

chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason !== "update") {
        chrome.storage.sync.set({ isEnabled: true }, function() {});
        chrome.storage.sync.set({ blog: true }, function() {});
        chrome.storage.sync.set({ cafe: true }, function() {});
        chrome.storage.sync.set({ map: true }, function() {});
        chrome.storage.sync.set({ main: false }, function() {});
    }

    chrome.storage.sync.get(['isEnabled'], function(data) {
        if (data.isEnabled == true) {
            chrome.action.setBadgeText({ text: 'ON' });
        } else {
            chrome.action.setBadgeText({ text: 'OFF' });
        }
    });
});