////////////////////////////////////////
//////   Global variables
////////////////////////////////////////

// Build and release json data uploaded by user
var buildJsonData = {};
var releaseJsonData = {};

// Template names for Mustache
var templateNames = {
    UPLOAD: "UPLOAD",
    VISUALIZE: "VISUALIZE",
    BUILD: "BUILD",
    RELEASE: "RELEASE",
    OUTPUT: "OUTPUT",
    FOOTER: "FOOTER"
}

// Export functionality variables
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
    bodyFontSize: 10,
    h1FontSize: 22,
    h2FontSize: 18,
    h3FontSize: 15,
    h4FontSize: 12,
    h5FontSize: 11,
    iconSize: 60,
    printIconSize: 14
};

var lineHeightType = {
    BODY: "BODY",
    HEADING: "HEADING",
    SUBHEADING: "SUBHEADING"
};

var lineObjectLength = {
    FULL: 560,
    QUATER: 150
};



////////////////////////////////////////
//////   Constants
////////////////////////////////////////

// App constants
const appVersionNumber = "1.0.0";
const appName = "CI/CD Docs";
const appUrl = "https://clydedz.github.io/cicd-docs/";

// Other constants
const buildJsonUrlQueryStringKey = "buildjson";
const releaseJsonUrlQueryStringKey = "releasejson";
const buildJsonText = "build";
const releaseJsonText = "release";
