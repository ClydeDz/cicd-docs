// Serverless endpoint to help generate an 'operational status' status badge.
// Author: Clyde D'Souza (@ClydeDz)

const EventSource = require('eventsource');
const cicdDocsStatusPage = 'https://cicd-docs.hund.io/live/v2/status_page';
const idealStatus = 'operational';
const redirectHttpStatusCode = 302;

module.exports = function (ctx, req, res) {
    try {
        var evtSource = new EventSource(cicdDocsStatusPage);
        evtSource.addEventListener("init_event", function (e) {
            evtSource.close();
            var response = JSON.parse(e.data);
            console.error(response);
            if (response.state === idealStatus) {
                res.writeHead(redirectHttpStatusCode, { 'Location': `https://img.shields.io/badge/status-${response.state}-brightgreen.svg` });
            }
            else {
                res.writeHead(redirectHttpStatusCode, { 'Location': `https://img.shields.io/badge/status-${response.state}-orange.svg` });
            }
            res.end();
        });
    }
    catch (ex) {
        console.error(ex);
        res.writeHead(redirectHttpStatusCode, { 'Location': `https://img.shields.io/badge/status-n%2Fa-lightgrey.svg` });
    }
};