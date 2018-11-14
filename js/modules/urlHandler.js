///////////////////////////////////////////
//////   Methods to handle URL upload
///////////////////////////////////////////

function getUrlVars(window) {
    try {
        if (window === null || (window.location.href === "" || window.location.href === null)) {
            return [];
        }
        
        let vars = [], hash;
        let hashes = splitIndividualQueryStringKeys(window.location.href);
        for (let i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    } catch (err) {
        airbrake.notify({
            error: err, context: { component: 'getUrlVars()', version: appVersionNumber }
        });
        return [];
    }
}

function splitIndividualQueryStringKeys(windowUrl) {
    return windowUrl.slice(windowUrl.indexOf('?') + 1).split('&');
}