/////////////////////////////////////////
//////   Export PDF starting point
/////////////////////////////////////////


function exportPdf(buildReleaseJson) {
    pdf.yAxisValue = 50;

    var doc = new jsPDF('p', 'pt', 'a4'); 
    doc.setProperties({
        title: getFileName(),
        subject: 'Documentation for your Azure DevOps CI/CD pipeline',
        author: appName,
        keywords: 'documentation, cicd, devops, vsts, azure devops',
        creator: appName
    });

    // DOCUMENT HEADER
    doc = printDocumentHeader(doc);

	let doesDataContainBuildDefinition = buildReleaseJson.buildDef !== null;
	let doesDataContainReleaseDefinition = buildReleaseJson.releaseDef !== null;

    ////////////////////////
    //////   BUILD
    ////////////////////////

	if (doesDataContainBuildDefinition) {
        var _buildJson = buildReleaseJson.buildDef;

        // BUILD PIPELINE SECTION
        doc = printBuildPipelineHeading(doc);

        // BUILD NAME, REPOSITORY, PROJECT 
        doc = printBuildNameHeading(doc, _buildJson);
        doc = printRepositoryAndProject(doc, _buildJson);

        // TRIGGERS
        doc = printTriggersHeading(doc);
        doc = printTriggers(doc, _buildJson);
       
        // PROCESS / BUILD TASKS
        doc = printProcessHeading(doc);
        doc = printQueueDetails(doc, _buildJson);
        doc = printPhasesAndSteps(doc, _buildJson);

        // VARIABLES
        doc = printVariablesHeading(doc);
        doc = printVariables(doc, _buildJson);

        // RETENTION, ETC
        doc = printRetentionRulesHeading(doc);
        doc = printRetentionRules(doc, _buildJson);

        // META INFORMATION AND AUTHOR
        doc = printMetaInformationHeading(doc);
        doc = printAuthorDetails(doc, _buildJson);
        doc = printBuildMetaInformation(doc, _buildJson);

    }

    ////////////////////////
    //////   RELEASE
    ////////////////////////

	if (doesDataContainReleaseDefinition) {
        var _releaseJson = buildReleaseJson.releaseDef;

        // RELEASE PIPELINE SECTION
        doc = printReleasePipelineHeading(doc);

        // RELEASE NAME, REPOSITORY, PROJECT AND TRIGGERS
        doc = printReleaseNameHeading(doc, _releaseJson);
        doc = printReleaseDescription(doc, _releaseJson);
        doc = printTriggersHeading(doc);
        doc = printReleaseTriggers(doc, _releaseJson);

        // META INFORMATION
        doc = printMetaInformationHeading(doc);
        doc = printReleaseAuthorDetails(doc, _releaseJson);
        doc = printReleaseMetaInformation(doc, _releaseJson);

        // VARIABLES
        doc = printVariablesHeading(doc);
        doc = printReleaseVariables(doc, _releaseJson);
        
        // ARTIFACTS
        doc = printArtifactsHeading(doc);
        doc = printReleaseArtifacts(doc, _releaseJson);

        // ENVIRONMENTS, PHASES AND TASKS
        doc = printEnvironmentHeading(doc);
        doc = printReleaseDefinitionEnvironments(doc, _releaseJson);
	}

	///////////////////////////////////////
    //////   NO BUILD AND NO RELEASE
	///////////////////////////////////////
	if (!doesDataContainBuildDefinition && !doesDataContainReleaseDefinition) {
		doc = printNoBuildNoRelease(doc);
	}
        
    doc = addPageFooter(doc);
    doc.save(`${getFileName()}.pdf`);
}

function printNoBuildNoRelease(doc) {
	doc = setBodyStyle(doc);		
	doc = addNewBodyLine(doc, lineHeightType.BODY);	
	doc.text(pdf.xAxisValue, pdf.yAxisValue, `No build and release definition found. Please try uploading the file again?`);

	return doc;
}