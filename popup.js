// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let onButton = document.getElementById('on');
let offButton = document.getElementById('off');

onButton.onclick = function(element) {
  chrome.storage.sync.set({isEnabled: true}, function() {
    chrome.browserAction.setBadgeText({text: 'ON'});
  });
};

offButton.onclick = function(element) {
  chrome.storage.sync.set({isEnabled: false}, function() {
    chrome.browserAction.setBadgeText({text: 'OFF'});
  });
};
