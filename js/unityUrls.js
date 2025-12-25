window.loadedUrls = true;
const hoursBeforeMandatoryRefresh = 6;

function getBuildUrl() {
	return 'https://media.githubusercontent.com/media/SchoolTARMaster/middlechild/main/cdn/Build' ;
}

function getGameLoaderUrl() {
	return getBuildUrl() + "/WebGL.loader.js";
}

