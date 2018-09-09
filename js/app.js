$(document).ready(function () {
   
    var buildJsonUrl = getUrlVars()[buildJsonUrlQueryStringKey];
    console.log(buildJsonUrl);
    if (buildJsonUrl === "" || buildJsonUrl === undefined) {
        //console.log("no qs");
        footerView();
        //importTestData();
        //TODO: uncomment this
        uploadScreenView();
       
    }
    else {
        console.log("foud qs");
    }
    
});

var jsonObj;