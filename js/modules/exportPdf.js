

function exportPdf(buildReleaseJson) {
    var doc = new jsPDF('p', 'pt');

    // Document constants
    var x_const = 40;
    var yStartPoint = 50;
    var h1FontSize_const = 22;
    var h2FontSize_const = 18;
    var h3FontSize_const = 15;
    var pFontSize_const = 10;
    var hLineHeight_const = 28;
    var pLineHeight_const = 14;

    // Common header
    doc.setFontSize(h1FontSize_const);
    doc.text(x_const, yStartPoint, 'CI/CD Docs');

    ////////////////////////
    //////   BUILD
    ///////////////////////
    if (buildReleaseJson.buildDef !== null) {
        var _buildJson = buildReleaseJson.buildDef;

        // BUILD PIPELINE SECTION
        //////////////////////////////////////////////////////
        doc.setFontSize(h2FontSize_const);
        doc.setFontType('bold');
        doc.setTextColor(39,39,39);
        doc.text(x_const, (yStartPoint = yStartPoint + hLineHeight_const * 2), 'BUILD PIPELINE');
        var lineY = yStartPoint + 7;
        var lineX = x_const;
        var lineLength = 550;
        doc.setDrawColor(100);
        doc.line(lineX, lineY, lineLength, lineY);
        //doc.line(lineX, lineY, lineLength, lineY);
        yStartPoint = yStartPoint + (hLineHeight_const/2);

        // BUILD NAME
        //////////////////////////////////////////////////////
        doc.setFontSize(h3FontSize_const);
        doc.setFontType('normal');
        doc.setTextColor(142, 45, 226);
        doc.text(x_const, (yStartPoint = yStartPoint + hLineHeight_const), _buildJson.name);

        // Contents under build name
        doc.setFontSize(pFontSize_const);
        doc.setFontType('normal');
        doc.setTextColor(100);
        
        doc.textWithLink(_buildJson.repository.name, x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), { url: _buildJson.repository.url });
        doc.textWithLink(_buildJson.project.name, x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), { url: _buildJson.project.url });
        //doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Type: ${_buildJson.repository.type} repository.`);
        doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Created by ${_buildJson.author.displayName} on ${_buildJson.creationDate}.`);
        doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Email: ${_buildJson.author.email}`);

        // PROCESS / BUILD TASKS
        //////////////////////////////////////////////////////
        doc.setFontSize(h3FontSize_const);
        doc.setFontType('normal');
        doc.setTextColor(142, 45, 226);
        doc.text(x_const, (yStartPoint = yStartPoint + (hLineHeight_const*1.5)), 'Process');
       
        // Loop thru all the phases
        doc.setTextColor(100);
        doc.setFontSize(pFontSize_const);

        var _phases = _buildJson.process;
        for (phaseIndex = 0; phaseIndex < _phases.length; phaseIndex++) {
            var currentPhase = _phases[phaseIndex];

            // Phase
            yStartPoint = yStartPoint + pLineHeight_const;
            // Triangle co-ords
            var triangleX1 = x_const;
            var triangleX2 = x_const;
            var triangleX3 = x_const+3;
            var triangleY1 = yStartPoint;
            var triangleY2 = yStartPoint + 6;
            var triangleY3 = yStartPoint + 3;
            doc.setFillColor(0);
            doc.triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3, 'FD');
            doc.text(triangleX3 + 3, triangleY3 + (triangleY2-triangleY3), currentPhase.name);
            yStartPoint = triangleY3;

            // Steps
            // Construct a table containing all steps in each phase
            var columns = [
                { title: "Name", dataKey: "name" },
                { title: "Version", dataKey: "version" },
                { title: "Enabled", dataKey: "enabled" }
            ];
            var rows = [];

            // Loop thru all the steps/tasks in each phase
            var _steps = currentPhase.steps;
            for (stepsIndex = 0; stepsIndex < _steps.length; stepsIndex++) {
                var currentStep = _steps[stepsIndex];               

                var _stepsArray = {};
                _stepsArray["name"] = currentStep.name;
                _stepsArray["version"] = currentStep.version;
                _stepsArray["enabled"] = currentStep.enabled;

                rows.push(_stepsArray);
            }

            // Insert all steps into the table and display
            doc.autoTable(columns, rows,
                {
                    theme: 'striped',
                    headerStyles: { fillColor: [142, 45, 226]},
                    margin: { left: x_const },
                    startY: (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)),
                    showHeader: 'everyPage'
                });
            yStartPoint = doc.autoTable.previous.finalY;//getNewPY(doc.autoTable.previous.finalY, hLineHeight_const);
        }

        

        // VARIABLES
        //////////////////////////////////////////////////////
        doc.setFontSize(h3FontSize_const);
        doc.setFontType('normal'); 
        doc.setTextColor(142, 45, 226);
        doc.text(x_const, (yStartPoint = yStartPoint + (hLineHeight_const*1.5)), 'Variables');

        // Contents under variables
        doc.setFontSize(pFontSize_const);
        doc.setFontType('normal');
        doc.setTextColor(100);

        var columns = [
            { title: "Key", dataKey: "key" },
            { title: "Value", dataKey: "value" }
        ];
        var rows = [];

        // Loop thru all the variables
        for (variableIndex = 0; variableIndex < _buildJson.variables.length; variableIndex++) {
            var _variableArray = {};
            _variableArray["key"] = _buildJson.variables[variableIndex].key;
            _variableArray["value"] = _buildJson.variables[variableIndex].value;
            rows.push(_variableArray);
        }
        doc.autoTable(columns, rows,
            {
                theme: 'striped',
                headerStyles: { fillColor: [142, 45, 226] },
                margin: { left: x_const },
                startY: (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)),
                showHeader: 'everyPage'
            });   

        // Queue
        doc.setFontSize(pFontSize_const);
        doc.setFontType('normal');
        doc.setTextColor(100);

        doc.text(x_const, (yStartPoint = getNewPY(doc.autoTable.previous.finalY, pLineHeight_const)), `Agent: ${_buildJson.queue.displayName}`);
        doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Is hosted: ${_buildJson.queue.isHosted}`);


        // TRIGGERS, RETENTION, ETC
        //////////////////////////////////////////////////////
        doc.setFontSize(h3FontSize_const);
        doc.setFontType('normal');
        doc.setTextColor(142, 45, 226);
        doc.text(x_const, (yStartPoint = yStartPoint + (hLineHeight_const*1.5)), 'Triggers, Retention, etc.');

        // Contents under triggers, retention, etc.
        doc.setFontSize(pFontSize_const);
        doc.setFontType('normal');
        doc.setTextColor(100);

        // Triggers
        doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Batch change enabled: ${_buildJson.triggers.batchChanges}`);
        doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Trigger type: ${_buildJson.triggers.triggerType}`);

        // Retention
        doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Email: ${_buildJson.retention.daysToKeep}`);
        doc.text(x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)), `Email: ${_buildJson.retention.minimumToKeep}`);

        // FOOTER
        //////////////////////////////////////////////////////
        doc.text("footer", x_const, (yStartPoint = getNewPY(yStartPoint, pLineHeight_const)));
    }
    
    //if (buildReleaseJson.releaseDef !== null) {
    //    doc.setFontSize(h2FontSize_const);
    //    doc.text(x_const, (yStartPoint = yStartPoint + lineHeight_const), 'Release Pipeline');
    //}

    doc.save('a4.pdf');
   
}

function getNewPY(oldY, lineHeight) {
    return oldY + lineHeight;
}


 /*
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    var dataURL;
    img.onload = function () {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL();
        console.log(dataURL);
        console.log("b");
        doc.setFontSize(40);
        doc.text(30, 20, 'Hello world!');
        doc.addImage(dataURL, 'JPEG', 15, 40, 60, 60);
        //doc.output('datauri');
        doc.save('a4.pdf');
        //callback(dataURL);
        //canvas = null;
        //return dataURL;
    };
    console.log("c");
    img.src = '/images/logo/logo-sq.png';
    */
