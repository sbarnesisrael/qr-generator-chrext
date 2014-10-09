// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
* Added by SLB
*/

/**
 * Resizes the window to the current dimensions of this page's body.
 */
function resizeWindow() {
  window.setTimeout(function() {
    chrome.tabs.getCurrent(function (tab) {
      var newHeight = Math.min(document.body.offsetHeight + 140, 700);
      chrome.windows.update(tab.windowId, {
        height: newHeight,
        width: 520
      });
    });
  }, 150);
};

document.addEventListener('DOMContentLoaded', function() {
  // do something ??
  var linkURL = window.location.hash.substring(1);

  if (linkURL) {
    // do something
    jQuery('#qrcodeCanvas').qrcode({ text: linkURL });
    //jQuery('#qrcodeTable').qrcode({ render: "table", "text": linkURL });
    resizeWindow();
  }
  
});
