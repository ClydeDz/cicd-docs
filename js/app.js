$(document).ready(function () {
   
    let buildJsonUrl = sanityCheckUrl(getUrlVars()[buildJsonUrlQueryStringKey]);
    let releaseJsonUrl = sanityCheckUrl(getUrlVars()[releaseJsonUrlQueryStringKey]);

    if (urlExists(buildJsonUrl) || urlExists(releaseJsonUrl)) {
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

function sanityCheckUrl(url) {
    return url === undefined ? "" : url;
}
var jsonObj;

