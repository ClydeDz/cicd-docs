$(document).ready(function () {
   
    var buildJsonUrl = getUrlVars()[buildJsonUrlQueryStringKey];
    if (buildJsonUrl === "" || buildJsonUrl === undefined) {
        footerView();
        //importTestData();
        //TODO: uncomment this
        uploadScreenView();
       
    }
    else {
        // Found query string
    }
    
});

var jsonObj;