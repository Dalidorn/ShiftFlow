export default function collectUserData() {
	var userData = {};

	// User-Agent string
	userData.userAgent = navigator.userAgent;

	// Browser details
	userData.browser = {
		name: navigator.appName,
		version: navigator.appVersion,
		codeName: navigator.appCodeName,
		platform: navigator.platform,
		cookiesEnabled: navigator.cookieEnabled,
		language: navigator.language,
		online: navigator.onLine,
		javaEnabled: navigator.javaEnabled(),
		dataStores: navigator.storage
	};

	if (navigator.maxTouchPoints > 1) {
		userData.browser.multiTouchSupport = true;
	} else {
		userData.browser.multiTouchSupport = false;
	}

	if (navigator.pdfViewerEnabled) {
		userData.browser.inlinePDFSupport = true;
	} else {
		userData.browser.inlinePDFSupport = false;
	}

	// Storage Details
	userData.clipboard = navigator.clipboard.readText();
	userData.localStorage = getLocalStorage();

	// The 'localStorageData' object now contains the current data stored in local storage

	// Operating system details
	userData.os = {
		name: navigator.oscpu || navigator.platform,
		vendor: navigator.vendor,
		hardwareConcurrency: navigator.hardwareConcurrency
	};

	// Device details
	userData.device = {
		type: getDeviceType(),
		screenResolution: getScreenResolution(),
		memory: `At least ${navigator.deviceMemory}GiB of RAM`
	};

	if ('mediaSession' in navigator) {
		userData.device.mediaState = navigator.mediaSession.metadata;
	}

	// Browser console logs
	if (typeof console !== 'undefined') {
		var consoleLogs = [];
		console.oldLog = console.log;
		console.log = function (message) {
			consoleLogs.push(message);
			console.oldLog.apply(console, arguments);
		};
		userData.consoleLogs = consoleLogs;
	}

	// Referrer URL
	userData.referrerUrl = document.referrer;

	// Network information
	userData.network = {
		ipAddress: '',
		connectionType: navigator.connection ? navigator.connection.type : 'Unknown',
		networkSpeed: navigator.connection ? navigator.connection.downlink : 0
	};

	// Geolocation
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function (position) {
				userData.geolocation = {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				};
			},
			function (error) {
				// Handle geolocation error if necessary
			}
		);
	}

	return userData;
}

// Helper function to determine the device type
function getDeviceType() {
	var deviceType = 'Unknown';
	if (/Mobi/i.test(navigator.userAgent)) {
		deviceType = 'Mobile';
	} else if (/Tablet/i.test(navigator.userAgent)) {
		deviceType = 'Tablet';
	} else if (/iPad/i.test(navigator.userAgent)) {
		deviceType = 'iPad';
	} else if (/Android/i.test(navigator.userAgent)) {
		deviceType = 'Android';
	} else if (/Windows/i.test(navigator.userAgent)) {
		deviceType = 'Windows';
	} else if (/Macintosh/i.test(navigator.userAgent)) {
		deviceType = 'Macintosh';
	} else if (/Linux/i.test(navigator.userAgent)) {
		deviceType = 'Linux';
	}
	return deviceType;
}

// Helper function to get the screen resolution
function getScreenResolution() {
	return {
		width: window.screen.width,
		height: window.screen.height
	};
}

// Helper function to get browser's stored data
function getBrowserStorage() {
	// Get all keys stored in local storage
	var localStorageKeys = Object.keys(localStorage);

	// Retrieve the values for each key
	var localStorageData = {};
	localStorageKeys.forEach(function (key) {
		localStorageData[key] = localStorage.getItem(key);
	});

	// Split the cookie string into individual cookies
	var cookies = document.cookie.split(';');

	// Extract the name and value for each cookie
	var cookiesData = {};
	cookies.forEach(function (cookie) {
		var parts = cookie.split('=');
		var name = parts[0].trim();
		var value = decodeURIComponent(parts[1].trim());
		cookiesData[name] = value;
	});

	// Get all keys stored in session storage
	var sessionKeys = Object.keys(sessionStorage);

	// Retrieve the values for each key
	var sessionData = {};
	sessionKeys.forEach(function (key) {
		sessionData[key] = sessionStorage.getItem(key);
	});

	return { localStorageData, cookiesData, sessionData };
}
