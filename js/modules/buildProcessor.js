//////////////////////////////////
/////////    Build process
//////////////////////////////////

function getBuildJson(buildJsonInput) {

    var _buildDef = {
        name: getBuildDefinitionName(buildJsonInput),
        url: getBuildDefinitionUrl(buildJsonInput),
        buildStatusBadge: getBuildDefinitionBadge(buildJsonInput),
        creationDate: getBuildDefinitionCreationDate(buildJsonInput),
        repository: getBuildDefinitionRepository(buildJsonInput),
        author: getBuildDefinitionAuthor(buildJsonInput),
        project: getBuildDefinitionProject(buildJsonInput),
        triggers: getBuildDefinitionTriggers(buildJsonInput),
        retention: getBuildDefinitionRetention(buildJsonInput),
        queue: getBuildDefinitionQueue(buildJsonInput),
        variables: getBuildDefinitionVariables(buildJsonInput),
        process: getBuildDefinitionProcess(buildJsonInput)
    };
    return _buildDef;
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
    console.log("trigger");
    console.log(_triggers);
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
        _item["value"] = _variables[_key].value;
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
        for (j = 0; j < currentPhase.steps.length; j++) {
            var _stepsArray = {};
            var currentStep = currentPhase.steps[j];
            var _taskIcon = "";
            
            _stepsArray["name"] = currentStep.displayName;
            _stepsArray["enabled"] = currentStep.enabled;
            _stepsArray["continueOnError"] = currentStep.continueOnError;
            _stepsArray["id"] = currentStep.task.id;
            _stepsArray["version"] = currentStep.task.versionSpec;
            _stepsArray["icon"] = `/images/extend/tasks/${currentStep.task.id}/icon.png`;

            _phasesArray["steps"].push(_stepsArray);
        }
        
        // Finally, push each phase into the process JSON
        _processJson.push(_phasesArray);
    }
    
    return _processJson;
}

function errorLoadingImage(e) {
    e.src = "/images/logo/logo-sq.png";
    console.clear();  
}

function errorLoadingQueueIcon(e) {
    e.src = "/images/extend/queue/0/icon.png";
    console.clear();
}

function errorLoadingRepositoryIcon(e) {
    e.src = "/images/extend/repository/Other/icon.png";
    console.clear();
}
