// Document constants
var x_const = 40;
var yStartPoint = 50;
var h1FontSize_const = 22;
var h2FontSize_const = 18;
var h3FontSize_const = 15;
var pFontSize_const = 10;
var hLineHeight_const = 28;
var pLineHeight_const = 14;
var iconSize = 60;

var pdf = {
    xAxisValue: 40,
    yAxisValue: 50,
    bodyLineHeight: 18,
    headingLineHeight: 28,
    addNewBodyLine: function () {
        this.yAxisValue = this.yAxisValue + this.bodyLineHeight;
    },
    addNewHeadingLine: function () {
        this.yAxisValue = (this.yAxisValue + this.headingLineHeight) * 1.5;
    },
    addNewSubHeadingLine: function () {
        this.yAxisValue = this.yAxisValue + (this.headingLineHeight * 1.5);
    },
    bodyFontSize: 14,
    h1FontSize: 22,
    h2FontSize: 18,
    h3FontSize: 15,
    iconSize: 60,
    pageCount: 0,
    incrementPageCount: function () {
        ++this.pageCount;
    },
    footerFlag: ""
};

var lineHeightType = {
    BODY: "BODY",
    HEADING: "HEADING",
    SUBHEADING: "SUBHEADING"
};

function exportPdf(buildReleaseJson) {
    var doc = new jsPDF('p', 'pt', 'a4'); //, unit: 'pt'
    //var doc = new jsPDF({ pagesplit: true }); //'p', 'pt', unit: 'pt'
    doc.setProperties({
        title: 'CI/CD Docs',
        subject: 'This is the subject',
        author: 'CI/CD Docs',
        keywords: 'documentation, cicd, devops, vsts',
        creator: 'MEEE'
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
        //18 for 2page process list
        for (t = 0; t <= 2; t++) {
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

    var totalPagesExp = "{total_pages_count_string}";

    console.log(doc);
    console.log(doc.internal.getNumberOfPages());
    for (var footerindex = 1; footerindex <= doc.internal.getNumberOfPages(); footerindex++) {
        doc.setPage(footerindex);
        var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
        doc.text(pdf.xAxisValue, pageHeight - 15, `Page ${footerindex} of ${doc.internal.getNumberOfPages()}`);
    }
    //console.log(doc.putTotalPages().length);
    doc.putTotalPages(totalPagesExp);
    //doc = addPageFooter(doc);
    doc.save('b4.pdf');
}

function addNewBodyLine(doc, type) {
    var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    if (pdf.yAxisValue >= pageHeight - 50) {
        //doc = addPageFooter(doc);
        doc.addPage('p', 'pt');
        pdf.yAxisValue = 50;
    } else {
        if (type === lineHeightType.BODY) {
            pdf.addNewBodyLine();
        }
        if (type === lineHeightType.HEADING) {
            pdf.addNewHeadingLine();
        }
        if (type === lineHeightType.SUBHEADING) {
            pdf.addNewSubHeadingLine();
        }
        
    }    
    return doc;
}

function addPageFooter(doc, from) {
    //if (pdf.footerFlag === "" || pdf.footerFlag === from) {
        pdf.footerFlag = from;
        pdf.incrementPageCount();
        var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
        doc.text(pdf.xAxisValue, pageHeight - 15, `Page ${pdf.pageCount} | ${from}`);
        return doc;
    //}
    
}


////////////////////////////////////////
//////   Build headlines
////////////////////////////////////////

function printDocumentHeader(doc) {
    doc.setFontSize(h1FontSize_const);
    var siteLogo = getBase64Image(document.getElementById("printSiteLogo"), null, null);
    doc.addImage(siteLogo, 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 15, 30, 30);
    doc.text(pdf.xAxisValue + 40, pdf.yAxisValue + 7, 'CI/CD Docs');
    return doc;
}

function printBuildPipelineHeading(doc) {
    doc = setH2HeadingStyle(doc);
    //pdf.addNewHeadingLine();
    doc = addNewBodyLine(doc, lineHeightType.HEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'BUILD PIPELINE');
    doc = drawLine(doc);
    //yStartPoint = yStartPoint + (hLineHeight_const / 2);
    return doc;
}

function printBuildNameHeading(doc, _buildJson) {
    doc = setH3HeadingStyle(doc);
    //pdf.addNewSubHeadingLine();
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Build name: ${_buildJson.name}`);
    return doc;
}

function printProcessHeading(doc) {
    doc = setH3HeadingStyle(doc);
    //pdf.addNewSubHeadingLine();
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Process');
    return doc;
}

function printVariablesHeading(doc) {
    doc = setH3HeadingStyle(doc);
    //pdf.addNewSubHeadingLine();
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Variables');
    return doc;
}

function printTriggersRetentionHeading(doc) {
    doc = setH3HeadingStyle(doc);
    //pdf.addNewSubHeadingLine();
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Triggers, Retention, etc.');
    return doc;
}


////////////////////////////////////////
//// Build pipeline contents
///////////////////////////////////////


function printRepositoryProjectAndAuthor(doc, _buildJson) {
    doc = setBodyStyle(doc);

    var repositoryIcon = getBase64Image(document.getElementById("repositoryIcon"), iconSize, iconSize);
    var platformVstsIcon = getBase64Image(document.getElementById("platformVstsIcon"), iconSize, iconSize);

    // Repo
    //pdf.addNewBodyLine();
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(repositoryIcon, 'JPEG', pdf.xAxisValue, pdf.yAxisValue, 14, 14);
    doc.textWithLink(_buildJson.repository.name, pdf.xAxisValue + 20, pdf.yAxisValue + 10, { url: _buildJson.repository.url });
    // Project
    //pdf.addNewBodyLine();
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(platformVstsIcon, 'JPEG', pdf.xAxisValue, pdf.yAxisValue, 14, 14);
    doc.textWithLink(_buildJson.project.name, pdf.xAxisValue + 20, pdf.yAxisValue + 10, { url: _buildJson.project.url });
    // Author
    //pdf.addNewBodyLine();
    //pdf.addNewBodyLine();
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Created by ${_buildJson.author.displayName} on ${_buildJson.creationDate}.`);
    //pdf.addNewBodyLine();
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Email: ${_buildJson.author.email}`);

    return doc;
}

function printQueueDetails(doc, _buildJson) {
    doc = setBodyStyle(doc);
    var agentIcon = getBase64Image(document.getElementById("queueAgentIcon"), iconSize, iconSize);
    //pdf.addNewBodyLine();
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(agentIcon, 'JPEG', pdf.xAxisValue, pdf.yAxisValue, 14, 14);
    doc.text(pdf.xAxisValue + 20, pdf.yAxisValue + 10, `${_buildJson.queue.displayName} agent`);
    return doc;
}

function printPhasesAndSteps(doc, _buildJson) {
    var _phases = _buildJson.process;
    for (phaseIndex = 0; phaseIndex < _phases.length; phaseIndex++) {
        var currentPhase = _phases[phaseIndex];

        // Phase
        //pdf.addNewBodyLine();
        //pdf.addNewBodyLine();
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        // Triangle co-ords
        var triangle = {
            x1: pdf.xAxisValue,
            x2: pdf.xAxisValue,
            x3: pdf.xAxisValue + 3,
            y1: pdf.yAxisValue,
            y2: pdf.yAxisValue + 6,
            y3: pdf.yAxisValue + 3,
            fill: 'FD'
        };

        doc.setFillColor(0);
        doc.triangle(triangle.x1, triangle.y1, triangle.x2, triangle.y2, triangle.x3, triangle.y3, triangle.fill);
        doc.text(triangle.x3 + 3, triangle.y3 + (triangle.y2 - triangle.y3), currentPhase.name);
        pdf.yAxisValue = triangle.y3;

        // Steps
        // Construct a table containing all steps in each phase
        var columns = [
            { title: "Task Icon", dataKey: "icon" },
            { title: "Name", dataKey: "name" },
            { title: "Version", dataKey: "version" },
            { title: "Enabled", dataKey: "enabled" }
        ];
        var rows = [];

        // Loop thru all the steps/tasks in each phase
        for (stepsIndex = 0; stepsIndex < currentPhase.steps.length; stepsIndex++) {
            var currentStep = currentPhase.steps[stepsIndex];
            var _stepsArray = {};
            _stepsArray["name"] = currentStep.name;
            _stepsArray["version"] = currentStep.version;
            rows.push(_stepsArray);
        }

        // Insert all steps into the table and display
        var images = [];
        var printedImages = [];
        var enabledStatusIconImages = [];
        var taskIconIndex = 0; var enabledIconIndex = 0;
        //pdf.addNewBodyLine();
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.autoTable(columns, rows,
            {
                theme: 'striped',
                styles: { overflow: 'linebreak' },
                headerStyles: { fillColor: [142, 45, 226] },
                margin: { left: pdf.xAxisValue },
                startY: pdf.yAxisValue,
                showHeader: 'everyPage',
                drawCell: function (cell, opts) {
                    console.log(opts);
                    if (opts.column.index === 0) {
                        //currentPhase.steps[i] != undefined
                        var _stepIcon = getBase64Image(document.getElementById(`stepIcon-${currentPhase.steps[taskIconIndex].id}`), 32, 32);
                        for (var imgIndex = 0; imgIndex < images.length; imgIndex++) {  
                            //var _currentImage = images[imgIndex];
                            //var _currentId = currentPhase.steps[taskIconIndex].id;
                            console.log(currentPhase.steps[taskIconIndex].id + " && " + images[imgIndex].id);
                            if (currentPhase.steps[taskIconIndex].id === images[imgIndex].id) {
                                console.log("found");
                            }
                        }
                        images.push({
                            url: _stepIcon,
                            x: cell.textPos.x,
                            y: cell.textPos.y,
                            id: currentPhase.steps[taskIconIndex].id,
                            indexCount: taskIconIndex
                        });
                        taskIconIndex++;
                    }

                    if (opts.column.index === 3) {
                        var _enabledIcon;
                        if (currentPhase.steps[enabledIconIndex].enabled) {
                            _enabledIcon = getEnabledStatusIcon();
                        }
                        else {
                            _enabledIcon = getDisabledStatusIcon();
                        }
                        enabledStatusIconImages.push({
                            url: _enabledIcon,
                            x: cell.textPos.x,
                            y: cell.textPos.y
                        });
                        enabledIconIndex++;
                    }
                },
                addPageContent: function () {
                    console.log("addPageContent");
                    console.log(images);
                    var printImagesFlag = true;
                    for (var i = 0; i < images.length; i++) {
                        console.log(printedImages);
                        for (var printedImgsIndex = 0; printedImgsIndex < printedImages.length; printedImgsIndex++) {
                            if (images[i].id === printedImages[printedImgsIndex].id) {
                                printImagesFlag = false;
                                break;
                            }
                            printImagesFlag = true;
                        }
                        if (printImagesFlag) { 
                            console.log(printImagesFlag);
                            console.log(images[i]);

                            printedImages.push({
                                id: images[i].id
                            });

                            doc.addImage(images[i].url, images[i].x, images[i].y, 14, 14);
                            doc.addImage(enabledStatusIconImages[i].url, enabledStatusIconImages[i].x, enabledStatusIconImages[i].y, 14, 14);
                            printImagesFlag = false;
                        }
                        //images.splice(0, 1);
                        //images.splice(0, 1);
                    }
                    for (var i = 0; i < images.length; i++) {
                        //images.splice(i, 1);
                        //enabledStatusIconImages.splice(i, 1);
                    }
                    //addPageFooter(doc, "process");
                }
            });
        pdf.yAxisValue  = doc.autoTable.previous.finalY;
    }
    return doc;
}


function printVariables(doc, _buildJson) {
    doc = setBodyStyle(doc);

    var columns = [
        { title: "Variable Name", dataKey: "key" },
        { title: "Variable Value", dataKey: "value" }
    ];
    var rows = [];

    // Loop thru all the variables
    for (variableIndex = 0; variableIndex < _buildJson.variables.length; variableIndex++) {
        var _variableArray = {};
        _variableArray["key"] = _buildJson.variables[variableIndex].key;
        _variableArray["value"] = _buildJson.variables[variableIndex].value;
        rows.push(_variableArray);
    }

    var pageContent = function (data) {
        //addPageFooter(doc, "variables");
    };

    //pdf.addNewBodyLine();
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    // Insert all the variables into the table
    doc.autoTable(columns, rows,
        {
            theme: 'striped',
            headerStyles: { fillColor: [142, 45, 226] },
            margin: { left: pdf.xAxisValue },
            startY: pdf.yAxisValue,
            showHeader: 'everyPage',
            addPageContent: pageContent
        });
    pdf.yAxisValue  = doc.autoTable.previous.finalY;
    return doc;
}


function printTriggersAndRetention(doc, _buildJson) {
    doc = setBodyStyle(doc);

    // Triggers
    //pdf.addNewBodyLine();
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue , `Batch change enabled: ${_buildJson.triggers.batchChanges}`);
    //pdf.addNewBodyLine();
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Trigger type: ${_buildJson.triggers.triggerType}`);

    // Retention
    //pdf.addNewBodyLine();
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue , `Email: ${_buildJson.retention.daysToKeep}`);
    //pdf.addNewBodyLine();
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue , `Email: ${_buildJson.retention.minimumToKeep}`);
    return doc;
}



