window.loadedUrls = true;
const hoursBeforeMandatoryRefresh = 6;

function getBuildUrl() {
	return 'https://media.githubusercontent.com/SchoolTARMaster/middlechild/raw/refs/heads/main/cdn/Build' ;
}

function getGameLoaderUrl() {
	return getBuildUrl() + "/WebGL.loader.js";
}


