//////////////////////////////////
/////////    Build process
//////////////////////////////////

function getBuildJson(buildJsonInput) {
    if (isEmpty(buildJsonInput)) {
        return null;
    }

    try {
        var _buildDef = {
            name: getBuildDefinitionName(buildJsonInput),
            url: getBuildDefinitionUrl(buildJsonInput),
            //buildStatusBadge: getBuildDefinitionBadge(buildJsonInput),
            creationDate: getBuildDefinitionCreationDate(buildJsonInput),
            repository: getBuildDefinitionRepository(buildJsonInput),
            author: getBuildDefinitionAuthor(buildJsonInput),
            project: getBuildDefinitionProject(buildJsonInput),
            triggers: getBuildDefinitionTriggers(buildJsonInput),
            retention: getBuildDefinitionRetention(buildJsonInput),
            queue: getBuildDefinitionQueue(buildJsonInput),
            variables: getBuildDefinitionVariables(buildJsonInput),
            process: getBuildDefinitionProcess(buildJsonInput),
            metaInformation: getBuildMetaInformation(buildJsonInput),
            stats: getStatsForBuildDefinition(buildJsonInput)
        };
        return _buildDef;
    } catch (e) {
        airbrake.notify({
            error: e, context: { component: 'getBuildJson()', version: appVersionNumber }
        });
        return null;
    }
   
}

////////////////////////////////////////////////
/////////    Build process detailed methods
///////////////////////////////////////////////

function getBuildDefinitionName(buildJsonInput) {
    return buildJsonInput.name;
}

function getBuildDefinitionUrl(buildJsonInput) {
    return buildJsonInput.url;
}

function getBuildDefinitionCreationDate(buildJsonInput) {
    var createdOn = new Date(buildJsonInput.createdDate);
    return createdOn.toLocaleString();
}

function getBuildDefinitionRepository(buildJsonInput) {
    var _isTfsGit = (buildJsonInput.repository.type === "TfsGit");
    var _isGitHub = (buildJsonInput.repository.type === "GitHub");
    var _isTfvc = (buildJsonInput.repository.type === "TfsVersionControl");
    var _isBitbucket = (buildJsonInput.repository.type === "Bitbucket");
    var _isOther = (!_isTfsGit && !_isGitHub && !_isTfvc && !_isBitbucket);

    var _repository = {
        name: buildJsonInput.repository.name,
        url: buildJsonInput.repository.url,
        isTfsGit: _isTfsGit,
        isGitHub: _isGitHub,
        isTfvc: _isTfvc,
        isBitbucket: _isBitbucket,
        isOther: _isOther,
        icon: `/images/extend/repository/${buildJsonInput.repository.type}/icon.png`,
        type: buildJsonInput.repository.type
    }
    return _repository;
}

function getBuildDefinitionBadge(buildJsonInput) {
    return buildJsonInput._links.badge.href;
}

function getBuildDefinitionAuthor(buildJsonInput) {
    var _author = {
        displayName: buildJsonInput.authoredBy.displayName,
        email: buildJsonInput.authoredBy.uniqueName
    };
    return _author;
}

function getBuildDefinitionProject(buildJsonInput) {
    let doesDescriptionExists = buildJsonInput.project.description !== undefined || buildJsonInput.project.description !== "";
    var _project = {
        name: buildJsonInput.project.name,
        doesDescriptionExists: doesDescriptionExists,
        description: doesDescriptionExists ? buildJsonInput.project.description : "",
        url: buildJsonInput.project.url
    };
    return _project;
}

function getBuildDefinitionTriggers(buildJsonInput) {
    var triggersExist = buildJsonInput.triggers != null;
    var _triggers = {
        batchChanges: triggersExist ? buildJsonInput.triggers[0].batchChanges : false,
        triggerType: triggersExist ? buildJsonInput.triggers[0].triggerType : 1,
        continousIntegration: triggersExist
    };
    return _triggers;
}

function getBuildDefinitionRetention(buildJsonInput) {
    var _retention = [];
    for (i = 0; i < buildJsonInput.retentionRules.length; i++) {
        var _item = {};
        _item["daysToKeep"] = buildJsonInput.retentionRules[i].daysToKeep;
        _item["minimumToKeep"] = buildJsonInput.retentionRules[i].minimumToKeep;
        _retention.push(_item);
    }
    return _retention;
}

function getBuildDefinitionQueue(buildJsonInput) {
    var _queue = {
        displayName: buildJsonInput.queue.name,
        name: buildJsonInput.queue.pool.name,
        isHosted: buildJsonInput.queue.pool.isHosted,
        id: buildJsonInput.queue.pool.id,
        icon: `/images/extend/queue/${buildJsonInput.queue.pool.id}/icon.png`
    };
    return _queue;
}

function getBuildDefinitionVariables(buildJsonInput) {
    var _variables = buildJsonInput.variables;
    var _variablesLength = Object.keys(_variables).length;
    var _variablesJson = [];

    // for all the variables, we're modifying the structure of our final JSON
    // to be something like {"key":"key name", "value": "key value"} 
    // instead of {"key name":{"value":"key value"} }
    for (i = 0; i < _variablesLength; i++) {
        var _key = Object.keys(_variables)[i];
        var _item = {};
        _item["id"] = i;
        _item["key"] = _key;
        _item["value"] = _variables[_key].isSecret ? "******": _variables[_key].value;
        _variablesJson.push(_item);
    }

    return _variablesJson;
}

function getBuildDefinitionProcess(buildJsonInput) {
    var _phases = buildJsonInput.process.phases;
    var _processJson = [];

    // Construct each phase 
    for (i = 0; i < _phases.length; i++) {
        var _phasesArray = {};
        var currentPhase = _phases[i];

        // Construct the meta data of each phase
        _phasesArray["name"] = currentPhase.name;
        _phasesArray["executionType"] = currentPhase.target.executionOptions.type;
        _phasesArray["isExecutionTypeParallelismNone"] = currentPhase.target.executionOptions.type===0;
        _phasesArray["isExecutionTypeParallelismMultiConfig"] = currentPhase.target.executionOptions.type === 1;
        _phasesArray["isExecutionTypeParallelismMultiAgent"] = currentPhase.target.executionOptions.type === 2;
        _phasesArray["phaseType"] = currentPhase.target.type;
        _phasesArray["isPhaseAgentful"] = currentPhase.target.type===1;
        _phasesArray["isPhaseAgentless"] = currentPhase.target.type === 2;
        _phasesArray["colorHexCode"] = random_rgba();
        _phasesArray["steps"] = [];

        // Construct each step within that phase        
        for (j = 0; j < currentPhase.steps.length; j++) {
            var _stepsArray = {};
            var currentStep = currentPhase.steps[j];
            var _taskIcon = "";
            
            _stepsArray["name"] = currentStep.displayName;
            _stepsArray["enabled"] = currentStep.enabled;
            _stepsArray["continueOnError"] = currentStep.continueOnError;
            _stepsArray["id"] = currentStep.task.id;
            _stepsArray["uniqueId"] = currentStep.task.id+"-"+j;
            _stepsArray["version"] = currentStep.task.versionSpec;
            _stepsArray["icon"] = `/images/extend/tasks/${currentStep.task.id}/icon.png`;

            _phasesArray["steps"].push(_stepsArray);
        }
        
        // Finally, push each phase into the process JSON
        _processJson.push(_phasesArray);
    }
    
    return _processJson;
}

function getBuildMetaInformation(buildJsonInput) {
    var _meta = {
        version: buildJsonInput.revision,
        buildNumberFormat: buildJsonInput.buildNumberFormat
    };
    return _meta;
}

function errorLoadingImage(e) {
    e.src = "https://clydedz.github.io/cicd-docs/images/logo/cicd-docs-logo-32px.png";
    console.clear();  
}

function errorLoadingQueueIcon(e) {
    e.src = "https://clydedz.github.io/cicd-docs/images/extend/queue/0/icon.png";
    console.clear();
}

function errorLoadingRepositoryIcon(e) {
    e.src = "https://clydedz.github.io/cicd-docs/images/extend/repository/Other/icon.png";
    console.clear();
}


function getStatsForBuildDefinition(buildJsonInput) {
    let countOfVariables = getBuildDefinitionVariables(buildJsonData).length;
    let countOfPhases = buildJsonInput.process.phases.length;

    let getCountOfTasks = () => {
        let _countTasks = 0;
        for (let pIndex = 0; pIndex < buildJsonInput.process.phases.length; pIndex++) {
            _countTasks += buildJsonInput.process.phases[pIndex].steps.length;            
        }
        return _countTasks;
    }

    return statistics = {
        tasks: getCountOfTasks(),
        variables: countOfVariables,
        phases: countOfPhases
    };
}