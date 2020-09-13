let test = require('./task_3')
var assert = require('assert')

let mas = []



describe('Point additing', function () {
    it ("A", function () {
        assert.equal(test.addPoint(mas, {name: "A", x: 12, y: 5}), test.addPointResponse.POINTADDED)
    });
    it ("B", function () {
        assert.equal(test.addPoint(mas, {name: "B", x : -4, y : 0}), test.addPointResponse.POINTADDED)
    });
    it ("C", function () {
        assert.equal(test.addPoint(mas, {name: "C", x : 4, y : 1}), test.addPointResponse.POINTADDED)
    });
    it ("D", function () {
        assert.equal(test.addPoint(mas, {name: "D", x : -2, y : 1}), test.addPointResponse.POINTADDED)
    });
    it ("E", function () {
        assert.equal(test.addPoint(mas, {name: "E", x : 0, y : 0}), test.addPointResponse.POINTADDED)
    });
    it ("F", function () {
        assert.equal(test.addPoint(mas, {name: "F", x : -4, y : 3}), test.addPointResponse.POINTADDED)
    });
    it ("J", function () {
        assert.equal(test.addPoint(mas, {name: "J", x : -4, y : -3}), test.addPointResponse.POINTADDED)
    });
    it ("H", function () {
        assert.equal(test.addPoint(mas, {name: "H", x : 3, y : -5}), test.addPointResponse.POINTADDED)
    });
    it ("One more A(should fail)", function () {
        assert.equal(test.addPoint(mas, {name: "A", x : 4, y : 3}), test.addPointResponse.ALREADYEXIST)
    });
    it ("Strange coordinates", function () {
        assert.equal(test.addPoint(mas, {name: "FFF", x : 0, y : 'f'}), test.addPointResponse.WRONGINFO)
    });
    it ("No name", function () {
        assert.equal(test.addPoint(mas, {x : 0, y : 0}), test.addPointResponse.WRONGINFO)
    });
    it ("No x", function () {
        assert.equal(test.addPoint(mas, {name : "F", y : 0}), test.addPointResponse.WRONGINFO)
    });
    it ("No y", function () {
        assert.equal(test.addPoint(mas, {name : "F", x : 0}), test.addPointResponse.WRONGINFO)
    });
});


describe('Directions', function () {
    it ("UP", function () {
        assert.equal(test.directPoints(mas, 0, 0, test.direct.UP), "A: (12;5)\n" + "C: (4;1)\n" + "D: (-2;1)\n" + "F: (-4;3)\n")
    });
    it ("DOWN", function () {
        assert.equal(test.directPoints(mas, 0, 0, test.direct.DOWN), "J: (-4;-3)\n" + "H: (3;-5)\n")
    });
    it ("LEFT", function () {
        assert.equal(test.directPoints(mas, 0, 0, test.direct.LEFT), "B: (-4;0)\n" + "D: (-2;1)\n" + "F: (-4;3)\n" + "J: (-4;-3)\n")
    });
    it ("RIGHT", function () {
        assert.equal(test.directPoints(mas, 0, 0, test.direct.RIGHT), "A: (12;5)\n" + "C: (4;1)\n" + "H: (3;-5)\n")
    });
});

describe('No more distance', function () {
    it ("Zero", function () {
        assert.equal(test.noMoreDistance(mas, 0, {
            x: 1,
            y: 1,
        }), "")
    });
    it ("Exact point", function () {
        assert.equal(test.noMoreDistance(mas, 0, {
            x: 0,
            y: 0,
        }), "E: (0;0)\n")
    });
    it ("Exact point", function () {
        assert.equal(test.noMoreDistance(mas, 5, {
            name: "0",
            x: 0,
            y: 0,
        }), "B: (-4;0)\nC: (4;1)\nD: (-2;1)\nE: (0;0)\nF: (-4;3)\nJ: (-4;-3)\n")
    });
    it ("<0", function () {
        assert.equal(test.noMoreDistance(mas, -2, {
            name: "0",
            x: 0,
            y: 0,
        }), "")
    });
});

describe('maxDistance', function () {
    it ("just simple test", function () {
        assert.equal(test.maxDistance(mas), "A: (12;5)\n" +
            "J: (-4;-3)\n")
    });
});

describe('reqtangle', function () {
    it ("one point", function () {
        assert.equal(test.insideReqt(mas, {x: 3, y: 2}, {x: 6, y:0}), "C: (4;1)\n")
    });
    it ("two point", function () {
        assert.equal(test.insideReqt(mas, {x: 2, y: 6}, {x: 13, y:0}), "A: (12;5)\nC: (4;1)\n")
    });
    it ("two point but one one edge", function () {
        assert.equal(test.insideReqt(mas, {x: 2, y: 6}, {x: 12, y:0}), "A: (12;5)\nC: (4;1)\n")
    });
    it ("None", function () {
        assert.equal(test.insideReqt(mas, {x: 4, y: -1}, {x: 5, y:-2}), "")
    });
    let allresp = "A: (12;5)\n" +
        "B: (-4;0)\n" +
        "C: (4;1)\n" +
        "D: (-2;1)\n" +
        "E: (0;0)\n" +
        "F: (-4;3)\n" +
        "J: (-4;-3)\n" +
        "H: (3;-5)\n"
    it ("Allpoints", function () {
        assert.equal(test.insideReqt(mas, {x: -100, y: 100}, {x: 100, y:-100}), allresp)
    });
});

describe('edit Response', function () {
    it ("one point", function () {
        assert.equal(test.editCoordinatesByName(mas, "A", 12, 3), test.editResponse.OK)
    });
    it ("one point", function () {
        assert.equal(test.editCoordinatesByName(mas, "ASD", 12, 3), test.editResponse.NOPOINT)
    });
});
