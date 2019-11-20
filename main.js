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
	var calType;
	chrome.storage.sync.get(['calType'], function(data) {
		switch(data.calType) {
			case 'ics':
				generateIcal(homeTeam,awayTeam,date,kickOff,stadium,competition);
				break;
			case 'google':
				generateGoogle(homeTeam,awayTeam,date,kickOff,stadium,competition);
				break;
		}
	});
}

function generateIcal(homeTeam,awayTeam,date,kickOff,stadium,competition) {
	var start = new Date(date+" "+kickOff);
	var end   = new Date(date+" "+kickOff);
	var gameLength = competition.toUpperCase().includes("FUTSAL") ? 1 : 2;
	end.setHours(end.getHours()+gameLength);
	var msg = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//github.com/krokerik//ical//EN\nBEGIN:VEVENT\nSEQUENCE:0\nDTSTAMP:"+to8601(new Date())+"\nDTSTART:"+to8601(start)+"\nDTEND:"+to8601(end)+"\nSUMMARY:"+homeTeam+" - "+awayTeam+"\nLOCATION:"+stadium+"\nDESCRIPTION:"+competition+"\nURL;VALUE=URI:"+window.location.origin+window.location.pathname+window.location.search+"\nEND:VEVENT\nEND:VCALENDAR";
	window.open("data:text/calendar;charset=utf8," + escape(msg));
}

function generateGoogle(homeTeam,awayTeam,date,kickOff,stadium,competition) {
	var start = new Date(date+" "+kickOff);
	var end   = new Date(date+" "+kickOff);
	var gameLength = competition.toUpperCase().includes("FUTSAL") ? 1 : 2;
	end.setHours(end.getHours()+gameLength);
	window.open("http://www.google.com/calendar/render?action=TEMPLATE&text="+homeTeam+" - "+awayTeam+"&dates="+to8601(start)+"/"+to8601(end)+"&details="+competition+"&location="+stadium);
}

function to8601(date) {
	var isoString = date.toISOString();
	var pattern = /[-:]/g;
	isoString = isoString.replace(pattern,'');
	isoString = isoString.slice(0,15)+'Z';
	return isoString;
}