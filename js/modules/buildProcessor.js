//////////////////////////////////
/////////    Build process
//////////////////////////////////
function getBuildJson(buildJsonInput) {

    var _buildDef = {
        name: getBuildDefinitionName(buildJsonInput),
        url: getBuildDefinitionUrl(buildJsonInput),
        buildStatusBadge: getBuildDefinitionBadge(buildJsonInput),
        repository: getBuildDefinitionRepository(buildJsonInput),
        author: getBuildDefinitionAuthor(buildJsonInput),
        project: getBuildDefinitionAuthor(buildJsonInput),
        triggers: getBuildDefinitionTriggers(buildJsonInput),
        retention: getBuildDefinitionRetention(buildJsonInput),
        queue: getBuildDefinitionQueue(buildJsonInput),
        variables: getBuildDefinitionVariables(buildJsonInput)
    };
    return buildJsonInput;
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
    return buildJsonInput.createdDate;
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
    var _project = {
        name: buildJsonInput.project.name,
        description: buildJsonInput.project.description,
        url: buildJsonInput.project.url
    };
    return _project;
}

function getBuildDefinitionTriggers(buildJsonInput) {
    var _triggers = {
        batchChanges: buildJsonInput.triggers[0].batchChanges,
        triggerType: buildJsonInput.triggers[0].triggerType
    };
    return _triggers;
}

function getBuildDefinitionRetention(buildJsonInput) {
    var _retention = {
        daysToKeep: buildJsonInput.retentionRules[0].daysToKeep,
        minimumToKeep: buildJsonInput.retentionRules[0].minimumToKeep
    };
    return _retention;
}

function getBuildDefinitionQueue(buildJsonInput) {
    var _queue = {
        displayName: buildJsonInput.queue.name,
        name: buildJsonInput.queue.pool.name,
        isHosted: buildJsonInput.queue.pool.isHosted,
        id: buildJsonInput.queue.pool.id
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
        _item["value"] = _variables[_key];
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
        _phasesArray["steps"] = [];

        // Construct each step within that phase        
        for (j = 0; j < currentPhase.steps; j++) {
            var _stepsArray = {};
            var currentStep = currentPhase.steps[j];

            _stepsArray["name"] = currentStep.displayName;
            _stepsArray["enabled"] = currentStep.enabled;
            _stepsArray["continueOnError"] = currentStep.continueOnError;
            _stepsArray["id"] = currentStep.task.id;
            _stepsArray["icon"] = "\images"; //TODO: make this based on the ID of the task

            _phasesArray["steps"].push(_stepsArray);
        }
        
        // Finally, push each phase into the process JSON
        _processJson.push(_phasesArray);
    }
    
    return _processJson;
}


/*
 * QUEUE
 * *****
 * Hosted Linux Preview & isHosted id=3
 * Hosted VS2017 id=4
 * Hosted macOS Preview id=5
 * Hosted id=2
 * Default id=1 
 * process step 2c65196a-54fd-4a02-9be8-d9d1837b7c5d
 */