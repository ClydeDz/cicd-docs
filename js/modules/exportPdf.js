
function getBase64Image(img, oImageWidth, oImageHeight) {
    var canvas = document.createElement("canvas");
    canvas.width = (oImageWidth || img.width);
    canvas.height = (oImageHeight || img.height);
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL; //dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function getEnabledStatusIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAyNJREFUWMPtlk9oVFcUxn/nzptYkHYhAUWzUVynLQYmbzINkVKQgiiRdDfdiLgJoonpzlaxS2dUXLnpJu4KLUGx0EUbkviSDPhv46IgbqIR/wRmREjf5N3jYjIzmcx7k5nJdGW/1TD33Pf7znfunTfwsUva2XToylC34wR7CWyPGFQ0thR0rb7Ijebe/mcG3Kx70GLSghwDPg+rUXgkypQJ7KT3g/e0IwYS1xK7xcZ/BE4B8Sb9FkFumiC47E14r9o2kLyadK2a34A9LeVa1RtjzAnv7MxMVIGJWujPDnxn1fy9DThAt7X2TzeTGmkpATczmFSxfwE7tgHfKN8Y801YEnUG1mf+GNjdAfA74NP1zy/jjvTOnpl9vbGgbgTrB64T8D9sl79fVctd7ykW7YXNRTUG3Kx7kNJp367uFPIrx3OjubfE144CS6Xu5HRfNnUgOgF1vqf5qxbZ+Sd5Z+TJpSc+gBTjY0DP+lqXI6QjDajosQ7Ah6cvTa8C9GdSFxF+qm2yllE5hIeuDHXHzdrrpjDhulPIr5wodx4KL/dJ0D0/Nr9Sk0BM1vaF1OZVJS2w3CE4gFjjlEdSNWCM7t1UWFDlyOL47K1AGUJ40SD2kSbhJZatsioGREU31cVisVgXQG587h9rORxiYuuZhzqosioGAq2Leae19m7y2uBghIn24ABWKo1Ub8EOfymkdKe19nbyatItm5Ag+FqVXwr5leNtwUGh+LyS/MaVRDb1UOCLkE3vjTHfhv2WtwgHuL8wNtdXnwAgylTEpppxbAOOitYwagyYwE4CfgMTtxOZgf524YCva7FbNU3XRZr96gboaIOHFIBfgZMtwhG4Pj82dzYygVIKwWXgZYPnfNYmfNm3zs91vM1feBPeKyN2GPi3VUgDrVrV4fvnp99saQDAO+fNi5LukIlVFUkvjt9biEgmWonMQL+I/E6b/wsFlq3qcBQ8MoGyFsfvLcQd6UX1BtG3I0y+wHXfOr2N4FsmsFF92dQBR0iX3ufyZUTZA0GmgkAmcxMzz5pMqXW5WXcXxPepBD0AorElKD4vv+P/Vyv6AP7tWxzDVgMmAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA4LTA0VDA3OjU0OjI0KzAwOjAwrQ8BwwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wOC0wNFQwNzo1NDoyNCswMDowMNxSuX8AAAAodEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL3RtcC9tYWdpY2stbFBSS282Zm45r2VhAAAAAElFTkSuQmCC";
}

function resetBodyColor(doc) {
    doc.setTextColor(100);
    return doc;
}

function colorBuildProcessTaskStatus(status) {
    if (status) {
        doc.setTextColor(0, 255, 0);
    }
    else {
        doc.setTextColor(255, 0, 0);
    }    
    return doc;
}

function exportPdf(buildReleaseJson) {
    var doc = new jsPDF('p', 'pt');

    // Document constants
    var x_const = 40;
    var yStartPoint = 50;
    var h1FontSize_const = 22;
    var h2FontSize_const = 18;
    var h3FontSize_const = 15;
    var pFontSize_const = 10;
    var hLineHeight_const = 28;
    var pLineHeight_const = 14;
    var iconSize = 60;

    // Common header
    doc.setFontSize(h1FontSize_const);
    var siteLogo = getBase64Image(document.getElementById("printSiteLogo"), null, null);
    doc.addImage(siteLogo, 'JPEG', x_const, yStartPoint-15 ,30,30);
    doc.text(x_const + 40, yStartPoint+5, 'CI/CD Docs');

    ////////////////////////
    //////   BUILD
    ///////////////////////
    if (buildReleaseJson.buildDef !== null) {
        var _buildJson = buildReleaseJson.buildDef;

        // BUILD PIPELINE SECTION
        //////////////////////////////////////////////////////
        doc.setFontSize(h2FontSize_const);
        doc.setFontType('bold');
        doc.setTextColor(39,39,39);
        doc.text(x_const, (yStartPoint = yStartPoint + hLineHeight_const * 2), 'BUILD PIPELINE');
        var lineY = yStartPoint + 7;
        var lineX = x_const;
        var lineLength = 550;
        doc.setDrawColor(100);
        doc.line(lineX, lineY, lineLength, lineY);
        //doc.line(lineX, lineY, lineLength, lineY);
        yStartPoint = yStartPoint + (hLineHeight_const/2);

        // BUILD NAME
        //////////////////////////////////////////////////////
        doc.setFontSize(h3FontSize_const);
        doc.setFontType('normal');
        doc.setTextColor(142, 45, 226);
        doc.text(x_const, (yStartPoint = yStartPoint + hLineHeight_const), _buildJson.name);

        // Contents under build name
        doc.setFontSize(pFontSize_const);
        doc.setFontType('normal');
        doc.setTextColor(100);

        var repositoryIcon = getBase64Image(document.getElementById("repositoryIcon"), iconSize, iconSize);
        var platformVstsIcon = getBase64Image(document.getElementById("platformVstsIcon"), iconSize, iconSize);

        doc.addImage(repositoryIcon, 'JPEG', x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), 20, 20);
        doc.textWithLink(_buildJson.repository.name, x_const+25, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), { url: _buildJson.repository.url });
        doc.addImage(platformVstsIcon, 'JPEG', x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), 20, 20);
        doc.textWithLink(_buildJson.project.name, x_const+25, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), { url: _buildJson.project.url });
        //doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Type: ${_buildJson.repository.type} repository.`);
        doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Created by ${_buildJson.author.displayName} on ${_buildJson.creationDate}.`);
        doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Email: ${_buildJson.author.email}`);

        // PROCESS / BUILD TASKS
        //////////////////////////////////////////////////////
        doc.setFontSize(h3FontSize_const);
        doc.setFontType('normal');
        doc.setTextColor(142, 45, 226);
        doc.text(x_const, (yStartPoint = yStartPoint + (hLineHeight_const*1.5)), 'Process');
       
        // Loop thru all the phases
        doc.setTextColor(100);
        doc.setFontType('normal');
        doc.setFontSize(pFontSize_const);

        // Queue
        var agentIcon = getBase64Image(document.getElementById("queueAgentIcon"), iconSize, iconSize);
        doc.addImage(agentIcon, 'JPEG', x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), 20, 20);
        doc.text(x_const + 25, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `${_buildJson.queue.displayName}`);

        var _phases = _buildJson.process;
        for (phaseIndex = 0; phaseIndex < _phases.length; phaseIndex++) {
            var currentPhase = _phases[phaseIndex];

            // Phase
            yStartPoint = yStartPoint + pLineHeight_const;
            // Triangle co-ords
            var triangleX1 = x_const;
            var triangleX2 = x_const;
            var triangleX3 = x_const+3;
            var triangleY1 = yStartPoint;
            var triangleY2 = yStartPoint + 6;
            var triangleY3 = yStartPoint + 3;
            doc.setFillColor(0);
            doc.triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3, 'FD');
            doc.text(triangleX3 + 3, triangleY3 + (triangleY2-triangleY3), currentPhase.name);
            yStartPoint = triangleY3;

            // Steps
            // Construct a table containing all steps in each phase
            var columns = [
                { title: "Task Icon", dataKey: "icon" },
                { title: "Name", dataKey: "name" },
                { title: "Version", dataKey: "version" },
                { title: "Status", dataKey: "status" }
            ];
            var rows = [];

            // Loop thru all the steps/tasks in each phase
            var _steps = currentPhase.steps;
            for (stepsIndex = 0; stepsIndex < _steps.length; stepsIndex++) {
                var currentStep = _steps[stepsIndex];
                
                var _stepsArray = {};
                //_stepsArray["image"] = agentIcon;
                _stepsArray["name"] = currentStep.name;
                _stepsArray["version"] = currentStep.version;
                //_stepsArray["status"] = currentStep.enabled;

                rows.push(_stepsArray);
            }
            var imgElements = document.querySelectorAll('#table tbody img');
            var images = [];
            var enabledStatusIconImages = [];
            var i = 0; var j = 0;
            // Insert all steps into the table and display
            doc.autoTable(columns, rows,
                {
                    theme: 'striped',
                    styles: { overflow: 'linebreak' },
                    headerStyles: { fillColor: [142, 45, 226]},
                    margin: { left: x_const },
                    startY: (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)),
                    showHeader: 'everyPage',
                    drawCell: function (cell, opts) {
                        console.log(opts.column);
                        if (opts.column.index === 0 || opts.column.index === 3) {

                            if (opts.column.index === 0) { //_steps[i] != undefined
                                console.log(i);
                                var _stepIcon = getBase64Image(document.getElementById(`stepIcon-${_steps[i].id}`), 32, 32);
                                images.push({
                                    url: _stepIcon,//agentIcon, //imgElements[i].src,
                                    x: cell.textPos.x,
                                    y: cell.textPos.y
                                });
                                i++;
                            }

                            if (opts.column.index === 3) {
                                console.log(j);
                                var _enabledIcon;
                                if (_steps[j].enabled) {
                                    _enabledIcon = getEnabledStatusIcon();
                                }
                                else {
                                    _enabledIcon = getEnabledStatusIcon();
                                }
                                enabledStatusIconImages.push({
                                    url: _enabledIcon,
                                    x: cell.textPos.x,
                                    y: cell.textPos.y
                                });
                                j++;
                            }
                        }
                    },
                    addPageContent: function () {
                        for (var i = 0; i < images.length; i++) {
                            doc.addImage(images[i].url, images[i].x, images[i].y, 16, 16);
                            doc.addImage(enabledStatusIconImages[i].url, enabledStatusIconImages[i].x, enabledStatusIconImages[i].y, 16, 16);
                           // doc.text(images[i].x + 30, images[i].y+12, _steps[i].name );
                        }
                    }
                });
            yStartPoint = doc.autoTable.previous.finalY;//getNewPY(doc.autoTable.previous.finalY, hLineHeight_const);
        }

        

        // VARIABLES
        //////////////////////////////////////////////////////
        doc.setFontSize(h3FontSize_const);
        doc.setFontType('normal'); 
        doc.setTextColor(142, 45, 226);
        doc.text(x_const, (yStartPoint = yStartPoint + (hLineHeight_const*1.5)), 'Variables');

        // Contents under variables
        doc.setFontSize(pFontSize_const);
        doc.setFontType('normal');
        doc.setTextColor(100);

        var columns = [
            { title: "Key", dataKey: "key" },
            { title: "Value", dataKey: "value" }
        ];
        var rows = [];

        // Loop thru all the variables
        for (variableIndex = 0; variableIndex < _buildJson.variables.length; variableIndex++) {
            var _variableArray = {};
            _variableArray["key"] = _buildJson.variables[variableIndex].key;
            _variableArray["value"] = _buildJson.variables[variableIndex].value;
            rows.push(_variableArray);
        }
        doc.autoTable(columns, rows,
            {
                theme: 'striped',
                headerStyles: { fillColor: [142, 45, 226] },
                margin: { left: x_const },
                startY: (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)),
                showHeader: 'everyPage'
            });   
        yStartPoint = doc.autoTable.previous.finalY;

     

        // TRIGGERS, RETENTION, ETC
        //////////////////////////////////////////////////////
        doc.setFontSize(h3FontSize_const);
        doc.setFontType('normal');
        doc.setTextColor(142, 45, 226);
        doc.text(x_const, (yStartPoint = yStartPoint + (hLineHeight_const*1.5)), 'Triggers, Retention, etc.');

        // Contents under triggers, retention, etc.
        doc.setFontSize(pFontSize_const);
        doc.setFontType('normal');
        doc.setTextColor(100);

        // Triggers
        doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Batch change enabled: ${_buildJson.triggers.batchChanges}`);
        doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Trigger type: ${_buildJson.triggers.triggerType}`);

        // Retention
        doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Email: ${_buildJson.retention.daysToKeep}`);
        doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Email: ${_buildJson.retention.minimumToKeep}`);

        // FOOTER
        //////////////////////////////////////////////////////
        doc.text("footer", x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)));
    }
    
    //if (buildReleaseJson.releaseDef !== null) {
    //    doc.setFontSize(h2FontSize_const);
    //    doc.text(x_const, (yStartPoint = yStartPoint + lineHeight_const), 'Release Pipeline');
    //}

    doc.save('a4.pdf');
   
}

function getNewPY(oldY, lineHeight) {
    return oldY + lineHeight;
}


 /*
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    var dataURL;
    img.onload = function () {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL();
        console.log(dataURL);
        console.log("b");
        doc.setFontSize(40);
        doc.text(30, 20, 'Hello world!');
        doc.addImage(dataURL, 'JPEG', 15, 40, 60, 60);
        //doc.output('datauri');
        doc.save('a4.pdf');
        //callback(dataURL);
        //canvas = null;
        //return dataURL;
    };
    console.log("c");
    img.src = '/images/logo/logo-sq.png';
    */
