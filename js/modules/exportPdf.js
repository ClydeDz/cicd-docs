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

        // BUILD NAME, REPOSITORY, PROJECT AND AUTHOR
        doc = printBuildNameHeading(doc, _buildJson);
        doc = printRepositoryProjectAndAuthor(doc, _buildJson);

        //// FOOTER
        //18 for 2page process list //TODO: remove this for
        for (t = 0; t <= 18; t++) {
            doc = addNewBodyLine(doc, lineHeightType.BODY);
            doc.text(pdf.xAxisValue, pdf.yAxisValue, "footer");
        }

        // PROCESS / BUILD TASKS
        doc = printProcessHeading(doc);
        doc = printQueueDetails(doc, _buildJson);
        doc = printPhasesAndSteps(doc, _buildJson);

        // VARIABLES
        doc = printVariablesHeading(doc);
        doc = printVariables(doc, _buildJson);

        // TRIGGERS, RETENTION, ETC
        doc = printTriggersRetentionHeading(doc);
        doc = printTriggersAndRetention(doc, _buildJson);
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

