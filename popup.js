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