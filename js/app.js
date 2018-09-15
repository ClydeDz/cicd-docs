$(document).ready(function () {
   
    var buildJsonUrl = getUrlVars()[buildJsonUrlQueryStringKey];
    var buildJsonUrl = getUrlVars()[releaseJsonUrlQueryStringKey];
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

