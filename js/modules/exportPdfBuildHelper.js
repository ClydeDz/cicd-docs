////////////////////////////////////////
//////   Build headlines
////////////////////////////////////////

function printDocumentHeader(doc) {
    doc = setH1HeadingStyle(doc);
    var siteLogo = getBase64Image(document.getElementById("printSiteLogo"), null, null);
    doc.addImage(siteLogo, 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 15, 35, 35);
    doc.text(pdf.xAxisValue + 45, pdf.yAxisValue + 12, appName);
    return doc;
}

function printBuildPipelineHeading(doc) {
    doc = setH2HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.HEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'BUILD PIPELINE');
    doc = drawLine(doc, lineObjectLength.FULL);
    return doc;
}

function printBuildNameHeading(doc, _buildJson) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Build name: ${_buildJson.name}`);
    return doc;
}

function printProcessHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Process');
    return doc;
}

function printVariablesHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Variables');
    return doc;
}

function printRetentionRulesHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Retention rules');
    return doc;
}

function printMetaInformationHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Meta information');
    return doc;
}


////////////////////////////////////////
////    Build pipeline contents
///////////////////////////////////////


function printRepositoryAndProject(doc, _buildJson) {
    doc = setBodyStyle(doc);

    var repositoryIcon = getBase64Image(document.getElementById("repositoryIcon"), pdf.iconSize, pdf.iconSize);
    var platformVstsIcon = getBase64Image(document.getElementById("platformVstsIcon"), pdf.iconSize, pdf.iconSize);

    // Repo
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(repositoryIcon, 'JPEG', pdf.xAxisValue, pdf.yAxisValue, pdf.printIconSize, pdf.printIconSize);
    doc.textWithLink(_buildJson.repository.name, pdf.xAxisValue + 20, pdf.yAxisValue + 10, { url: _buildJson.repository.url });
    // Project
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(platformVstsIcon, 'JPEG', pdf.xAxisValue, pdf.yAxisValue + 5 , pdf.printIconSize, pdf.printIconSize);
    doc.textWithLink(_buildJson.project.name, pdf.xAxisValue + 20, pdf.yAxisValue + 15, { url: _buildJson.project.url });

    return doc;
}

function printAuthorDetails(doc, _buildJson) {
    doc = setBodyStyle(doc);
    var createdOn = new Date(_buildJson.creationDate);

    // Author
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Created by ${_buildJson.author.displayName} on ${createdOn.toLocaleString()}.`);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Email: ${_buildJson.author.email}`);

    return doc;
}


function printBuildMetaInformation(doc, _buildJson) {
    doc = setBodyStyle(doc);
    
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Build number format: ${_buildJson.metaInformation.buildNumberFormat}`);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Version: ${_buildJson.metaInformation.version}`);

    return doc;
}


function printQueueDetails(doc, _buildJson) {
    doc = setBodyStyle(doc);
    var agentIcon = getBase64Image(document.getElementById("queueAgentIcon"), pdf.iconSize, pdf.iconSize);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(agentIcon, 'JPEG', pdf.xAxisValue, pdf.yAxisValue, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + 20, pdf.yAxisValue + 10, `${_buildJson.queue.displayName} agent`);
    return doc;
}

function printPhasesAndSteps(doc, _buildJson) {
    var _phases = _buildJson.process;
    for (phaseIndex = 0; phaseIndex < _phases.length; phaseIndex++) {
        var currentPhase = _phases[phaseIndex];

        // Phase
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        // Triangle co-ords
        var triangle = {
            x1: pdf.xAxisValue,
            x2: pdf.xAxisValue,
            x3: pdf.xAxisValue + 3,
            y1: pdf.yAxisValue,
            y2: pdf.yAxisValue + 6,
            y3: pdf.yAxisValue + 3,
            fill: 'FD'
        };

        doc.setFillColor(0);
        doc.triangle(triangle.x1, triangle.y1, triangle.x2, triangle.y2, triangle.x3, triangle.y3, triangle.fill);
        doc = setH4HeadingStyle(doc);
        doc.text(triangle.x3 + 7, triangle.y3 + (triangle.y2 - triangle.y3), currentPhase.name);
        pdf.yAxisValue = triangle.y2;

        doc = printPhaseMetaInformation(doc, currentPhase);

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
        var images = []; var printImages = []; var enabledStatusIconImages = [];
        var taskIconIndex = 0; var enabledIconIndex = 0;
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.autoTable(columns, rows,
            {
                theme: 'striped',
                styles: { overflow: 'linebreak' },
                headerStyles: { fillColor: [142, 45, 226] },
                margin: { left: pdf.xAxisValue },
                startY: pdf.yAxisValue,
                showHeader: 'everyPage',
                drawCell: function (cell, opts) {
                    // Column 1 or index 0 (starts from 0) is 'task icon'
                    if (opts.column.index === 0) {
                        //TODO: add extra checks: currentPhase.steps[i] != undefined
                        var _stepIcon = getBase64Image(document.getElementById(`stepIcon-${currentPhase.steps[taskIconIndex].id}`), 32, 32);
                        images.push({
                            url: _stepIcon,
                            x: cell.textPos.x,
                            y: cell.textPos.y,
                            id: currentPhase.steps[taskIconIndex].id
                        });
                        taskIconIndex++;
                    }

                    // Column 4 or index 3 (starts from 0) is 'enabled'
                    if (opts.column.index === 3) {
                        var _enabledIcon = getEnabledDisabledIcon(currentPhase.steps[enabledIconIndex].enabled);
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
                        var imageNotAlreadyPrinted = true;
                        // Check if current image is already printed
                        for (var printImagesIndex = 0; printImagesIndex < printImages.length; printImagesIndex++) {
                            if (images[i].id === printImages[printImagesIndex].id) {
                                imageNotAlreadyPrinted = false;
                                break;
                            }
                        }
                        if (imageNotAlreadyPrinted) {
                            // If its not printed, push it to the printed images store
                            printImages.push({
                                id: images[i].id
                            });

                            doc.addImage(images[i].url, images[i].x, images[i].y, pdf.printIconSize, pdf.printIconSize);
                            doc.addImage(enabledStatusIconImages[i].url, enabledStatusIconImages[i].x, enabledStatusIconImages[i].y, pdf.printIconSize, pdf.printIconSize);
                        }
                    }
                }
            });
        pdf.yAxisValue = doc.autoTable.previous.finalY;
    }
    return doc;
}


function printPhaseMetaInformation(doc, phase) {
    doc = setBodyStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    pdf.yAxisValue = pdf.yAxisValue + 10;
    let getParallelismValue = () => {
        switch (phase.executionType) {
            case 0:
                return "None";
            case 1:
                return " Multi-config";
            case 2:
                return "Multi-agent";
            default:
                return "None";
        }
    };
    let getAgentType = () => {
        switch (phase.phaseType) {
            case 1:
                return "Runs on agent";
            case 2:
                return "Runs on server";
            default:
                return "Runs on agent";
        }
    };
    let getAgentTypeIcon = () => {
        switch (phase.phaseType) {
            case 1:
                return getServerOffIcon();
            case 2:
                return getServerIcon();
            default:
                return getServerOffIcon();
        }
    };

    // Agent execution
    doc.addImage(getParallelismIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue-11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + (pdf.printIconSize + 7), pdf.yAxisValue, `Parallelism: ${getParallelismValue()}`);
    // Agent type
    doc.addImage(getAgentTypeIcon(), 'JPEG', pdf.xAxisValue+150, pdf.yAxisValue-11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue +170, pdf.yAxisValue, `${getAgentType()}`);
    return doc;
}

function printVariables(doc, _buildJson) {
    doc = setBodyStyle(doc);
    var columns = [
        { title: "Variable Name", dataKey: "key" },
        { title: "Variable Value", dataKey: "value" }
    ];
    var rows = [];

    // Loop thru all the variables and fill the rows of this table
    for (variableIndex = 0; variableIndex < _buildJson.variables.length; variableIndex++) {
        var _variableArray = {};
        _variableArray["key"] = _buildJson.variables[variableIndex].key;
        _variableArray["value"] = _buildJson.variables[variableIndex].value;
        rows.push(_variableArray);
    }

    // Insert all the rows and columns into the table
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.autoTable(columns, rows,
        {
            theme: 'striped',
            headerStyles: { fillColor: [142, 45, 226] },
            margin: { left: pdf.xAxisValue },
            startY: pdf.yAxisValue,
            showHeader: 'everyPage'
        });
    pdf.yAxisValue = doc.autoTable.previous.finalY;
    return doc;
}


function printTriggers(doc, _buildJson) {
    doc = setBodyStyle(doc);

    let triggersExist = _buildJson.triggers != null;
    let getContinousIntegrationIcon = () => {
        return _buildJson.triggers.continousIntegration  ? getContinuousIntegrationEnabledIcon() : getContinuousIntegrationDisabledIcon();
    };
    let getContinousIntegrationStatus = () => {
        return _buildJson.triggers.continousIntegration ? 'enabled' : 'disabled';
    };  
    let getBatchChangesIcon = () => {
        return _buildJson.triggers.batchChanges ? getBatchChangesEnabledIcon() : getBatchChangesDisabledIcon();
    }; 
    let getBatchChangesStatus = () => {
        return _buildJson.triggers.batchChanges ? 'enabled' : 'disabled';
    };   

    // Triggers
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    // CI
    doc.addImage(getContinousIntegrationIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + (pdf.printIconSize + 7), pdf.yAxisValue, `Continuous integration ${getContinousIntegrationStatus()}`);
    // Batch
    doc.addImage(getBatchChangesIcon(), 'JPEG', pdf.xAxisValue + (pdf.printIconSize + 160), pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + (pdf.printIconSize + 180), pdf.yAxisValue, `Batch changes ${getBatchChangesStatus()}`);
    
    return doc;
}


function printRetentionRules(doc, _buildJson) {
    doc = setBodyStyle(doc);
    var columns = [
        { title: "Days to keep", dataKey: "key" },
        { title: "Minimum to keep", dataKey: "value" }
    ];
    var rows = [];

    // Loop thru all the retention and fill the rows of this table
    for (var retentionIndex = 0; retentionIndex < _buildJson.retention.length; retentionIndex++) {
        var _retentionArray = {};
        _retentionArray["key"] = _buildJson.retention[retentionIndex].daysToKeep;
        _retentionArray["value"] = _buildJson.retention[retentionIndex].minimumToKeep;
        rows.push(_retentionArray);
    }

    // Insert all the rows and columns into the table
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.autoTable(columns, rows,
        {
            theme: 'striped',
            headerStyles: { fillColor: [142, 45, 226] },
            margin: { left: pdf.xAxisValue },
            startY: pdf.yAxisValue,
            showHeader: 'everyPage'
        });
    pdf.yAxisValue = doc.autoTable.previous.finalY;
    return doc;
}



