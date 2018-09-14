////////////////////////////////////////////////////////////
/////////   Methods to initiate switch templates/views 
///////////////////////////////////////////////////////////

function footerView() {
    _switchTemplate(templateNames.FOOTER, { "version": appVersionNumber });
}

function uploadScreenView() {
    _switchTemplate(templateNames.UPLOAD, {});
}

function visualizeScreenView() {
    var visualizeJson = processJson();
    _switchTemplate(templateNames.VISUALIZE, visualizeJson);
}

function buildVisualizeScreenView(visualizeJson) {
    _switchTemplate(templateNames.BUILD, visualizeJson.buildDef);
}

function releaseVisualizeScreenView(visualizeJson) {
    _switchTemplate(templateNames.RELEASE, visualizeJson.releaseDef);
}

////////////////////////////////////////////////
/////////    Method that switches template
///////////////////////////////////////////////

function _switchTemplate(templateName, jsonData) {
    if (templateName === templateNames.FOOTER) {
        $("#footerViewTemplateHolder").load("html-partials/footer.html #footerPartial", function () {
            var contents = document.getElementById('footerPartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#footerView").html(output);
        });
    }
    if (templateName === templateNames.UPLOAD) {
        $("#viewTemplateHolder").load("html-partials/upload.html #uploadPartial", function () {
            var contents = document.getElementById('uploadPartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#view").html(output);
			upload_ViewLoad();
        });
    }
    if (templateName === templateNames.VISUALIZE) {
        $("#viewTemplateHolder").load("html-partials/visualize.html #visualizePartial", function () {
            var contents = document.getElementById('visualizePartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#view").html(output);
            visualization_ViewLoad(jsonData);            
        });
    }
    if (templateName === templateNames.BUILD) {
        $("#buildViewTemplateHolder").load("html-partials/build.html #buildPartial", function () {
            var contents = document.getElementById('buildPartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#buildView").html(output);
        });
    }
    if (templateName === templateNames.RELEASE) {
        $("#releaseViewTemplateHolder").load("html-partials/release.html #releasePartial", function () {
            var contents = document.getElementById('releasePartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#releaseView").html(output);
        });
    }    
}

////////////////////////////////////////////////////////////////////////
/////////    Methods for each template/view loads (like page loads)
///////////////////////////////////////////////////////////////////////

function upload_ViewLoad() {
	// Attach event listeners for buttons
	document.getElementById('buildJsonUploadControl').addEventListener('change', handleBuildFileUpload, false);
	document.getElementById('releaseJsonUploadControl').addEventListener('change', handleReleaseFileUpload, false);
	document.getElementById('fileUploadGo').addEventListener('click', goToVisualization, false);

	// Hide the status icons in the beginning
	$("#buildJsonUploadControlStatus").hide();
	$("#releaseJsonUploadControlStatus").hide();

	// Animate the UI to make an entrance
	animateCards();
}

function visualization_ViewLoad(combinedJson) {
	// Attach event listeners for buttons
	document.getElementById('goBackBtn').addEventListener('click', goBackToUploadScreen, false);
	document.getElementById('showBuildViewBtn').addEventListener('click', goToBuild, false);
	document.getElementById('showReleaseViewBtn').addEventListener('click', goToRelease, false);
	document.getElementById('downloadPdf').addEventListener('click', downloadPdf, false);

	// Based on if we have the build and release definitions uploaded, decide how the UI appears
    let doesBuildDefinitionExist = combinedJson.buildDef != null;
    let doesReleaseDefinitionExist = combinedJson.releaseDef != null;
    let noBuildNoReleaseDefinition = !doesBuildDefinitionExist && !doesReleaseDefinitionExist; 

    if (doesBuildDefinitionExist) {
        buildVisualizeScreenView(combinedJson);
    }
    if (doesReleaseDefinitionExist) {
        releaseVisualizeScreenView(combinedJson);
    }

    if (noBuildNoReleaseDefinition) {
        alert("No build or rel found");
    }

    if (doesBuildDefinitionExist && doesReleaseDefinitionExist) {
        //$("#releaseView").hide();
        goToBuild();
    }
}

//////////////////////////////////////////////
/////////    Navigation buttons actions
/////////////////////////////////////////////

function goToVisualization(e) {
    visualizeScreenView();
}

function goBackToUploadScreen() {
    uploadScreenView();
}

function goToBuild() {
	// Add focus on the build button
	$("#showBuildViewBtn").removeClass("button-inverse");
    $("#showBuildViewBtn").addClass("button");
    $("#showReleaseViewBtn").removeClass("button");
    $("#showReleaseViewBtn").addClass("button-inverse");

	// Show the build view
    $("#buildView").show();
	$("#releaseView").hide();

	// Animate the entrance of the cards 
	animateCards();    
}

function goToRelease() {
	// Add focus on the release button
    $("#showReleaseViewBtn").removeClass("button-inverse");
    $("#showReleaseViewBtn").addClass("button");
    $("#showBuildViewBtn").removeClass("button");
    $("#showBuildViewBtn").addClass("button-inverse");

	// Show the release view
	$("#releaseView").show();
	$("#buildView").hide();

	// Animate the entrance of the cards 
	animateCards();

	// The environments are a slider component, so lets initiate that here
    loadEnvironmentSlider();
}

function loadEnvironmentSlider() {
	$('.environment-slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});
}

function downloadPdf(e) {
    e.preventDefault();
    var visualizeJson = processJson();
    exportPdf(visualizeJson);
}


