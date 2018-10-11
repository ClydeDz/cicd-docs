///////////////////////////////////////////
//////   Methods to handle URL upload
///////////////////////////////////////////


function getUrlVars() {
    try{
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
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