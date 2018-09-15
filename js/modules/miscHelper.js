///////////////////////////////////////////////
//////   Contains generic helper methods 
///////////////////////////////////////////////

function isEmpty(obj) {
    if (obj == null) {
        return true;
    }

	for (var key in obj) {
		if (obj.hasOwnProperty(key))
			return false;
	}
	return true;
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function random_rgba() {
	let o = Math.round, r = Math.random, s = 255;
	return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ', 0.28)';
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