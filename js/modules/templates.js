//////////////////////////////////////////
/////////    Template update starters
//////////////////////////////////////////

function uploadScreenView() {
    _switchTemplate(templateNames.UPLOAD, {});
}

function visualizeScreenView() {
    var visualizeJson = processJson();
    _switchTemplate(templateNames.VISUALIZE, visualizeJson);
}

function buildVisualizeScreenView() {
    var visualizeJson = processJson();
    console.log("buildVisualizeScreenView");
    console.log(visualizeJson.buildDef);
    _switchTemplate(templateNames.BUILD, visualizeJson.buildDef);
}

function releaseVisualizeScreenView() {
    var visualizeJson = processJson();
    _switchTemplate(templateNames.RELEASE, visualizeJson.releaseDef);
}

//////////////////////////////////////
/////////    Template changer
/////////////////////////////////////

function _switchTemplate(templateName, jsonData) {
    if (templateName === templateNames.UPLOAD) {
        $("#viewTemplateHolder").load("html-partials/upload.html #uploadPartial", function () {
            var contents = document.getElementById('uploadPartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#view").html(output);
            document.getElementById('buildJsonUploadControl').addEventListener('change', handleBuildFileUpload, false);
            document.getElementById('fileUploadGo').addEventListener('click', goToVisualization, false);
        });
    }
    if (templateName === templateNames.VISUALIZE) {
        $("#viewTemplateHolder").load("html-partials/visualize.html #visualizePartial", function () {
            var contents = document.getElementById('visualizePartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#view").html(output);
            visualization_ViewLoad(jsonData);
            document.getElementById('showBuildViewBtn').addEventListener('click', goToBuild, false);
            document.getElementById('showReleaseViewBtn').addEventListener('click', goToRelease, false);
        });
    }
    if (templateName === templateNames.BUILD) {
        $("#buildReleaseViewTemplateHolder").load("html-partials/build.html #buildPartial", function () {
            var contents = document.getElementById('buildPartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#buildReleaseView").html(output);
           
        });
    }
    if (templateName === templateNames.RELEASE) {
        $("#buildReleaseViewTemplateHolder").load("html-partials/release.html #releasePartial", function () {
            var contents = document.getElementById('releasePartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#buildReleaseView").html(output);
           
        });
    }
    
}

///////////////////////////////////////////////
/////////    View loads (like page loads)
//////////////////////////////////////////////

function visualization_ViewLoad(combinedJson) {
    if (combinedJson.buildDef != null) {
        buildVisualizeScreenView();
    }
    else {
        releaseVisualizeScreenView();
    }
}

//////////////////////////////////////////////
/////////    Navigation buttons actions
/////////////////////////////////////////////

function goToVisualization(e) {
    visualizeScreenView();
}

function goToBuild(e) {
    buildVisualizeScreenView();
}

function goToRelease(e) {
    releaseVisualizeScreenView();
}



