///////////////////////////////////////////////////
/////////    Methods to handle file upload
///////////////////////////////////////////////////


function handleBuildFileUpload(e) {
    _handleJsonFile(e, buildJsonText);
    sendInteractionClickData('build file uploaded', 'file has uploaded after clicking the upload button');
}

function handleClickOnBuildFileUpload(e) {
    sendInteractionClickData('build file upload button clicked', 'clicked from the upload view');
}

function handleReleaseFileUpload(e) {
    _handleJsonFile(e, releaseJsonText);   
    sendInteractionClickData('release file uploaded', 'file has uploaded after clicking the upload button');
}

function handleClickOnReleaseFileUpload(e) {
    sendInteractionClickData('release file upload button clicked', 'clicked from the upload view');
}


function _handleJsonFile(e, type) {
    try {
        var isBuildType = (type === buildJsonText);
        var fileName = isBuildType ? document.getElementById('buildJsonUploadControl').value
            : document.getElementById('releaseJsonUploadControl').value;
        var fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();

        if (!e.target.files[0]) {
            let errorMessage = "No file detected. Please try uploading a .json file.";
            showError(errorMessage);
            airbrake.notify({
                error: errorMessage, context: { component: '_handleJsonFile()', version: appVersionNumber, severity: 'warning' }
            });
            return;
        }

        if (e.target.files[0].size > 5242880) {
            let errorMessage = "The uploaded file exceeds the file size limit of 5MB. Please try uploading a smaller file instead.";
            showError(errorMessage);
            airbrake.notify({
                error: errorMessage, context: { component: '_handleJsonFile()', version: appVersionNumber, severity: 'warning' }
            });
            return;
        }

        if (fileExtension !== "json") {
            let errorMessage = `${fileExtension} file extension isn't supported at this stage. Please try uploading a .json file instead.`;
            showError(errorMessage);
            airbrake.notify({
                error: errorMessage, context: { component: '_handleJsonFile()', version: appVersionNumber, severity: 'warning' }
            });
            return;
        }

        var reader = new FileReader();
        reader.onload = function (event) {
            try {
                if (isBuildType) {
                    buildJsonData = JSON.parse(event.target.result);
                    $("#buildJsonUploadControlStatus").show();
                    $("#fileUploadGo").prop('disabled', false);
                }
                else {
                    releaseJsonData = JSON.parse(event.target.result);
                    $("#releaseJsonUploadControlStatus").show();
                    $("#fileUploadGo").prop('disabled', false);
                }
            } catch (error) {
                let errorMessage = "An error occured while trying to process the JSON file. Could you please check the file once again and try later?";
                showError(errorMessage);
                airbrake.notify({
                    error: errorMessage, context: { component: '_handleJsonFile()', version: appVersionNumber, severity: 'warning' }
                });
                return;
            }
            
        }
        reader.readAsText(e.target.files[0]);
    }
    catch (error) {
        let errorMessage = "An error occured while trying to upload the file. Please try again later.";
        showError(errorMessage);
        airbrake.notify({
            error: errorMessage, context: { component: '_handleJsonFile()', version: appVersionNumber, severity: 'warning' }
        });
        return;
    }
    
}

function startFileUploadFromUrl(buildDefUrl, releaseDefUrl) {
    try {
        resetBuildReleaseJsonData();
        let doesBuildDefinitionExist = buildDefUrl != "";
        let doesReleaseDefinitionExist = releaseDefUrl != "";

        if (!doesBuildDefinitionExist && !doesReleaseDefinitionExist) {
            let errorMessage = "Please enter the URL for the build and/or release definition.";
            showError(errorMessage);
            airbrake.notify({
                error: errorMessage, context: { component: 'startFileUploadFromUrl()', version: appVersionNumber, severity: 'warning' }
            });
            return;
        }
        else if (doesBuildDefinitionExist && doesReleaseDefinitionExist) {
            xhrUpload(buildDefUrl, buildJsonText, {
                "releaseDefUrl": releaseDefUrl
            });
        }
        else if (doesBuildDefinitionExist && !doesReleaseDefinitionExist) {
            xhrUpload(buildDefUrl, buildJsonText, {
                "releaseDefUrl": ""
            });
        }
        else {
            xhrUpload(releaseDefUrl, releaseJsonText, {
                "releaseDefUrl": ""
            });
        }      

    } catch (e) {
        let errorMessage = "An error occured while trying to upload the file. Please try again later.";
        showError(errorMessage);
        airbrake.notify({
            error: errorMessage, context: { component: 'startFileUploadFromUrl()', version: appVersionNumber, severity: 'warning' }
        });
        return;
    }
}

function xhrUpload(urlValue, type, callbackCode) {
    let isBuildType = (type === buildJsonText);

    $.getJSON(urlValue)
        .done(function (returnedData) {
            if (isBuildType) {
                buildJsonData = returnedData;                
            }
            else {
                releaseJsonData = returnedData;  
            }
            xhrUploadCallback(callbackCode);
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            airbrake.notify({
                error: err, context: { component: 'xhrUpload()', version: appVersionNumber }
            });
            xhrUploadCallback(callbackCode);
        });
}

function xhrUploadCallback(callbackCode) {
    if (callbackCode.releaseDefUrl != "") {
        xhrUpload(callbackCode.releaseDefUrl, releaseJsonText, {
            "releaseDefUrl": ""
        });
    } else {
        visualizeScreenView();
    }
}

