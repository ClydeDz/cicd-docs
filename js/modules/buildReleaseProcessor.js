//////////////////////////////////
/////////    Process
//////////////////////////////////


function processJson() {
    var x = getBuildJson(buildJson);
    console.log("process json");
    console.log(x);
    var combinedJson = {
        buildDef: x, //TODO: process build here
        releaseDef: releaseJson
    }
    return combinedJson;
}