
function handleUploadedImage(e) {
    try {
        _handleImage(e);
    }
    catch (err) {
        console.log("Error: handleUploadedImage" + err.message);
    }
}

function _handleImage(e) {
    var reader = new FileReader();
    var url = document.getElementById('buildJsonUploadControl').value;
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();

    if (!e.target.files) {
        console.log("no image selected");
    }
    console.log(e.target.files.length);
    // If target control has files
    if (e.target.files[0]) {
        if (e.target.files[0].size > 5242880) {
            //showErrorToast(errorCodes.fileSizeLimit, [""]);
        }
        else {
            // If target file matches the allowed extensions
            if (ext == "json") {
                reader.onload = function (event) {
                    //console.log(event.target.result);
                    jsonObj = JSON.parse(event.target.result);
                    console.log(jsonObj);
                }
                reader.readAsText(e.target.files[0]);
            }
            else {
                //showErrorToast(errorCodes.extNotSupported, ["" + ext]);
            }
        }
    }
    else {
        console.log("No image uploaded");
    }
}