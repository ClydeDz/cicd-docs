function uploadScreenView() {
    switchTemplate(templateNames.UPLOAD);
}

function switchTemplate(templateName) {
    if (templateName === templateNames.UPLOAD) {
        $("#viewTemplateHolder").load("html-partials/upload.html #uploadPartial", function () {
            var contents = document.getElementById('uploadPartial').innerHTML;
            var output = Mustache.render(contents, {});
            $("#view").html(output);
            document.getElementById('buildJsonUploadControl').addEventListener('change', handleUploadedImage, false);
        });
    }
    
}

