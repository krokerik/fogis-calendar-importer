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
	var competition = gameInfo.querySelector(".arena-info ul li a").firstChild.nodeValue.slice(0,-22);
	generateIcal(homeTeam,awayTeam,date,kickOff,stadium,competition);
}

function generateIcal(homeTeam,awayTeam,date,kickOff,stadium,competition) {
	var start = new Date(date+" "+kickOff);
	var end   = new Date(date+" "+kickOff);
	end.setHours(end.getHours()+2);
	var msg = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//github.com/krokerik//ical//EN\nBEGIN:VEVENT\nSEQUENCE:0\nDTSTAMP:"+to8601(new Date())+"\nDTSTART:"+to8601(start)+"\nDTEND:"+to8601(end)+"\nSUMMARY:"+homeTeam+" - "+awayTeam+"\nLOCATION:"+stadium+"\nDESCRIPTION:"+competition+"\nURL;VALUE=URI:"+window.location.origin+window.location.pathname+window.location.search+"\nEND:VEVENT\nEND:VCALENDAR";
	window.open("data:text/calendar;charset=utf8," + escape(msg));
}

function to8601(date) {
	var isoString = date.toISOString();
	var pattern = /[-:]/g;
	isoString = isoString.replace(pattern,'');
	isoString = isoString.slice(0,15)+'Z';
	return isoString;
}