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

function exportPdf(buildReleaseJson) {
    var doc = new jsPDF('p', 'pt');

    // Common header 
    //////////////////////////////////////////////////////
    doc = printHeadline(doc);

    ////////////////////////
    //////   BUILD
    ////////////////////////

    if (buildReleaseJson.buildDef !== null) {
        var _buildJson = buildReleaseJson.buildDef;

        // BUILD PIPELINE SECTION
        //////////////////////////////////////////////////////
        doc = printBuildPipeline(doc);

        // BUILD NAME
        //////////////////////////////////////////////////////
        doc = printBuildName(doc, _buildJson);

        // Contents under build name
        doc = printContentsInsideBuildName(doc, _buildJson);

        // PROCESS / BUILD TASKS
        //////////////////////////////////////////////////////
        doc = printProcessHeading(doc);

        // Loop thru all the phases
        doc.setTextColor(100);
        doc.setFontType('normal');
        doc.setFontSize(pFontSize_const);

        // Queue
        doc = printQueueDetails(doc, _buildJson);

        // Phases and steps
        doc = printPhasesAndSteps(doc, _buildJson);

        // VARIABLES
        //////////////////////////////////////////////////////
        doc = printVariablesHeading(doc);

        // Contents under variables
        doc = printContentUnderVariables(doc, _buildJson);

        // TRIGGERS, RETENTION, ETC
        //////////////////////////////////////////////////////
        doc = printTriggersRetentionHeading(doc);

        // Contents under triggers, retention, etc.
        doc = printContentsUnderTriggerRetention(doc, _buildJson);

       
    }

    ////////////////////////
    //////   RELEASE
    ////////////////////////

    //if (buildReleaseJson.releaseDef !== null) {
    //    doc.setFontSize(h2FontSize_const);
    //    doc.text(x_const, (yStartPoint = yStartPoint + lineHeight_const), 'Release Pipeline');
    //}

    // FOOTER
    //////////////////////////////////////////////////////
    doc.text("footer", x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)));

    doc.save('a4.pdf');

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


////////////////////////////////////////
//////   Build headlines
////////////////////////////////////////

function printHeadline(doc) {
    doc.setFontSize(h1FontSize_const);
    var siteLogo = getBase64Image(document.getElementById("printSiteLogo"), null, null);
    doc.addImage(siteLogo, 'JPEG', x_const, yStartPoint - 15, 30, 30);
    doc.text(x_const + 40, yStartPoint + 5, 'CI/CD Docs');
    return doc;
}

function printBuildPipeline(doc) {
    doc = setH2HeadingStyle(doc);
    doc.text(x_const, (yStartPoint = yStartPoint + hLineHeight_const * 2), 'BUILD PIPELINE');

    var lineY = yStartPoint + 7;
    var lineX = x_const;
    var lineLength = 550;
    doc.setDrawColor(100);
    doc.line(lineX, lineY, lineLength, lineY);
    yStartPoint = yStartPoint + (hLineHeight_const / 2);
    return doc;
}

function printBuildName(doc, _buildJson) {
    doc.setFontSize(h3FontSize_const);
    doc.setFontType('normal');
    doc.setTextColor(142, 45, 226);
    doc.text(x_const, (yStartPoint = yStartPoint + hLineHeight_const), _buildJson.name);
    return doc;
}

function printProcessHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc.text(x_const, (yStartPoint = yStartPoint + (hLineHeight_const * 1.5)), 'Process');
    return doc;
}

function printVariablesHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc.text(x_const, (yStartPoint = yStartPoint + (hLineHeight_const * 1.5)), 'Variables');
    return doc;
}

function printTriggersRetentionHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc.text(x_const, (yStartPoint = yStartPoint + (hLineHeight_const * 1.5)), 'Triggers, Retention, etc.');
    return doc;
}


////////////////////////////////////////
//// Build pipeline contents
///////////////////////////////////////


function printContentsInsideBuildName(doc, _buildJson) {
    doc = setBodyStyle(doc);

    var repositoryIcon = getBase64Image(document.getElementById("repositoryIcon"), iconSize, iconSize);
    var platformVstsIcon = getBase64Image(document.getElementById("platformVstsIcon"), iconSize, iconSize);

    doc.addImage(repositoryIcon, 'JPEG', x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), 20, 20);
    doc.textWithLink(_buildJson.repository.name, x_const + 25, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), { url: _buildJson.repository.url });
    doc.addImage(platformVstsIcon, 'JPEG', x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), 20, 20);
    doc.textWithLink(_buildJson.project.name, x_const + 25, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), { url: _buildJson.project.url });
    //doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Type: ${_buildJson.repository.type} repository.`);
    doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Created by ${_buildJson.author.displayName} on ${_buildJson.creationDate}.`);
    doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Email: ${_buildJson.author.email}`);

    return doc;
}


function printQueueDetails(doc, _buildJson) {
    var agentIcon = getBase64Image(document.getElementById("queueAgentIcon"), iconSize, iconSize);
    doc.addImage(agentIcon, 'JPEG', x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), 20, 20);
    doc.text(x_const + 25, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `${_buildJson.queue.displayName}`);
    return doc;
}


function printPhasesAndSteps(doc, _buildJson) {

    var _phases = _buildJson.process;
    for (phaseIndex = 0; phaseIndex < _phases.length; phaseIndex++) {
        var currentPhase = _phases[phaseIndex];

        // Phase
        yStartPoint = yStartPoint + pLineHeight_const;
        // Triangle co-ords
        var triangle = {
            x1: x_const,
            x2: x_const,
            x3: x_const + 3,
            y1: yStartPoint + 6,
            y2: yStartPoint + 3,
            y3: yStartPoint,
            fill: 'FD'
        };

        doc.setFillColor(0);
        doc.triangle(triangle.x1, triangle.y1, triangle.x2, triangle.y2, triangle.x3, triangle.y3, triangle.fill);
        doc.text(triangle.x3 + 3, triangle.y3 + (triangle.y2 - triangle.y3), currentPhase.name);
        yStartPoint = triangle.y3;

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
                headerStyles: { fillColor: [142, 45, 226] },
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
                                _enabledIcon = getDisabledStatusIcon();
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
                    }
                }
            });
        yStartPoint = doc.autoTable.previous.finalY;//getNewPY(doc.autoTable.previous.finalY, hLineHeight_const);
    }
    return doc;
}


function printContentUnderVariables(doc, _buildJson) {

    doc = setBodyStyle(doc);

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
    return doc;
}


function printContentsUnderTriggerRetention(doc, _buildJson) {
    doc = setBodyStyle(doc);

    // Triggers
    doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Batch change enabled: ${_buildJson.triggers.batchChanges}`);
    doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Trigger type: ${_buildJson.triggers.triggerType}`);

    // Retention
    doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Email: ${_buildJson.retention.daysToKeep}`);
    doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Email: ${_buildJson.retention.minimumToKeep}`);
    return doc;
}


function getNewPY(oldY, lineHeight) {
    return oldY + lineHeight;
}
