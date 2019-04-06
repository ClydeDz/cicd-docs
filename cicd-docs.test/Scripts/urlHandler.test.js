/// <reference path="../../js/modules/globalSettings.js" />
/// <reference path="../../js/modules/urlHandler.js" />

describe('splitIndividualQueryStringKeys', function () {
    let keyValue;
    let _window = "https://clydedz.github.io/cicd-docs/?buildjson=abc.json&releasejson=xyz.json";

    it("Handles multiple query string keys", function () {
        keyValue = splitIndividualQueryStringKeys(_window);
        expect(keyValue.length).toBe(2);
    });

    it("Handles single query string key", function () {
        _window = "https://clydedz.github.io/cicd-docs/?buildjson=abc.json";
        keyValue = splitIndividualQueryStringKeys(_window);
        expect(keyValue.length).toBe(1);
    });
});


describe("getUrlVars", function () {
    let keyValue;
    let _window = {
        location: {
            href: "https://clydedz.github.io/cicd-docs/?buildjson=abc.json&releasejson=xyz.json"
        }
    };

    it("Identifies the first query string key", function () {
        keyValue = getUrlVars(_window)["buildjson"];
        expect(keyValue).toBe("abc.json");
    });

    it("Identifies the second query string key", function () {
        keyValue = getUrlVars(_window)["releasejson"];
        expect(keyValue).toBe("xyz.json");
    });

    it("Determines the correct number of query string keys", function () {
        keyValue = getUrlVars(_window);
        expect(keyValue.length).toBe(2);
    });

    it("Handles scenario when an empty URL is passed", function () {
        _window.location.href = "";
        keyValue = getUrlVars(_window)["buildjson"];
        expect(keyValue).toBe(undefined);
    });

    it("Handles scenario when only the base URL is passed", function () {
        _window.location.href = "https://clydedz.github.io/cicd-docs/";
        keyValue = getUrlVars(_window)["releasejson"];
        expect(keyValue).toBe(undefined);
    });

    it("Handles scenario when URL contains no query string", function () {
        _window.location.href = "https://clydedz.github.io/cicd-docs/index.html";
        keyValue = getUrlVars(_window)["releasejson"];
        expect(keyValue).toBe(undefined);
    });

    it("Handles scenario when null is passed as URL", function () {
        _window.location.href = null;
        keyValue = getUrlVars(_window)["releasejson"];
        expect(keyValue).toBe(undefined);
    });

    it("Handles scenario when window object is null", function () {
        _window = null;
        keyValue = getUrlVars(_window)["releasejson"];
        expect(keyValue).toBe(undefined);
    });
});


