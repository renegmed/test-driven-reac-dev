import mapChooser from '../mapChooser';

describe("mapChooser", function() {
    it("returns an image file name portland is passed into it", function() {
        let expected = "portland.png";
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    });

    it("returns a null image file passed into it", function() {
        let expected = "none.png";
        let actual = mapChooser(null);
        expect(actual).toEqual(expected);
    });
});