// This file was loaded as a part of content_scripts in json which is 
// used to run specific things on different webpages. For eg. running index.js on the webpage
console.log("My extension");

var links = document.getElementsByTagName("a");
var formatted_links = [];

for (let i = 0; i < links.length; i++){
    let title = links[i].text;
    let href = links[i].href;
    if(title !== "" && href !== ""){
        formatted_links.push({title: title, href: href});
    }
    
}

chrome.runtime.sendMessage({
    "action": "print_messages",
    "data": formatted_links
}, res=> {
    console.log(res);
})