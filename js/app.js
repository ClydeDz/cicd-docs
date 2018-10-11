var airbrake = new airbrakeJs.Client({
    projectId: 198883,
    projectKey: '0e0a1145b6e06ae7a8e2328b4a76875a'
});

$(document).ready(function () {
   
    let buildJsonUrl = sanityCheckUrl(getUrlVars()[buildJsonUrlQueryStringKey]);
    let releaseJsonUrl = sanityCheckUrl(getUrlVars()[releaseJsonUrlQueryStringKey]);

    footerView();

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

