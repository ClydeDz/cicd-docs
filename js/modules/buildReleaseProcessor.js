//////////////////////////////////
/////////    Process
//////////////////////////////////


function processJson() {
    var x = getBuildJson(buildJsonData);
    console.log("process json");
    console.log(x);
    var combinedJson = {
        buildDef: x, //TODO: process build here
        releaseDef: releaseJsonData
    }
    return combinedJson;
}