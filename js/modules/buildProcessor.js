//////////////////////////////////
/////////    Build process
//////////////////////////////////
function getBuildJson(buildJsonInput) {

    var _buildDef = {
        name: getBuildDefinitionName(buildJsonInput),
        url: getBuildDefinitionUrl(buildJsonInput),
        buildStatusBadge: getBuildDefinitionBadge(buildJsonInput),
        repository: getBuildDefinitionRepository(buildJsonInput)
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


/*
 * QUEUE
 * *****
 * Hosted Linux Preview & isHosted id=3
 * Hosted VS2017 id=4
 * Hosted macOS Preview id=5
 * Hosted id=2
 * Default id=1
 */