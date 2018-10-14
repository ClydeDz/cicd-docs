
describe("getRandomRGBA", function () {
    let color;

    beforeEach(() => {
        color = getRandomRGBA();
    });

    it("Returns a color code containing rgba at the start", function () {
        expect(color).toMatch(/rgba/i);
    });

    it("Returns a color code containing 0.28 at the end", function () {
        expect(color).toMatch(/0.28/i);
    });
});

describe("isEmpty", function () {
    let testObject = {};

    it("Returns true if the object supplied is an empty object", function () {   
        expect(isEmpty(testObject)).toBe(true);
    });

    it("Returns true if the object supplied is null", function () {
        testObject = null;
        expect(isEmpty(testObject)).toBe(true);
    });

    it("Returns false if the object supplied contains elements", function () {
        testObject = { "test" : "value" };
        expect(isEmpty(testObject)).toBe(false);
    });
});