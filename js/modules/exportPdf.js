/////////////////////////////////////////
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

    //if (buildReleaseJson.releaseDef !== null) {
    //    doc.setFontSize(h2FontSize_const);
    //    doc.text(x_const, (yStartPoint = yStartPoint + lineHeight_const), 'Release Pipeline');
    //}
        
    doc = addPageFooter(doc);
    //doc = addDocumentFooter(doc);
    doc.save(`${getFileName()}.pdf`);
}

