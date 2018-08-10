//////////////////////////////////
/////////    Release process
//////////////////////////////////

function getReleaseJson(releaseJsonInput) {

    var _releaseDef = {
        name: getReleaseDefinitionName(releaseJsonInput),
        description: getReleaseDefinitionDescription(releaseJsonInput),
        url: getReleaseDefinitionUrl(releaseJsonInput),
        creationInformation: getReleaseDefinitionCreationDate(releaseJsonInput),
        modificationInformation: getReleaseDefinitionCreationDate(releaseJsonInput),
        environments: getReleaseDefinitionEnvironments(releaseJsonInput),
        artifacts: getReleaseDefinitionArtifacts(releaseJsonInput),
        triggers: getReleaseDefinitionTriggers(releaseJsonInput),
        variables: getReleaseDefinitionVariables(releaseJsonInput),
        metaInformation: getReleaseMetaInformation(releaseJsonInput)
    };
    return _releaseDef;
}

function getReleaseDefinitionName(releaseJsonInput) {
    return releaseJsonInput.name;
}


function getReleaseDefinitionDescription(releaseJsonInput) {
    return releaseJsonInput.description;
}

function getReleaseDefinitionUrl(releaseJsonInput) {
    return releaseJsonInput.url;
}

function getReleaseDefinitionCreationDate(releaseJsonInput) {
    var _creation = {
        createdOn: releaseJsonInput.createdDate,
        createdBy: releaseJsonData.createdBy.displayName,
        createdByEmail: releaseJsonData.createdBy.uniqueName
    }
    return _creation;
}

function getReleaseDefinitionModificationDate(releaseJsonInput) {
    var _modification = {
        modifiedOn: releaseJsonInput.modifiedOn,
        modifiedBy: releaseJsonData.modifiedBy.displayName,
        modifiedByEmail: releaseJsonData.modifiedBy.uniqueName
    }
    return _creation;
}

function getReleaseMetaInformation(releaseJsonInput) {
    var _meta = {
        version: releaseJsonInput.revision,
        releaseNameFormat: releaseJsonInput.releaseNameFormat
    };
    return _meta;
}

function getReleaseDefinitionTriggers(releaseJsonInput) {
    var _triggers = [];

    // A release definiton can have multiple triggers. Loop thru each trigger and add them to the list.
    for (var triggerIndex = 0; triggerIndex < releaseJsonInput.triggers.length; triggerIndex++) {
        var item = {};
        var currentTriggerItem = releaseJsonInput.triggers[triggerIndex];
        item["artifactAlias"] = currentTriggerItem.artifactAlias;
        item["triggerType"] = currentTriggerItem.triggerType;
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

function getReleaseDefinitionEnvironments(releaseJsonInput) {
    var _environment = [];

    for (var envIndex = 0; envIndex < releaseJsonInput.environments.length; envIndex++) {
        var item = {};
        var currentEnv = releaseJsonInput.environments[envIndex];

        item["id"] = currentEnv.id;
        item["name"] = currentEnv.name;
        item["rank"] = currentEnv.rank;
        item["ownerName"] = currentEnv.owner.displayName;
        item["ownerEmail"] = currentEnv.owner.uniqueName;
        item["ownerEmail"] = currentEnv.owner.uniqueName;
        item["emailNotificationType"] = currentEnv.environmentOptions.emailNotificationType;
        item["emailRecipients"] = currentEnv.environmentOptions.emailRecipients;
        item["conditionName"] = currentEnv.conditions.name;
        item["conditionType"] = currentEnv.conditions.conditionType;
        item["deploymentPhases"] = [];

        // Each environment can have multiple phases. Let's go thru each phase and add what's required to our list.
        for (var phaseIndex = 0; phaseIndex < currentEnv.deployPhases.length; phaseIndex++) {
            var phaseItem = {};
            var currentPhase = currentEnv.deployPhases[phaseIndex];

            phaseItem["phaseType"] = currentPhase.phaseType;
            phaseItem["name"] = currentPhase.name;
            phaseItem["rank"] = currentPhase.rank;
            phaseItem["steps"] = [];

            // Each phase can have multiple steps. Let's go thru each step and add them to the phase.
            for (var stepIndex = 0; stepIndex < currentPhase.workflowTasks.length; stepIndex++) {
                var stepItem = {};
                var currentStep = currentPhase.workflowTasks[stepIndex];

                stepItem["id"] = stepIndex;
                stepItem["taskId"] = currentStep.taskId;
                stepItem["name"] = currentStep.name;
                stepItem["version"] = currentStep.version;
                stepItem["enabled"] = currentStep.enabled;
                stepItem["continueOnError"] = currentStep.continueOnError;

                // Add each step to the list of steps in a particular phase
                phaseItem["steps"].push(stepItem);
            }

            // Add each phase to the list of phases
            item["deploymentPhases"].push(phaseItem);
        }

        _environment.push(item);
    }

    return _environment;
}