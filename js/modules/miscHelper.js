///////////////////////////////////////////////
//////   Contains generic helper methods 
///////////////////////////////////////////////

function isEmpty(obj) {
    if (obj == null) {
        return true;
    }

	for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
	}
	return true;
}

function getRandomRGBA() {
	var o = Math.round, r = Math.random, s = 255;
	return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ', 0.28)';
}

function isDevUrl(windowHostname) {
    return windowHostname === "localhost" ? "/" : fullAppUrl;
}

function resetBuildReleaseJsonData() {
    buildJsonData = null;
    releaseJsonData = null;
}

function activateBuildButton() {
    $("#showBuildViewBtn").removeClass("button-inverse");
    $("#showBuildViewBtn").addClass("button");
    $("#showReleaseViewBtn").removeClass("button");
    $("#showReleaseViewBtn").addClass("button-inverse");
}

function activateReleaseButton() {
    $("#showReleaseViewBtn").removeClass("button-inverse");
    $("#showReleaseViewBtn").addClass("button");
    $("#showBuildViewBtn").removeClass("button");
    $("#showBuildViewBtn").addClass("button-inverse");
}