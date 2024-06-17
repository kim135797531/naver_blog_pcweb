// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let onButton = document.getElementById('on');
let offButton = document.getElementById('off');
let blogCheckBox = document.getElementById('blog');
let cafeCheckBox = document.getElementById('cafe');
let mapCheckBox = document.getElementById('map');
let mainCheckBox = document.getElementById('main');

onButton.onclick = function(element) {
    chrome.storage.sync.set({ isEnabled: true }, function() {
        chrome.action.setBadgeText({ text: 'ON' });
    });
};

offButton.onclick = function(element) {
    chrome.storage.sync.set({ isEnabled: false }, function() {
        chrome.action.setBadgeText({ text: 'OFF' });
    });
};

blogCheckBox.onchange = function blogChange() {
    chrome.storage.sync.set({ blog: blogCheckBox.checked }, function() {});
};
cafeCheckBox.onchange = function cafeChange() {
    chrome.storage.sync.set({ cafe: cafeCheckBox.checked }, function() {});
};
mapCheckBox.onchange = function mapChange() {
    chrome.storage.sync.set({ map: mapCheckBox.checked }, function() {});
};
mainCheckBox.onchange = function mainChange() {
    chrome.storage.sync.set({ main: mainCheckBox.checked }, function() {});
};


// ComboBox initialize
chrome.storage.sync.get(['blog', 'cafe', 'map', 'main'], function(data) {
    blogCheckBox.checked = data.blog;
    cafeCheckBox.checked = data.cafe;
    mapCheckBox.checked = data.map;
    mainCheckBox.checked = data.main;
});