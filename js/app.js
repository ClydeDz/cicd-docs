$(document).ready(function () {
    var buildJsonUrl = getUrlVars()[buildJsonUrlQueryStringKey];
    console.log(buildJsonUrl);
    if (buildJsonUrl === "" || buildJsonUrl === undefined) {
        console.log("no qs");
        importTestData();
        uploadScreenView();
    }
    else {
        console.log("foud qs");
    }
});

var jsonObj;