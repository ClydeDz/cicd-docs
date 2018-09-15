$(document).ready(function () {
   
    let buildJsonUrl = getUrlVars()[buildJsonUrlQueryStringKey];
    let releaseJsonUrl = getUrlVars()[releaseJsonUrlQueryStringKey];
    if (urlExists(buildJsonUrl) || urlExists(releaseJsonUrl)) {
        // Found query string
        startFileUploadFromUrl(buildJsonUrl, releaseJsonUrl);
    }
    else {
        footerView();
        uploadScreenView();      
    }
    
});

$("#siteLogo").click(function () {
    goBackToUploadScreen();
});


function urlExists(url) {
    return !(url === "" || url === undefined);
}
var jsonObj;

