/// <reference path="../modules/globalSettings.js" />
/// <reference path="../modules/miscHelper.js" />

describe('miscHelper.test.js', function () {
    describe("getRandomRGBA", function () {
        var color = getRandomRGBA();

        it("Returns a color code containing rgba at the start", function () {
            expect(color).toMatch(/rgba/i);
        });

        it("Returns a color code containing 0.28 at the end", function () {
            expect(color).toMatch(/0.28/i);
        });
    });

    describe("isEmpty", function () {
        var testObject = {};

        it("Returns true if the object supplied is an empty object", function () {
            expect(isEmpty(testObject)).toBe(true);
        });

        it("Returns true if the object supplied is null", function () {
            testObject = null;
            expect(isEmpty(testObject)).toBe(true);
        });

        it("Returns false if the object supplied contains elements", function () {
            testObject = { "test": "value" };
            expect(isEmpty(testObject)).toBe(false);
        });
    });

    describe("isDevUrl", function () {
        var _windowHostname = "clydedz.github.io";

        it("Returns true if the object supplied is an empty object", function () {
            expect(isDevUrl(_windowHostname)).toBe("https://clydedz.github.io/cicd-docs/");
        });

        it("Returns true if the object supplied is null", function () {
            _windowHostname = "localhost";
            expect(isDevUrl(_windowHostname)).toBe("/");
        });
    });
});