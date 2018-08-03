import mapChooser from '../mapChooser';

describe("mapChooser", function() {
    it("returns an image file name portland is passed into it", function() {
        let expected = "portland.jpg";
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    });

    it("returns a null image file passed into it", function() {
        let expected = "default.jpg";
        let actual = mapChooser(null);
        expect(actual).toEqual(expected);
    });
});