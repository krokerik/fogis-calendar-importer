var calenderLink = document.createElement("a");
var linkText     = document.createTextNode(chrome.i18n.getMessage("calendar_link"));

calenderLink.className = "calendar";
calenderLink.setAttribute('href','#');
calenderLink.onclick = getGameInfo;
calenderLink.appendChild(linkText);

var gameInfo = document.querySelector(".game-info-page");
var shareBox = gameInfo.querySelector(".share-box .box-share");

shareBox.appendChild(calenderLink);

function getGameInfo() {
	var homeTeam = gameInfo.querySelector(".home .name").firstChild.nodeValue;
	var awayTeam = gameInfo.querySelector(".away .name").firstChild.nodeValue;
	var startTime = gameInfo.querySelector(".start-time span span");
	var date = startTime.firstChild.nodeValue;
	var kickOff = startTime.lastChild.nodeValue;
	var stadium = gameInfo.querySelector(".arena-info h3").firstChild.nodeValue;
	console.log(homeTeam + ' - ' + awayTeam + ' @ ' + stadium +' '+ date + ' ' + kickOff);
}