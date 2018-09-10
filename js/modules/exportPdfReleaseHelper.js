////////////////////////////////////////
////    Release pipeline contents
///////////////////////////////////////


function printReleaseDescription(doc, _releaseJson) {
    if (!_releaseJson.doesReleaseDefinitionDescriptionExist) {
        return doc;
    }

    doc = setBodyStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `${_releaseJson.description}`);
    return doc;
}

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
        let triggerTypeIcon = () => {
            if (currentTrigger.isTriggerTypeContinuousDeployment) {
                return getContinuousIntegrationEnabledIcon();
            }
            if (currentTrigger.isTriggerTypePullRequest) {
                return getPullRequestIcon();
            }
        };
        let triggerTypeDisplayName = () => {
            if (currentTrigger.isTriggerTypeContinuousDeployment) {
                return "Continuous deployment";
            }
            if (currentTrigger.isTriggerTypePullRequest) {
                return "Pull request";
            }
        };
        //doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(triggerTypeIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + (pdf.printIconSize + 5), pdf.yAxisValue, `Trigger type: ${triggerTypeDisplayName()}`);
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getArtifactIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + (pdf.printIconSize + 5), pdf.yAxisValue, `Artifact name: ${currentTrigger.artifactAlias}`);

        for (let conditionIndex = 0; conditionIndex < currentTrigger.triggerConditions.length; conditionIndex++) {
            let currentCondition = currentTrigger.triggerConditions[conditionIndex];
            doc = addNewBodyLine(doc, lineHeightType.BODY);
            doc.addImage(getCodeIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
            doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Source branch: ${currentCondition.sourceBranch}`);
            doc = addNewBodyLine(doc, lineHeightType.BODY);
            doc.addImage(getSourceIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
            doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Use build definition: ${currentCondition.useBuildDefinitionBranch}`);
        }
    }

    return doc;
}



function printReleaseAuthorDetails(doc, _releaseJson) {
    doc = setBodyStyle(doc);
    var createdOn = new Date(_releaseJson.creationInformation.createdOn);
    var modifiedOn = new Date(_releaseJson.modificationInformation.modifiedOn);

    // Created on
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(getUserIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Created by ${_releaseJson.creationInformation.createdBy} on ${createdOn.toLocaleString()}.`);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(getEmailIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Email: ${_releaseJson.creationInformation.createdByEmail}`);

    // Modified on
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(getUserIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Last modified by ${_releaseJson.modificationInformation.modifiedBy} on ${modifiedOn.toLocaleString()}.`);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(getEmailIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Email: ${_releaseJson.modificationInformation.modifiedByEmail}`);
    return doc;
}


function printReleaseMetaInformation(doc, _releaseJson) {
    doc = setBodyStyle(doc);

    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(getNameFormatIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Release number format: ${_releaseJson.metaInformation.releaseNameFormat}`);

    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(getRevisionVersionNumberIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Version: ${_releaseJson.metaInformation.version}`);

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
    doc = addNewBodyLine(doc, lineHeightType.HALFLINE);
    doc.autoTable(columns, rows,
        {
            theme: 'striped',
            headerStyles: { fillColor: [142, 45, 226] },
            margin: { left: pdf.xAxisValue },
            startY: pdf.yAxisValue,
            showHeader: 'everyPage',
            styles: { overflow: 'linebreak', columnWidth: 'wrap' },
            columnStyles: {
                key: { columnWidth: 150 },
                value: { columnWidth: 290 },
                scope: { columnWidth: 75 }
            }
        });
    pdf.yAxisValue = doc.autoTable.previous.finalY;
    return doc;
}

function printReleaseArtifacts(doc, _releaseJson) {
    doc = setBodyStyle(doc);
    
    if (!_releaseJson.doeReleaseDefinitionHaveArtifacts) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No artifacts found.`);
        return doc;
    }

    for (let artifactsIndex = 0; artifactsIndex < _releaseJson.artifacts.length; artifactsIndex++) {
        let currentArtifact = _releaseJson.artifacts[artifactsIndex];
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getArtifactBuildIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Artifact type: Build`);

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getArtifactIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Artifact alias: ${currentArtifact.artifactAlias}`);

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getProjectIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Project: ${currentArtifact.project}`);

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getVersionIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Version: ${currentArtifact.defaultVersion}`);

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getSourceIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Source: ${currentArtifact.source}`);
    }

    return doc;
}


function printReleaseDefinitionEnvironments(doc, _releaseJson) {
    doc = setBodyStyle(doc);

    if (_releaseJson.environments.length===0) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No release definitions found.`);
        return doc;
    }

    for (let environmentIndex = 0; environmentIndex < _releaseJson.environments.length; environmentIndex++) {
        let currentEnv = _releaseJson.environments[environmentIndex];

        doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);        
        doc = setH4HeadingStyle(doc);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `#${environmentIndex+1} ${currentEnv.name.toString().toUpperCase()}`);
        doc = drawLine(doc, lineObjectLength.QUATER);


        doc = setBodyStyle(doc);
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc = addNewBodyLine(doc, lineHeightType.HALFLINE);
        let getOwnerIcon = () => {
            if (currentEnv.isOwnerHuman) {
                return getUserIcon();
            }
            return getUserGroupIcon();
        };
        doc.addImage(getOwnerIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Owner: ${currentEnv.ownerName}`);

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getNotificationIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Notification recipients: ${currentEnv.emailRecipients}`);

        doc = printReleaseDefinitionEnvironmentConditions(doc, currentEnv);
        doc = printPreDeploymentApprovalsForReleaseDefinition(doc, currentEnv);
        doc = printReleaseDefinitonTasksAndPhases(doc, currentEnv);        
        doc = printPostDeploymentApprovalsForReleaseDefinition(doc, currentEnv);
    }

    return doc;
}

function printReleaseDefinitonTasksAndPhases(doc, environment) {
    doc = setH5HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Phases`);

    if (environment.deploymentPhases.length === 0) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No deployment phases found.`);
        return doc;
    }

    doc = setBodyStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.BODY);

    for (let deploymentPhasesIndex = 0; deploymentPhasesIndex < environment.deploymentPhases.length; deploymentPhasesIndex++) {
        let currentPhase = environment.deploymentPhases[deploymentPhasesIndex];

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
        doc = setH5HeadingStyle(doc);
        doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
        doc.text(triangle.x3 + 7, triangle.y3 + (triangle.y2 - triangle.y3), `Phase ${deploymentPhasesIndex+1}: ${currentPhase.name}`);
        pdf.yAxisValue = triangle.y2;

        doc = setBodyStyle(doc);
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc = addNewBodyLine(doc, lineHeightType.HALFLINE);
        let getPhaseIcon = () => {
            if (currentPhase.isPhaseAgentful) {
                return getServerOffIcon();
            }
            if (currentPhase.isPhaseAgentless) {
                return getServerIcon();
            }
            if (currentPhase.isDeploymentGroup) {
                return getDeploymentGroupIcon();
            }
        };
        let getPhaseDisplayName = () => {
            if (currentPhase.isPhaseAgentful) {
                return "Runs on agent";
            }
            if (currentPhase.isPhaseAgentless) {
                return "Runs on server";
            }
            if (currentPhase.isDeploymentGroup) {
                return "Deployment group phase";
            }
        };
        doc.addImage(getPhaseIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `${getPhaseDisplayName()}`);

        doc = printTasksForEachPhaseInReleaseDefinition(doc, currentPhase);
    }

    return doc;
}

function printTasksForEachPhaseInReleaseDefinition(doc, phase) {
    doc = setBodyStyle(doc);

    if (phase.steps.length === 0) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No steps found.`);
        return doc;
    }

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
    for (let stepsIndex = 0; stepsIndex < phase.steps.length; stepsIndex++) {
        let currentStep = phase.steps[stepsIndex];
        let _stepsArray = {};
        _stepsArray["name"] = currentStep.name;
        _stepsArray["version"] = currentStep.version;
        rows.push(_stepsArray);
    }

    // Insert all steps into the table and display
    let images = []; let printImages = []; let enabledStatusIconImages = [];
    let taskIconIndex = 0; let enabledIconIndex = 0;
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.autoTable(columns, rows,
        {
            theme: 'striped',
            styles: { overflow: 'linebreak', columnWidth: 'wrap' },
            columnStyles: {
                icon: { columnWidth: 75 },
                name: { columnWidth: 290 },
                version: { columnWidth: 75 },
                enabled: { columnWidth: 75 }
            },
            headerStyles: { fillColor: [142, 45, 226] },
            margin: { left: pdf.xAxisValue },
            startY: pdf.yAxisValue,
            showHeader: 'everyPage',
            drawCell: function (cell, opts) {
                // Column 1 or index 0 (starts from 0) is 'task icon'
                if (opts.column.index === 0) {
                    if (phase.steps[taskIconIndex] != undefined) {
                        var _stepIcon = getBase64Image(document.getElementById(`stepIcon-${phase.steps[taskIconIndex].id}`), 32, 32);
                        images.push({
                            url: _stepIcon,
                            x: cell.textPos.x,
                            y: cell.textPos.y,
                            id: phase.steps[taskIconIndex].id,
                            uniqueId: phase.steps[taskIconIndex].uniqueId
                        });
                        taskIconIndex++;
                    }
                    
                }

                // Column 4 or index 3 (starts from 0) is 'enabled'
                if (opts.column.index === 3) {
                    if (phase.steps[enabledIconIndex] != undefined) {
                        var _enabledIcon = getEnabledDisabledIcon(phase.steps[enabledIconIndex].enabled);
                        enabledStatusIconImages.push({
                            url: _enabledIcon,
                            x: cell.textPos.x,
                            y: cell.textPos.y
                        });
                        enabledIconIndex++;
                    }
                    
                }
            },
            addPageContent: function () {
                for (var i = 0; i < images.length; i++) {
                    var imageNotAlreadyPrinted = true;
                    // Check if current image is already printed
                    for (var printImagesIndex = 0; printImagesIndex < printImages.length; printImagesIndex++) {
                        if (images[i].uniqueId === printImages[printImagesIndex].uniqueId) {
                            imageNotAlreadyPrinted = false;
                            break;
                        }
                    }
                    if (imageNotAlreadyPrinted) {
                        // If its not printed, push it to the printed images store
                        printImages.push({
                            uniqueId: images[i].uniqueId
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

function printReleaseDefinitionEnvironmentConditions(doc, environment) {
    doc = setH5HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Environment triggers`);

    doc = setBodyStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    let getEnvConditionIcon = () => {
        if (environment.conditions.isConditionTypeIsAfterRelease) {
            return getAfterReleaseIcon();
        }
        if (environment.conditions.isConditionTypeIsAfterEnvironment) {
            return getAfterEnvironmentIcon();
        }
        if (environment.conditions.isConditionTypeManual) {
            return getManualIcon();
        }
    };
    doc.addImage(getEnvConditionIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `${environment.conditions.displayName}`);

    // If after environment, then return back as this is the only information that is printed.
    // If not, then continue as there is more info required to be printed.
    if (!environment.conditions.isConditionTypeIsAfterEnvironment) {
        return doc;
    }

    let environments = "";
    for (let envIndex = 0; envIndex < environment.conditions.environments.length; envIndex++) {
        let selectedEnvironment = environment.conditions.environments[envIndex];
        let isLastOption = envIndex + 1 === environment.conditions.environments.length;
        environments += isLastOption ? selectedEnvironment : selectedEnvironment + ", ";
    }
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Environments selected: ${environments}`);
    return doc;
}

function printPreDeploymentApprovalsForReleaseDefinition(doc, environment) {
    doc = setH5HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Pre deployment approvals`);

    doc = setBodyStyle(doc);

    if (environment.preDeployApprovals.length === 0) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No pre-deployment approvals found.`);
        return doc;
    }

    for (let depIndex = 0; depIndex < environment.preDeployApprovals.length; depIndex++) {
        let currentApproval = environment.preDeployApprovals[depIndex];
        let approvalType = currentApproval.isAutomated ? "Automatic approval" : "Manual approval";
        let getApprovalIcon = () => {
            return currentApproval.isAutomated ? getContinuousIntegrationEnabledIcon() : getManualIcon();
        };

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getApprovalIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `${approvalType}`);

        if (currentApproval.isAutomated) {
            continue;
        }

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `Requires approval by: ${currentApproval.approver.displayName}`);
    }

    return doc;
}

function printPostDeploymentApprovalsForReleaseDefinition(doc, environment) {
    doc = setH5HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Post deployment approvals`);

    doc = setBodyStyle(doc);

    if (environment.postDeployApprovals.length === 0) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No post-deployment approvals found.`);
        return doc;
    }

    for (let depIndex = 0; depIndex < environment.postDeployApprovals.length; depIndex++) {
        let currentApproval = environment.postDeployApprovals[depIndex];
        let approvalType = currentApproval.isAutomated ? "Automatic approval" : "Manual approval";
        let getApprovalIcon = () => {
            return currentApproval.isAutomated ? getContinuousIntegrationEnabledIcon() : getManualIcon();
        };
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getApprovalIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `${approvalType}`);

        if (currentApproval.isAutomated) {
            continue;
        }

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `Requires approval by: ${currentApproval.approver.displayName}`);
    }

    return doc;
}