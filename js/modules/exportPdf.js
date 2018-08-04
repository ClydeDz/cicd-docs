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

    // DOCUMENT HEADER
    doc = printDocumentHeader(doc);

    ////////////////////////
    //////   BUILD
    ////////////////////////

    if (buildReleaseJson.buildDef !== null) {
        var _buildJson = buildReleaseJson.buildDef;

        // BUILD PIPELINE SECTION
        doc = printBuildPipelineHeading(doc);

        // BUILD NAME, REPOSITORY, PROJECT AND AUTHOR
        doc = printBuildNameHeading(doc, _buildJson);
        doc = printRepositoryProjectAndAuthor(doc, _buildJson);

        // PROCESS / BUILD TASKS
        doc = printProcessHeading(doc);
        doc = printQueueDetails(doc, _buildJson);
        doc = printPhasesAndSteps(doc, _buildJson);

        // VARIABLES
        doc = printVariablesHeading(doc);
        doc = printVariables(doc, _buildJson);

        // TRIGGERS, RETENTION, ETC
        doc = printTriggersRetentionHeading(doc);
        doc = printTriggersAndRetention(doc, _buildJson);
    }

    ////////////////////////
    //////   RELEASE
    ////////////////////////

    //if (buildReleaseJson.releaseDef !== null) {
    //    doc.setFontSize(h2FontSize_const);
    //    doc.text(x_const, (yStartPoint = yStartPoint + lineHeight_const), 'Release Pipeline');
    //}

    // FOOTER
    doc.text("footer", x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)));

    doc.save('a4.pdf');
}


////////////////////////////////////////
//////   Build headlines
////////////////////////////////////////

function printDocumentHeader(doc) {
    doc.setFontSize(h1FontSize_const);
    var siteLogo = getBase64Image(document.getElementById("printSiteLogo"), null, null);
    doc.addImage(siteLogo, 'JPEG', x_const, yStartPoint - 15, 30, 30);
    doc.text(x_const + 40, yStartPoint + 5, 'CI/CD Docs');
    return doc;
}

function printBuildPipelineHeading(doc) {
    doc = setH2HeadingStyle(doc);
    doc.text(x_const, (yStartPoint = yStartPoint + hLineHeight_const * 2), 'BUILD PIPELINE');
    doc = drawLine(doc);
    yStartPoint = yStartPoint + (hLineHeight_const / 2);
    return doc;
}

function printBuildNameHeading(doc, _buildJson) {
    doc = setH3HeadingStyle(doc);
    doc.text(x_const, (yStartPoint = yStartPoint + hLineHeight_const), `Build name: ${_buildJson.name}`);
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


function printRepositoryProjectAndAuthor(doc, _buildJson) {
    doc = setBodyStyle(doc);

    var repositoryIcon = getBase64Image(document.getElementById("repositoryIcon"), iconSize, iconSize);
    var platformVstsIcon = getBase64Image(document.getElementById("platformVstsIcon"), iconSize, iconSize);

    doc.addImage(repositoryIcon, 'JPEG', x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), 14, 14);
    doc.textWithLink(_buildJson.repository.name, x_const + 20, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)-4), { url: _buildJson.repository.url });
    doc.addImage(platformVstsIcon, 'JPEG', x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), 14, 14);
    doc.textWithLink(_buildJson.project.name, x_const + 20, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)-4), { url: _buildJson.project.url });
    //doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Type: ${_buildJson.repository.type} repository.`);
    doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Created by ${_buildJson.author.displayName} on ${_buildJson.creationDate}.`);
    doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Email: ${_buildJson.author.email}`);

    return doc;
}

function printQueueDetails(doc, _buildJson) {
    doc = setBodyStyle(doc);
    var agentIcon = getBase64Image(document.getElementById("queueAgentIcon"), iconSize, iconSize);
    doc.addImage(agentIcon, 'JPEG', x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), 14, 14);
    doc.text(x_const + 20, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)-4), `${_buildJson.queue.displayName} agent`);
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
            y1: yStartPoint,
            y2: yStartPoint + 6,
            y3: yStartPoint + 3,
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
            { title: "Enabled", dataKey: "enabled" }
        ];
        var rows = [];

        // Loop thru all the steps/tasks in each phase
        for (stepsIndex = 0; stepsIndex < currentPhase.steps.length; stepsIndex++) {
            var currentStep = currentPhase.steps[stepsIndex];
            var _stepsArray = {};
            _stepsArray["name"] = currentStep.name;
            _stepsArray["version"] = currentStep.version;
            rows.push(_stepsArray);
        }

        // Insert all steps into the table and display
        var images = [];
        var enabledStatusIconImages = [];
        var taskIconIndex = 0; var enabledIconIndex = 0;
        doc.autoTable(columns, rows,
            {
                theme: 'striped',
                styles: { overflow: 'linebreak' },
                headerStyles: { fillColor: [142, 45, 226] },
                margin: { left: x_const },
                startY: (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)),
                showHeader: 'everyPage',
                drawCell: function (cell, opts) {

                    if (opts.column.index === 0) { //currentPhase.steps[i] != undefined
                        var _stepIcon = getBase64Image(document.getElementById(`stepIcon-${currentPhase.steps[taskIconIndex].id}`), 32, 32);
                        images.push({
                            url: _stepIcon,
                            x: cell.textPos.x,
                            y: cell.textPos.y
                        });
                        taskIconIndex++;
                    }

                    if (opts.column.index === 3) {
                        var _enabledIcon;
                        if (currentPhase.steps[enabledIconIndex].enabled) {
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
                        enabledIconIndex++;
                    }
                },
                addPageContent: function () {
                    for (var i = 0; i < images.length; i++) {
                        doc.addImage(images[i].url, images[i].x, images[i].y, 14, 14);
                        doc.addImage(enabledStatusIconImages[i].url, enabledStatusIconImages[i].x, enabledStatusIconImages[i].y, 14, 14);
                    }
                }
            });
        yStartPoint = doc.autoTable.previous.finalY;
    }
    return doc;
}


function printVariables(doc, _buildJson) {
    doc = setBodyStyle(doc);

    var columns = [
        { title: "Variable Name", dataKey: "key" },
        { title: "Variable Value", dataKey: "value" }
    ];
    var rows = [];

    // Loop thru all the variables
    for (variableIndex = 0; variableIndex < _buildJson.variables.length; variableIndex++) {
        var _variableArray = {};
        _variableArray["key"] = _buildJson.variables[variableIndex].key;
        _variableArray["value"] = _buildJson.variables[variableIndex].value;
        rows.push(_variableArray);
    }

    // Insert all the variables into the table
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


function printTriggersAndRetention(doc, _buildJson) {
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
