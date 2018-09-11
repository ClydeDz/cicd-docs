
function handleBuildFileUpload(e) {
    try {
        _handleJsonFile(e, buildJsonText);
        $("#buildJsonUploadControlStatus").show();
    }
    catch (err) {
        console.error("Error: handleBuildFileUpload " + err.message);
    }
}

function handleReleaseFileUpload(e) {
    try {
        _handleJsonFile(e, releaseJsonText);
        $("#releaseJsonUploadControlStatus").show();
    }
    catch (err) {
        console.error("Error: handleReleaseFileUpload " + err.message);
    }
}

function _handleJsonFile(e, type) {
    var isBuildType = (type === buildJsonText);    
    var fileName = isBuildType ? document.getElementById('buildJsonUploadControl').value
        : document.getElementById('releaseJsonUploadControl').value;
    var fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
    
    if (!e.target.files[0]) {
        console.error("No file uploaded");   
        //TODO: showErrorToast(errorCodes.noFileUploaded, ["" + ext]);
    }

    if (e.target.files[0].size > 5242880) {
        console.error("File size exceeded");        
        //TODO: showErrorToast(errorCodes.fileSizeLimit, [""]);
    }
    
    if (fileExtension !== "json") {
        console.error("File extension not supported"); 
        //TODO: showErrorToast(errorCodes.extNotSupported, ["" + ext]);
    }

    var reader = new FileReader();
    reader.onload = function (event) {
        if (isBuildType) {
            buildJsonData = JSON.parse(event.target.result);
        }
        else {
            releaseJsonData = JSON.parse(event.target.result);
        }
    }
    reader.readAsText(e.target.files[0]);
}


function xhrUpload() {
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickerAPI, {
        tags: "mount rainier",
        tagmode: "any",
        format: "json"
    })
    .done(function (data) {
        $.each(data.items, function (i, item) {
            $("<img>").attr("src", item.media.m).appendTo("#images");
            if (i === 3) {
                return false;
            }
        });
    });
}