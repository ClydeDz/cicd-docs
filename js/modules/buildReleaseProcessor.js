//////////////////////////////////
/////////    Process
//////////////////////////////////

function processJson() {
    let isBuildDefinitionUploaded =  !isEmpty(buildJsonData);
    let isReleaseDefinitionUploaded = !isEmpty(releaseJsonData);
    
    let combinedJson = {
        buildDef: isBuildDefinitionUploaded ? getBuildJson(buildJsonData) : null,
        releaseDef: isReleaseDefinitionUploaded ? getReleaseJson(releaseJsonData) : null
    }
    return combinedJson;
}