//////////////////////////////////
/////////    Release process
//////////////////////////////////

function getReleaseJson(releaseJsonInput) {
    if (isEmpty(releaseJsonInput)) {
        return null;
    }
    try {
        var _releaseDef = {
            name: getReleaseDefinitionName(releaseJsonInput),
            doesReleaseDefinitionDescriptionExist: doesReleaseDefinitionDescriptionExist(releaseJsonData),
            description: getReleaseDefinitionDescription(releaseJsonInput),
            url: getReleaseDefinitionUrl(releaseJsonInput),
            creationInformation: getReleaseDefinitionCreationDate(releaseJsonInput),
            modificationInformation: getReleaseDefinitionModificationDate(releaseJsonInput),
            releaseDefinitonHasMultipleEnvironments: releaseDefinitonHasMultipleEnvironments(releaseJsonInput),
            environments: getReleaseDefinitionEnvironments(releaseJsonInput),
            doeReleaseDefinitionHaveArtifacts: doeReleaseDefinitionHaveArtifacts(releaseJsonData),
            artifacts: getReleaseDefinitionArtifacts(releaseJsonInput),
            isTriggerSetupForReleaseDefinition: isTriggerSetupForReleaseDefinition(releaseJsonInput),
            triggers: getReleaseDefinitionTriggers(releaseJsonInput),
            doVariablesExists: doVariablesExists(releaseJsonInput),
            variables: getReleaseDefinitionVariables(releaseJsonInput),
            metaInformation: getReleaseMetaInformation(releaseJsonInput),
            stats: getStatsForReleaseDefinition(releaseJsonInput)
        };
        return _releaseDef;
    } catch (e) {
        console.log(e);
        return null;
    }
   
}

function getReleaseDefinitionName(releaseJsonInput) {
    return releaseJsonInput.name;
}

function doesReleaseDefinitionDescriptionExist(releaseJsonInput) {
    return releaseJsonInput.description !== null;
}

function getReleaseDefinitionDescription(releaseJsonInput) {
    return releaseJsonInput.description;
}

function getReleaseDefinitionUrl(releaseJsonInput) {
    return releaseJsonInput.url;
}

function getReleaseDefinitionCreationDate(releaseJsonInput) {
    let createdOn = new Date(releaseJsonInput.createdOn);

    let _creation = {
        createdOn: createdOn.toLocaleString(),
        createdBy: releaseJsonData.createdBy.displayName,
        createdByEmail: releaseJsonData.createdBy.uniqueName
    };
    return _creation;
}

function getReleaseDefinitionModificationDate(releaseJsonInput) {
    let modifiedOn = new Date(releaseJsonInput.modifiedOn);

    var _modification = {
        modifiedOn: modifiedOn.toLocaleString(),
        modifiedBy: releaseJsonData.modifiedBy.displayName,
        modifiedByEmail: releaseJsonData.modifiedBy.uniqueName
    };
    return _modification;
}

function getReleaseMetaInformation(releaseJsonInput) {
    var _meta = {
        version: releaseJsonInput.revision,
        releaseNameFormat: releaseJsonInput.releaseNameFormat
    };
    return _meta;
}

function isTriggerSetupForReleaseDefinition(releaseJsonInput) {
    return releaseJsonInput.triggers.length !== 0;
}

function getReleaseDefinitionTriggers(releaseJsonInput) {
    var _triggers = [];

    // A release definiton can have multiple triggers. Loop thru each trigger and add them to the list.
    for (var triggerIndex = 0; triggerIndex < releaseJsonInput.triggers.length; triggerIndex++) {
        var item = {};
        var currentTriggerItem = releaseJsonInput.triggers[triggerIndex];
        item["artifactAlias"] = currentTriggerItem.artifactAlias;
        item["triggerType"] = currentTriggerItem.triggerType;
        item["isTriggerTypeContinuousDeployment"] = currentTriggerItem.triggerType === 1;
        item["isTriggerTypePullRequest"] = currentTriggerItem.triggerType === 6;
        item["triggerConditions"] = [];

        // Each trigger item has trigger conditions. Loop thru each condition and add them as well.
        for (var triggerConditionIndex = 0; triggerConditionIndex < currentTriggerItem.triggerConditions.length; triggerConditionIndex++) {
            var condition = {};
            var currentConditionItem = currentTriggerItem.triggerConditions[triggerConditionIndex];
            condition["sourceBranch"] = currentConditionItem.sourceBranch;
            condition["useBuildDefinitionBranch"] = currentConditionItem.useBuildDefinitionBranch;
            item["triggerConditions"].push(condition);
        }

        _triggers.push(item);
    }
   
    return _triggers;
}


function doeReleaseDefinitionHaveArtifacts(releaseJsonInput) {
    return releaseJsonInput.artifacts.length !== 0;
}

function getReleaseDefinitionArtifacts(releaseJsonInput) {
    var _artifacts = [];

    // A release definiton can have multiple triggers. Loop thru each trigger and add them to the list.
    for (var artifactsIndex = 0; artifactsIndex < releaseJsonInput.artifacts.length; artifactsIndex++) {
        var item = {};
        var currentTriggerItem = releaseJsonInput.artifacts[artifactsIndex];

        if (currentTriggerItem.type.toString().toLowerCase() !== "build") {
            continue;
        }

        item["type"] = currentTriggerItem.type;
        item["artifactAlias"] = currentTriggerItem.alias;
        item["source"] = currentTriggerItem.definitionReference.definition.name;
        item["project"] = currentTriggerItem.definitionReference.project.name;
        item["defaultVersion"] = currentTriggerItem.definitionReference.defaultVersionType.name;
        item["isPrimary"] = currentTriggerItem.isPrimary;
        item["isRetained"] = currentTriggerItem.isRetained;        

        _artifacts.push(item);
    }

    return _artifacts;
}

function doVariablesExists(releaseJsonInput) {
    let relPipelineContainsVariables = Object.keys(releaseJsonInput.variables).length > 0;
    let eachEnvironmentContainsVariables = false;

    for (var envIndex = 0; envIndex < releaseJsonInput.environments.length; envIndex++) {
        let variables = releaseJsonInput.environments[envIndex].variables;
        eachEnvironmentContainsVariables = Object.keys(variables).length > 0;
        if (eachEnvironmentContainsVariables) {
            break;
        }
    }

    return relPipelineContainsVariables || eachEnvironmentContainsVariables;
}

function getReleaseDefinitionVariables(releaseJsonInput) {
    var _variables = releaseJsonInput.variables;
    var _variablesLength = Object.keys(_variables).length;
    var _variablesJson = [];

    // For all release-wide scoped variables
    // For all the variables, we're modifying the structure of our final JSON
    // to be something like {"key":"key name", "value": "key value"} 
    // instead of {"key name":{"value":"key value"} }
    for (i = 0; i < _variablesLength; i++) {
        var _key = Object.keys(_variables)[i];
        var _item = {};
        _item["id"] = i;
        _item["key"] = _key;
        _item["scope"] = "Release";
        _item["isSecret"] = _variables[_key].isSecret;
        if (_variables[_key].isSecret) {
            _item["value"] = "******";
        }
        else {
            _item["value"] = _variables[_key].value;           
        }
 
        _variablesJson.push(_item);
    }

    // For variables scoped to their environment
    var scopedVariables = _getEnvironmentSpecificVariablesForReleaseDefinition(releaseJsonInput.environments);
    for (var scopedIndex = 0; scopedIndex < scopedVariables.length; scopedIndex++) {
        _variablesJson.push(scopedVariables[scopedIndex]);
    }

    return _variablesJson;
}

function _getEnvironmentSpecificVariablesForReleaseDefinition(environmentVariables){
    var envVariables = [];

    for (var envIndex = 0; envIndex < environmentVariables.length; envIndex++) {
        var _variables = environmentVariables[envIndex].variables;
        var _variablesLength = Object.keys(_variables).length;

        for (var i = 0; i < _variablesLength; i++) {
            var _key = Object.keys(_variables)[i];
            var _item = {};
            _item["id"] = i;
            _item["key"] = _key;
            _item["scope"] = environmentVariables[envIndex].name;
            _item["isSecret"] = _variables[_key].isSecret;
            if (_variables[_key].isSecret) {
                _item["value"] = "******";
            }
            else {
                _item["value"] = _variables[_key].value;
            }

            envVariables.push(_item);
        }

    }

    return envVariables;
}


function releaseDefinitonHasMultipleEnvironments(releaseJsonInput) {
    return releaseJsonInput.environments.length > 1;
}

function processEmailRecipients(encodedRecipientList, currentEnvironment, releaseDefinition) {
    let recipientList = "";
    let encodedRecipients = encodedRecipientList.split(';');
    for (let listIndex = 0; listIndex < encodedRecipients.length; listIndex++) {
        let currentRecipient = encodedRecipients[listIndex];
        let isLastItemInTheList = (listIndex + 1 === encodedRecipients.length);
        let suffixChar = isLastItemInTheList ? "" : ", ";
        let alredyExistsInList = (recipient) => {
            return recipientList.includes(recipient);
        };

        if (currentRecipient === "release.environment.owner") {
            recipientList += alredyExistsInList(currentEnvironment.owner.displayName) ? "" : currentEnvironment.owner.displayName + suffixChar;
        }

        else if (currentRecipient === "release.creator") {
            recipientList += alredyExistsInList(releaseDefinition.createdBy.displayName) ? "" : releaseDefinition.createdBy.displayName + suffixChar;
        }

        else {
            recipientList += currentRecipient + suffixChar;
        }
    }

    // Final cleanup
    recipientList = recipientList.trim();
    recipientList = recipientList.charAt(recipientList.length - 1) === ',' ? recipientList.substr(0, recipientList.length - 1) : recipientList;

    return recipientList;

}

function getReleaseDefinitionEnvironments(releaseJsonInput) {
    var _environment = [];

    for (var envIndex = 0; envIndex < releaseJsonInput.environments.length; envIndex++) {
        let item = {};
        let currentEnv = releaseJsonInput.environments[envIndex];
        let isOwnerHuman = currentEnv.owner.isContainer === undefined;

        item["id"] = currentEnv.id;
        item["name"] = currentEnv.name;
        item["colorHexCode"] = random_rgba();
        item["rank"] = currentEnv.rank;
        item["ownerName"] = currentEnv.owner.displayName;
        item["isOwnerHuman"] = isOwnerHuman;
        item["ownerEmail"] = currentEnv.owner.uniqueName;
        item["emailNotificationType"] = currentEnv.environmentOptions.emailNotificationType;
        item["emailRecipients"] = processEmailRecipients(currentEnv.environmentOptions.emailRecipients, currentEnv, releaseJsonData);      

        // conditions
        item["conditions"] = getConditonsForReleaseDefinition(currentEnv);

        // Pre deployment approvals, if any
        item["preDeployApprovals"] = getPreDeploymentApprovalsForReleaseDefinition(currentEnv);

        // Post deployment approvals, if any
        item["postDeployApprovals"] = getPostDeploymentApprovalsForReleaseDefinition(currentEnv);        

        // Deployment phases
        // TODO: check if each phases' queue id is the same for all accounts
        item["deploymentPhases"] = getDeploymentPhaseDetailsForReleaseDefinition(currentEnv);      

        _environment.push(item);
    }

    return _environment;
}

function getDeploymentPhaseDetailsForReleaseDefinition(currentEnvironment) {
    let phases = [];

    // Each environment can have multiple phases. Let's go thru each phase and add what's required to our list.
    for (let phaseIndex = 0; phaseIndex < currentEnvironment.deployPhases.length; phaseIndex++) {
        var phaseItem = {};
        var currentPhase = currentEnvironment.deployPhases[phaseIndex];

        phaseItem["phaseType"] = currentPhase.phaseType;
        phaseItem["isPhaseAgentful"] = currentPhase.phaseType === 1;
        phaseItem["isPhaseAgentless"] = currentPhase.phaseType === 2;
        phaseItem["isDeploymentGroup"] = currentPhase.phaseType === 4;
        phaseItem["name"] = currentPhase.name;
        phaseItem["rank"] = currentPhase.rank;
        phaseItem["steps"] = getStepsForEachPhaseInReleaseDefinition(currentPhase);

        // Add each phase to the list of phases
        phases.push(phaseItem);
    }

    return phases;
}

function getStepsForEachPhaseInReleaseDefinition(currentPhase) {
    let steps = [];

    // Each phase can have multiple steps. Let's go thru each step and add them to the phase.
    for (let stepIndex = 0; stepIndex < currentPhase.workflowTasks.length; stepIndex++) {
        var stepItem = {};
        var currentStep = currentPhase.workflowTasks[stepIndex];

        stepItem["id"] = currentStep.taskId;
        stepItem["uniqueId"] = currentStep.taskId + "-" + stepIndex;
        stepItem["taskId"] = currentStep.taskId;
        stepItem["name"] = currentStep.name;
        stepItem["version"] = currentStep.version;
        stepItem["enabled"] = currentStep.enabled;
        stepItem["continueOnError"] = currentStep.continueOnError;
        stepItem["icon"] = `/images/extend/tasks/${currentStep.taskId}/icon.png`;

        // Add each step to the list of steps in a particular phase
        steps.push(stepItem);
    }
    
    return steps;
}

function getPostDeploymentApprovalsForReleaseDefinition(currentEnvironment) {
    let postDeploymentApprovals = [];

    for (let postDepApprovalIndex = 0; postDepApprovalIndex < currentEnvironment.postDeployApprovals.approvals.length; postDepApprovalIndex++) {
        let postDepItem = {};
        let currentPostDepItem = currentEnvironment.postDeployApprovals.approvals[postDepApprovalIndex];

        postDepItem["rank"] = currentPostDepItem.rank;
        postDepItem["id"] = currentPostDepItem.id;
        postDepItem["isNotificationOn"] = currentPostDepItem.isNotificationOn;
        postDepItem["isAutomated"] = currentPostDepItem.isAutomated;

        if (currentPostDepItem.isAutomated) {
            postDepItem["approver"] = null;
            postDeploymentApprovals.push(postDepItem);
            continue;
        }

        postDepItem["approver"] = {
            "displayName": currentPostDepItem.approver.displayName,
            "isApproverHuman": currentPostDepItem.approver.isContainer === undefined,
            "uniqueName": currentPostDepItem.approver.uniqueName
        };

        postDeploymentApprovals.push(postDepItem);
    }

    return postDeploymentApprovals;
}

function getPreDeploymentApprovalsForReleaseDefinition(currentEnvironment) {
    let preDeploymentApprovals = [];

    for (let preDepApprovalIndex = 0; preDepApprovalIndex < currentEnvironment.preDeployApprovals.approvals.length; preDepApprovalIndex++) {
        let preDepItem = {};
        let currentPreDepItem = currentEnvironment.preDeployApprovals.approvals[preDepApprovalIndex];

        preDepItem["rank"] = currentPreDepItem.rank;
        preDepItem["id"] = currentPreDepItem.id;
        preDepItem["isNotificationOn"] = currentPreDepItem.isNotificationOn;
        preDepItem["isAutomated"] = currentPreDepItem.isAutomated;

        if (currentPreDepItem.isAutomated) {
            preDepItem["approver"] = null;
            preDeploymentApprovals.push(preDepItem);
            continue;
        }

        preDepItem["approver"] = {
            "displayName": currentPreDepItem.approver.displayName,
            "isApproverHuman": currentPreDepItem.approver.isContainer === undefined,
            "uniqueName": currentPreDepItem.approver.uniqueName
        };

        preDeploymentApprovals.push(preDepItem);
    }

    return preDeploymentApprovals;
}

function getConditonsForReleaseDefinition(currentEnvironment) {   
    let isConditionSetToManual = () => {
        return currentEnvironment.conditions.length === 0
    };   
    let isConditionsSetToAfterEnvironment = () => {
        if (currentEnvironment.conditions[0] === undefined) {
            return false;
        }
        return currentEnvironment.conditions[0].conditionType === 6;
    };
    let getConditionDisplayName = () => {
        if (currentEnvironment.conditions[0] === undefined) {
            return "Manual Only";
        }
        return currentEnvironment.conditions[0].conditionType === 6 ? "After Environment" : "After Release";
    };
    let getEnvironmentNamesFromCondition = () => {
        let envs = [];

        if (!isConditionsSetToAfterEnvironment()) {
            return envs;
        }

        for (let conditionIndex = 0; conditionIndex < currentEnvironment.conditions.length; conditionIndex++) {
            envs.push(currentEnvironment.conditions[conditionIndex].name);
        }

        return envs;
    };

    let conditions = {
        displayName: getConditionDisplayName(),
        isConditionTypeIsAfterRelease: !isConditionsSetToAfterEnvironment(), // defaults to false, which is after release
        isConditionTypeIsAfterEnvironment: isConditionsSetToAfterEnvironment(),
        isConditionTypeManual: isConditionSetToManual(),
        environments: getEnvironmentNamesFromCondition()
    };

    return conditions;

}


function getStatsForReleaseDefinition(releaseJson) {
    let listOfVariables = getReleaseDefinitionVariables(releaseJson);
    let countOfVariables = listOfVariables.length;
    let countOfEnvironments = releaseJson.environments.length;
    let listOfEnvironments = getReleaseDefinitionEnvironments(releaseJson);

    let getCountOfPhasesTasks = () => {
        let _countPhases = 0;
        let _countTasks = 0;
        for (let eIndex = 0; eIndex < listOfEnvironments.length; eIndex++) {
            _countPhases += listOfEnvironments[eIndex].deploymentPhases.length;

            for (let pIndex = 0; pIndex < listOfEnvironments[eIndex].deploymentPhases.length; pIndex++) {
                _countTasks += listOfEnvironments[eIndex].deploymentPhases[pIndex].steps.length;
            }
        }
        return count = {
            phases: _countPhases,
            tasks: _countTasks
        };
    }

    let countOfPhasesTasks = getCountOfPhasesTasks();

    return statistics = {
        environments: countOfEnvironments,
        tasks: countOfPhasesTasks.tasks,
        variables: countOfVariables,
        phases: countOfPhasesTasks.phases
    };
}