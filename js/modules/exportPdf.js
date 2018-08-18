﻿/////////////////////////////////////////
//////   Export PDF starting point
/////////////////////////////////////////


function exportPdf(buildReleaseJson) {
    var doc = new jsPDF('p', 'pt', 'a4'); 
    doc.setProperties({
        title: getFileName(),
        subject: 'Documentation for your VSTS CI/CD pipeline',
        author: 'CI/CD Docs',
        keywords: 'documentation, cicd, devops, vsts',
        creator: 'CI/CD Docs'
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

        // BUILD NAME, REPOSITORY, PROJECT AND TRIGGERS
        doc = printBuildNameHeading(doc, _buildJson);
        doc = printRepositoryAndProject(doc, _buildJson);
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

