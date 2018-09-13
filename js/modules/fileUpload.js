
function handleBuildFileUpload(e) {
    _handleJsonFile(e, buildJsonText); 
}

function handleReleaseFileUpload(e) {
    _handleJsonFile(e, releaseJsonText);   
}

function _handleJsonFile(e, type) {
    try {
        var isBuildType = (type === buildJsonText);
        var fileName = isBuildType ? document.getElementById('buildJsonUploadControl').value
            : document.getElementById('releaseJsonUploadControl').value;
        var fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();

        if (!e.target.files[0]) {
            showError("No file detected. Please try uploading a .json file.");
            return;
        }

        if (e.target.files[0].size > 5242880) {
            showError("The uploaded file exceeds the file size limit of 5MB. Please try uploading a smaller file instead.");
            return;
        }

        if (fileExtension !== "json") {
            showError(`${fileExtension} file extension isn't supported at this stage. Please try uploading a .json file instead.`);
            return;
        }

        var reader = new FileReader();
        reader.onload = function (event) {
            try {
                if (isBuildType) {
                    buildJsonData = JSON.parse(event.target.result);
                    $("#buildJsonUploadControlStatus").show();
                }
                else {
                    releaseJsonData = JSON.parse(event.target.result);
                    $("#releaseJsonUploadControlStatus").show();
                }
            } catch (error) {
                showError("An error occured while trying to process the JSON file. Could you please check the file once again and try later?");
                return;
            }
            
        }
        reader.readAsText(e.target.files[0]);
    }
    catch (error) {
        showError("An error occured while trying to upload the file. Please try again later.");
        return;
    }
    
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