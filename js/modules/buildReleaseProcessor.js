//////////////////////////////////
/////////    Process
//////////////////////////////////


function processJson() {

    var combinedJson = {
        buildDef: getBuildJson(buildJson), //TODO: process build here
        releaseDef: releaseJson
    }
    return combinedJson;
}