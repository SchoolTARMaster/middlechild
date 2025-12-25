window.loadedUrls = true;
const hoursBeforeMandatoryRefresh = 6;

function getBuildUrl() {
	return 'cdn/Build' ;
}

function getGameLoaderUrl() {
	return getBuildUrl() + "/WebGL.loader.js";
}
