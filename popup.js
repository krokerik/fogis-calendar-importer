let changeColor = document.getElementById('changeColor');
chrome.storage.sync.get(['color'], function(data) {
	changeColor.style.backgroundColor = data.color;
	changeColor.setAttribute('value', data.color);
});
changeColor.onclick = function(element) {
	let color = element.target.value;
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(
			tabs[0].id,
			{code: 'document.body.style.backgroundColor = "' + color + '";'});
	});
};

chrome.storage.sync.get(['calType'], function(data) {
	document.options.calType.value = data.calType;
});

document.forms.options.addEventListener('change', function(e) {
	if(e.target.name === 'calType') {
		chrome.storage.sync.set({calType : e.target.value}, function() {
			console.log("calendar preference changed to " + e.target.value);
		});
	}
});