/**
 * Create a context menu which will only show up for images.
 */
chrome.contextMenus.create({
  "title" : "Generate QR Code",
  "type" : "normal",
  "contexts" : ["link", "selection"],
  "onclick" : getClickHandler()
});

/**
 * Returns a handler which will open a new window when activated.
 */
function getClickHandler() {
  return function(info, tab) {

    // Check to see whether element is a link or selected text.
    if (info.linkUrl) {
    	var url = 'popup.html#' + info.linkUrl;
    } else if (info.selectionText) {
    	var url = 'popup.html#' + info.selectionText;
    } else {
    	// Nothing returned. This shouldn't happen.
    	var url = 'popup.html#nothingpassed';

    }

    // Create a new window to the info page.
    chrome.windows.create({ url: url, width: 520, height: 660 });

  };
};