$(document).ready(function () {
   
    var buildJsonUrl = getUrlVars()[buildJsonUrlQueryStringKey];
    if (buildJsonUrl === "" || buildJsonUrl === undefined) {
        footerView();
        uploadScreenView();
    }
    else {
        // Found query string
    }
    
});

$("#siteLogo").click(function () {
    goBackToUploadScreen();
});

var jsonObj;

