
function importTestData() {
    /// <summary>Method to import sticker data.</summary>
    $.getJSON("../samples/build/sample-build.json")
        .done(function (returnedData) {
            buildJsonData = returnedData;
            visualizeScreenView(); //TODO: remove this line from here
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });
}
