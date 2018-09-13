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

function showError(errorMessage) {
    $("#errorModal").modal("show");
    $("#errorMessage").html(errorMessage);
}

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

var jsonObj;