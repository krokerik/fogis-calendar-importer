chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({calType: 'ics'}, function() {
		console.log("Default calendar is ICS");
	});
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'blekinge.svenskfotboll.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'bohuslan.svenskfotboll.se',
					          pathPrefix:    '/tavling/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'dalafotboll.nu',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'dalsland.svenskfotboll.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'gestrikland.svenskfotboll.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'gotland.svenskfotboll.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'gbgfotboll.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'halland.svenskfotboll.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'halsingland.svenskfotboll.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'www.jhff.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'medelpad.svenskfotboll.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals: 'norrbotten.svenskfotboll.se',
					          pathPrefix: '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'www.skaneboll.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'www.smalandsfotbollen.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'www.stff.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'sodermanland.svenskfotboll.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'uppland.svenskfotboll.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'www.varmlandsff.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'vasterbotten.svenskfotboll.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'www.vastgotafotboll.org',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'vff.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'angermanland.svenskfotboll.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'www.olff.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'ostergotland.svenskfotboll.se',
					          pathPrefix:    '/match/',
					          queryContains: 'scr=result'},
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals:    'www2.svenskfotboll.se',
					          pathPrefix:    '/cuper-och-serier/information/',
					          queryContains: 'scr=result'},
				}),
			],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});