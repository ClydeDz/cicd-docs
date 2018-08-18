////////////////////////////////////////
//////   Release headlines
////////////////////////////////////////

function printReleasePipelineHeading(doc) {
    doc = setH2HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.HEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'RELEASE PIPELINE');
    doc = drawLine(doc, lineObjectLength.FULL);
    return doc;
}

function printReleaseNameHeading(doc, _releaseJson) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Build name: ${_releaseJson.name}`);
    return doc;
}

function printTriggersHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Triggers');
    return doc;
}

function printArtifactsHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Artifacts');
    return doc;
}


function printEnvironmentHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Environments');
    return doc;
}


////////////////////////////////////////
////    Release pipeline contents
///////////////////////////////////////


//function printReleaseRepositoryAndProject(doc, _releaseJson) {
//    doc = setBodyStyle(doc);

//    var repositoryIcon = getBase64Image(document.getElementById("repositoryIcon"), pdf.iconSize, pdf.iconSize);
//    var platformVstsIcon = getBase64Image(document.getElementById("platformVstsIcon"), pdf.iconSize, pdf.iconSize);

//    // Repo
//    doc = addNewBodyLine(doc, lineHeightType.BODY);
//    doc.addImage(repositoryIcon, 'JPEG', pdf.xAxisValue, pdf.yAxisValue, pdf.printIconSize, pdf.printIconSize);
//    doc.textWithLink(_buildJson.repository.name, pdf.xAxisValue + 20, pdf.yAxisValue + 10, { url: _buildJson.repository.url });
//    // Project
//    doc = addNewBodyLine(doc, lineHeightType.BODY);
//    doc.addImage(platformVstsIcon, 'JPEG', pdf.xAxisValue, pdf.yAxisValue + 5, pdf.printIconSize, pdf.printIconSize);
//    doc.textWithLink(_buildJson.project.name, pdf.xAxisValue + 20, pdf.yAxisValue + 15, { url: _buildJson.project.url });

//    return doc;
//}



function printReleaseTriggers(doc, _releaseJson) {
    doc = setBodyStyle(doc);

    if (!_releaseJson.isTriggerSetupForReleaseDefinition) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, "No continuous deployments setup for this release pipeline");
        return doc;
    }


    for (let triggerIndex = 0; triggerIndex < _releaseJson.triggers.length; triggerIndex++) {
        let currentTrigger = _releaseJson.triggers[triggerIndex];
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getContinuousIntegrationEnabledIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + (pdf.printIconSize + 7), pdf.yAxisValue, `${currentTrigger.artifactAlias} of type ${currentTrigger.triggerType}`);

        for (let conditionIndex = 0; conditionIndex < currentTrigger.triggerConditions.length; conditionIndex++) {
            let currentCondition = currentTrigger.triggerConditions[conditionIndex];
            doc = addNewBodyLine(doc, lineHeightType.BODY);
            doc.text(pdf.xAxisValue * 2, pdf.yAxisValue, `Source branch ${currentCondition.sourceBranch} | Use build definition ${currentCondition.useBuildDefinitionBranch}`);
        }
    }

    return doc;
}



function printReleaseAuthorDetails(doc, _releaseJson) {
    doc = setBodyStyle(doc);
    var createdOn = new Date(_releaseJson.creationInformation.createdOn);
    var modifiedOn = new Date(_releaseJson.modificationInformation.modifiedOn);

    // Author
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Created by ${_releaseJson.creationInformation.createdBy} (${_releaseJson.creationInformation.createdByEmail}) on ${createdOn.toLocaleString()}.`);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Last modified by ${_releaseJson.modificationInformation.modifiedBy} (${_releaseJson.modificationInformation.modifiedByEmail}) on ${modifiedOn.toLocaleString()}.`);
    return doc;
}


function printReleaseMetaInformation(doc, _releaseJson) {
    doc = setBodyStyle(doc);

    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Release number format: ${_releaseJson.metaInformation.releaseNameFormat}`);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Version: ${_releaseJson.metaInformation.version}`);

    return doc;
}



function printReleaseVariables(doc, _releaseJson) {
    doc = setBodyStyle(doc);

    if (!_releaseJson.doVariablesExists) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No variables found for this release pipeline.`);
        return doc;
    }

    var columns = [
        { title: "Name", dataKey: "key" },
        { title: "Value", dataKey: "value" },
        { title: "Scope", dataKey: "scope" }
    ];
    var rows = [];

    // Loop thru all the variables and fill the rows of this table
    for (variableIndex = 0; variableIndex < _releaseJson.variables.length; variableIndex++) {
        var _variableArray = {};
        _variableArray["key"] = _releaseJson.variables[variableIndex].key;
        _variableArray["value"] = _releaseJson.variables[variableIndex].value;
        _variableArray["scope"] = _releaseJson.variables[variableIndex].scope;
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

function printReleaseArtifacts(doc, _releaseJson) {
    doc = setBodyStyle(doc);

    //TODO: if no artifacts, display a message

    for (let artifactsIndex = 0; artifactsIndex < _releaseJson.artifacts.length; artifactsIndex++) {
        let currentArtifact = _releaseJson.artifacts[artifactsIndex];
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `Artifact type: Build`);
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `Artifact alias: ${currentArtifact.artifactAlias} | Version: ${currentArtifact.defaultVersion} `);
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `Project: ${currentArtifact.project} | Source: ${currentArtifact.source} `);
    }

    return doc;
}


function printReleaseDefinitionEnvironments(doc, _releaseJson) {
    doc = setBodyStyle(doc);

    for (let environmentIndex = 0; environmentIndex < _releaseJson.environments.length; environmentIndex++) {
        let currentEnv = _releaseJson.environments[environmentIndex];

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `**${currentEnv.name}**`);

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `Owner: ${currentEnv.ownerName}`);

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `Notification recipients: ${currentEnv.emailRecipients}`);

        doc = printReleaseDefinitonTasksAndPhases(doc, currentEnv);
    }

    return doc;
}

function printReleaseDefinitonTasksAndPhases(doc, environment) {
    doc = setBodyStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.BODY);

    for (let deploymentPhasesIndex = 0; deploymentPhasesIndex < environment.deploymentPhases.length; deploymentPhasesIndex++) {
        let currentPhase = environment.deploymentPhases[deploymentPhasesIndex];

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `Phase: ${currentPhase.name}`);

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `Phase type: ${currentPhase.phaseType}`);

        doc = printTasksForEachPhaseInReleaseDefinition(doc, currentPhase);
    }

    return doc;
}

function printTasksForEachPhaseInReleaseDefinition(doc, phase) {
    doc = setBodyStyle(doc);

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
    for (stepsIndex = 0; stepsIndex < phase.steps.length; stepsIndex++) {
        var currentStep = phase.steps[stepsIndex];
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
                    var _stepIcon = getBase64Image(document.getElementById(`stepIcon-${phase.steps[taskIconIndex].id}`), 32, 32);
                    images.push({
                        url: _stepIcon,
                        x: cell.textPos.x,
                        y: cell.textPos.y,
                        id: phase.steps[taskIconIndex].id
                    });
                    taskIconIndex++;
                }

                // Column 4 or index 3 (starts from 0) is 'enabled'
                if (opts.column.index === 3) {
                    var _enabledIcon = getEnabledDisabledIcon(phase.steps[enabledIconIndex].enabled);
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

    return doc;
}