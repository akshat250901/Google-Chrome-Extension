
function MyClick(info, tab){
    console.log("clicked on page:",info,tab);
};

function MyImageClick(info, tab){
    console.log("clicked on Image:",info,tab);
    chrome.windows.create({
        "url": "https://facebook.com/sharer.php?u=" + info.srcUrl + "&display=popup",
        "type": "popup"
    })
};

function MyQuoteClick(info, tab){
    console.log("clicked on Quote:",info,tab);
    chrome.windows.create({
        "url": "https://facebook.com/sharer.php?u=" + info.pageUrl + "&display=popup&quote=" + info.selectionText,
        "type": "popup"
    })
};


// chrome.contextMenus accesses the context menu on chrome and we can call different functions on it.
chrome.contextMenus.create({    
    "title": "Share",
    "contexts": ["page"],
    "onclick": MyClick
});

chrome.contextMenus.create({
    "title": "Share Image",
    "contexts": ["image"],
    "onclick": MyImageClick
});

chrome.contextMenus.create({
    "title": "Share Quote",
    "contexts": ["selection"],
    "onclick": MyQuoteClick
});


chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
    console.log("message", msg);
    sendResponse({"text": "Links Received"})
})