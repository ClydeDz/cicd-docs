$(document).ready(function () {
    var buildJsonUrl = getUrlVars()[BUILDJSONURL_QUERYSTRING];
    console.log(buildJsonUrl);
    if (buildJsonUrl === "" || buildJsonUrl === undefined) {
        console.log("no qs");
        uploadScreenView();
    }
    else {
        console.log("foud qs");
    }
});

var jsonObj;