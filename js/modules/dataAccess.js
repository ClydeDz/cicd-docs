
function importTestData() {
    /// <summary>Method to import sticker data.</summary>
    $.getJSON("../samples/build/sample-build.json")
        .done(function (returnedData) {
            buildJsonData = returnedData;
            importTestReleaseData(); //TODO: remove this line from here
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.error("Request Failed: " + err);
        });
}
function importTestReleaseData() {
    /// <summary>Method to import sticker data.</summary>
    $.getJSON("../samples/release/sample-release.json")
        .done(function (returnedData) {
            releaseJsonData = returnedData;
            visualizeScreenView(); //TODO: remove this line from here
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.error("Request Failed: " + err);
        });
}
