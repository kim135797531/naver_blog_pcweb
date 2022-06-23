'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ isEnabled: true }, function() {
        chrome.action.setBadgeText({ text: 'ON' });
    });
    chrome.storage.sync.set({ blog: true }, function() {});
    chrome.storage.sync.set({ cafe: true }, function() {});
    chrome.storage.sync.set({ map: true }, function() {});
});