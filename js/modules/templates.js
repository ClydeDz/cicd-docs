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
            animateCards();    
        });
    }
    if (templateName === templateNames.RELEASE) {
        $("#releaseViewTemplateHolder").load("html-partials/release.html #releasePartial", function () {
            var contents = document.getElementById('releasePartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#releaseView").html(output);
            release_ViewLoad();    
            animateCards();    
        });
    }    
}

////////////////////////////////////////////////////////////////////////
/////////    Methods for each template/view loads (like page loads)
///////////////////////////////////////////////////////////////////////

function upload_ViewLoad() {
	// Attach event listeners for buttons
    document.getElementById('buildJsonUploadControl').addEventListener('change', handleBuildFileUpload, false);
    document.getElementById('buildJsonUploadControl').addEventListener('click', handleClickOnBuildFileUpload, false);

    document.getElementById('releaseJsonUploadControl').addEventListener('change', handleReleaseFileUpload, false);
    document.getElementById('releaseJsonUploadControl').addEventListener('click', handleClickOnReleaseFileUpload, false);

    document.getElementById('fileUploadGo').addEventListener('click', goToVisualization, false);
    document.getElementById('urlUploadGo').addEventListener('click', function () {
            sendInteractionClickData('upload via url button', 'clicked from upload view');
            startFileUploadFromUrl($('#buildJsonUrlUploadControl').val(), $('#releaseJsonUrlUploadControl').val());
        }, false);

	// Hide the status icons in the beginning
	$("#buildJsonUploadControlStatus").hide();
    $("#releaseJsonUploadControlStatus").hide();

    $("#buildJsonUrlUploadControl, #releaseJsonUrlUploadControl").keyup(function () {
        let buildDefUrl = $('#buildJsonUrlUploadControl').val();
        let releaseDefUrl = $('#releaseJsonUrlUploadControl').val();
        
        if (buildDefUrl != "" || releaseDefUrl != "") {
            $("#urlUploadGo").prop('disabled', false);
        }
        else {
            $("#urlUploadGo").prop('disabled', true);
        }
    });

	// Animate the UI to make an entrance
	animateCards();
}

function visualization_ViewLoad(combinedJson) {
	// Attach event listeners for buttons
	document.getElementById('goBackBtn').addEventListener('click', goBackToUploadScreen, false);
	document.getElementById('showBuildViewBtn').addEventListener('click', goToBuild, false);
    document.getElementById('showReleaseViewBtn').addEventListener('click', function () {
        goToRelease();
        setTimeout(function () {
                $('.environment-slider').slick('refresh');
            }, 200);
    }, false);
	document.getElementById('downloadPdf').addEventListener('click', downloadPdf, false);

	// Based on if we have the build and release definitions uploaded, decide how the UI appears
    let doesBuildDefinitionExist = !isEmpty(combinedJson.buildDef);
    let doesReleaseDefinitionExist = !isEmpty(combinedJson.releaseDef);

    if (doesBuildDefinitionExist) {
        buildVisualizeScreenView(combinedJson);
        activateBuildButton();
    }
    else {
        $("#showBuildViewBtn").prop('disabled', true);
    }
    if (doesReleaseDefinitionExist) {
        releaseVisualizeScreenView(combinedJson);
        activateReleaseButton();
    }
    else {
        $("#showReleaseViewBtn").prop('disabled', true);
    }
    
    if (doesBuildDefinitionExist && doesReleaseDefinitionExist) {
        goToBuild();
    }
    else if (doesBuildDefinitionExist && !doesReleaseDefinitionExist) {
        goToBuild();
    }
    else if (!doesBuildDefinitionExist && doesReleaseDefinitionExist) {
        goToRelease();
    }
    else {
        alert("No build or rel found");
    } 
}

function release_ViewLoad() {
    // The environments are a slider component, so lets initiate that here
    setTimeout(
        function () {
            loadEnvironmentSlider();
        }, 1500);
}

//////////////////////////////////////////////
/////////    Navigation buttons actions
/////////////////////////////////////////////

function goToVisualization(e) {
    sendInteractionClickData('file upload button', 'clicked from upload view');
    visualizeScreenView();
}

function goBackToUploadScreen() {
    uploadScreenView();
    resetBuildReleaseJsonData();
    let cleanUrl = window.location.hostname == "localhost" ? "/" : "https://clydedz.github.io/cicd-docs/";
    window.history.replaceState({}, document.title, cleanUrl); // removes query string from URL

    sendInteractionClickData('back to upload screen button','clicked from visualize view');
}

function goToBuild() {
	// Add focus on the build button
    activateBuildButton();

	// Show the build view
    $("#buildView").show();
	$("#releaseView").hide();

	// Animate the entrance of the cards 
    animateCards();   

    sendInteractionClickData('build view button', 'clicked from visualize view');
}

function goToRelease() {
	// Add focus on the release button
    activateReleaseButton();

	// Show the release view
	$("#releaseView").show();
	$("#buildView").hide();
    
    // Animate the entrance of the cards 
    animateCards();

    sendInteractionClickData('release view button', 'clicked from visualize view');
}

function loadEnvironmentSlider() {
    $('.environment-slider').not('.slick-initialized').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		prevArrow: $('.prev'),
        nextArrow: $('.next'),
        adaptiveHeight: true
	});
}

function downloadPdf(e) {
    e.preventDefault();
    var visualizeJson = processJson();
    exportPdf(visualizeJson);
    sendInteractionClickData('export pdf button', 'clicked from visualize view');
}


