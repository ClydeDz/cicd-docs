//////////////////////////////////
/////////    Process
//////////////////////////////////


function processJson() {
    var combinedJson = {
        buildDef: getBuildJson(buildJsonData),
        releaseDef: getReleaseJson(releaseJsonData)
    }
    return combinedJson;
}