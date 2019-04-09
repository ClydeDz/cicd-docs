// Serverless endpoint to help generate an uptime status badge.
// Author: Clyde D'Souza (@ClydeDz)

const EventSource = require('eventsource');
const cicdDocsStatusPage = 'https://cicd-docs.hund.io/live/v2/status_page';
const idealUptime = 100;
const redirectHttpStatusCode = 302;

module.exports = function (ctx, req, res) {
    try {
        var evtSource = new EventSource(cicdDocsStatusPage);
        evtSource.addEventListener("init_event", function (e) {
            evtSource.close();
            var response = JSON.parse(e.data);
            console.error(response);
            if (response.percent_uptime === idealUptime) {
                res.writeHead(redirectHttpStatusCode, { 'Location': `https://img.shields.io/badge/uptime-${response.percent_uptime}%25-brightgreen.svg` });
            }
            else {
                res.writeHead(redirectHttpStatusCode, { 'Location': `https://img.shields.io/badge/uptime-${response.percent_uptime}%25-orange.svg` });
            }
            res.end();
        });
    }
    catch (ex) {
        console.error(ex);
        res.writeHead(redirectHttpStatusCode, { 'Location': `https://img.shields.io/badge/uptime-n%2Fa-lightgrey.svg` });
    }
};