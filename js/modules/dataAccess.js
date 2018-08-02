
function importTestData() {
    /// <summary>Method to import sticker data.</summary>
    $.getJSON("../samples/build/sample-build.json")
        .done(function (returnedData) {
            buildJson = returnedData;
            console.log("import test data");
            console.log(buildJson);
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });
}
