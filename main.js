var calenderLink = document.createElement("a");
var linkText     = document.createTextNode(chrome.i18n.getMessage("calendar_link"));

calenderLink.className = "calendar";
calenderLink.appendChild(linkText);

var shareBox = document.querySelector(".share-box .box-share");

shareBox.appendChild(calenderLink);