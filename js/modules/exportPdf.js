/////////////////////////////////////////
//////   Export PDF starting point
/////////////////////////////////////////


function exportPdf(buildReleaseJson) {
    pdf.yAxisValue = 50;

    var doc = new jsPDF('p', 'pt', 'a4'); 
    doc.setProperties({
        title: getFileName(),
        subject: 'Documentation for your VSTS CI/CD pipeline',
        author: appName,
        keywords: 'documentation, cicd, devops, vsts',
        creator: appName
    });

    // DOCUMENT HEADER
    doc = printDocumentHeader(doc);

    ////////////////////////
    //////   BUILD
    ////////////////////////

    if (buildReleaseJson.buildDef !== null) {
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

    if (buildReleaseJson.releaseDef !== null) {
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
        
    doc = addPageFooter(doc);
    //doc = addDocumentFooter(doc);
    doc.save(`${getFileName()}.pdf`);
}



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ', 0.28)';
}