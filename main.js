var calenderLink = document.createElement("a");
var linkText     = document.createTextNode("Lägg till i kalender");

calenderLink.className = "calendar";
calenderLink.appendChild(linkText);

var shareBox = document.querySelector(".share-box .box-share");

shareBox.appendChild(calenderLink);