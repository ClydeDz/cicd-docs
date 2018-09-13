//////////////////////////////////////////
/////////    Template update starters
//////////////////////////////////////////

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
    //var visualizeJson = processJson();
    _switchTemplate(templateNames.BUILD, visualizeJson.buildDef);
}

function releaseVisualizeScreenView(visualizeJson) {
    //var visualizeJson = processJson();
    _switchTemplate(templateNames.RELEASE, visualizeJson.releaseDef);
}

//////////////////////////////////////
/////////    Template changer
/////////////////////////////////////

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
            document.getElementById('buildJsonUploadControl').addEventListener('change', handleBuildFileUpload, false);
            document.getElementById('releaseJsonUploadControl').addEventListener('change', handleReleaseFileUpload, false);
            document.getElementById('fileUploadGo').addEventListener('click', goToVisualization, false);
            $("#buildJsonUploadControlStatus").hide();
            $("#releaseJsonUploadControlStatus").hide();
            animateCards();
        });
    }
    if (templateName === templateNames.VISUALIZE) {
        $("#viewTemplateHolder").load("html-partials/visualize.html #visualizePartial", function () {
            var contents = document.getElementById('visualizePartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#view").html(output);
            visualization_ViewLoad(jsonData);
            document.getElementById('goBackBtn').addEventListener('click', goBackToUploadScreen, false);
            document.getElementById('showBuildViewBtn').addEventListener('click', goToBuild, false);
            document.getElementById('showReleaseViewBtn').addEventListener('click', goToRelease, false);
            document.getElementById('downloadPdf').addEventListener('click', downloadPdf, false);
        });
    }
    if (templateName === templateNames.BUILD) {
        $("#buildViewTemplateHolder").load("html-partials/build.html #buildPartial", function () {
            var contents = document.getElementById('buildPartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#buildView").html(output);
            //animateCards();
        });
    }
    if (templateName === templateNames.RELEASE) {
        $("#releaseViewTemplateHolder").load("html-partials/release.html #releasePartial", function () {
            var contents = document.getElementById('releasePartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#releaseView").html(output);
            //animateCards();
            //loadEnvironmentSlider();
        });
    }
    
}

///////////////////////////////////////////////
/////////    View loads (like page loads)
//////////////////////////////////////////////

function visualization_ViewLoad(combinedJson) {
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
    $("#showBuildViewBtn").removeClass("button-inverse");
    $("#showBuildViewBtn").addClass("button");
    $("#showReleaseViewBtn").removeClass("button");
    $("#showReleaseViewBtn").addClass("button-inverse");

    $("#buildView").show();
    animateCards();
    $("#releaseView").hide();
    //buildVisualizeScreenView();
}

function goToRelease() {
    $("#showReleaseViewBtn").removeClass("button-inverse");
    $("#showReleaseViewBtn").addClass("button");
    $("#showBuildViewBtn").removeClass("button");
    $("#showBuildViewBtn").addClass("button-inverse");

    $("#buildView").hide();
    $("#releaseView").show();
    animateCards();
    loadEnvironmentSlider();
    //releaseVisualizeScreenView();
}

function downloadPdf(e) {
    e.preventDefault();
    var visualizeJson = processJson();
    exportPdf(visualizeJson);
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

function __convertImgToDataURLviaCanvas(url) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    var dataURL;
    img.onload = function () {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');      
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL();
        //callback(dataURL);
        canvas = null;
        return dataURL;        
    };
    img.src = url;
}