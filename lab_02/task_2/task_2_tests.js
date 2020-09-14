let test = require('./task_2')
let gmod = require('../task_1/task_1')
var assert = require('assert')



describe('segments Calculation', function () {
    it ("3 4 5", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 0) , new gmod.Point(0, 4))
        assert.equal([tr.ab, tr.ac, tr.bc].toString(), [3, 4, 5].toString())
    });
    it ("5 6 5", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 4) , new gmod.Point(6, 0))
        assert.equal([tr.ab, tr.ac, tr.bc].toString(), [5, 6, 5].toString())
    });
});

describe('isExist', function () {
    it ("3 4 5", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 0) , new gmod.Point(0, 4))
        assert.equal(tr.isExist(), true)
    });
    it ("5 6 5", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 4) , new gmod.Point(6, 0))
        assert.equal(tr.isExist(), true)
    });
    it ("one line", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(1, 1) , new gmod.Point(2, 2))
        assert.equal(tr.isExist(), false)
    });
    it ("same Points", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 4) , new gmod.Point(0, 0))
        assert.equal(tr.isExist(), false)
    });
});


describe('getPerimetre', function () {
    it ("3 4 5", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 0) , new gmod.Point(0, 4))
        assert.equal(tr.getPerimetre(), 12)
    });
    it ("5 6 5", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 4) , new gmod.Point(6, 0))
        assert.equal(tr.getPerimetre(), 16)
    });
    it ("one line", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(1, 1) , new gmod.Point(2, 2))
        assert.equal(tr.getPerimetre(), "triangle does not exist")
    });
    it ("same Points", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 4) , new gmod.Point(0, 0))
        assert.equal(tr.getPerimetre(), "triangle does not exist")
    });
});

describe('getPerimetre', function () {
    it ("3 4 5", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 0) , new gmod.Point(0, 4))
        assert.equal(tr.getPerimetre(), 12)
    });
    it ("5 6 5", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 4) , new gmod.Point(6, 0))
        assert.equal(tr.getPerimetre(), 16)
    });
    it ("one line", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(1, 1) , new gmod.Point(2, 2))
        assert.equal(tr.getPerimetre(), "triangle does not exist")
    });
    it ("same Points", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 4) , new gmod.Point(0, 0))
        assert.equal(tr.getPerimetre(), "triangle does not exist")
    });
});

describe('getArea', function () {
    it ("3 4 5", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 0) , new gmod.Point(0, 4))
        assert.equal(tr.getArea(), 6)
    });
    it ("5 6 5", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 4) , new gmod.Point(6, 0))
        assert.equal(tr.getArea(), 12)
    });
    it ("one line", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(1, 1) , new gmod.Point(2, 2))
        assert.equal(tr.getArea(), "triangle does not exist")
    });
    it ("same Points", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 4) , new gmod.Point(0, 0))
        assert.equal(tr.getArea(), "triangle does not exist")
    });
});

describe('hasStraightAngle', function () {
    it ("3 4 5", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 0) , new gmod.Point(0, 4))
        assert.equal(tr.hasStraightAngle(), true)
    });
    it ("5 6 5", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 4) , new gmod.Point(6, 0))
        assert.equal(tr.hasStraightAngle(), false)
    });
    it ("one line", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(1, 1) , new gmod.Point(2, 2))
        assert.equal(tr.hasStraightAngle(), "triangle does not exist")
    });
    it ("same Points", function () {
        let tr = new test.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 4) , new gmod.Point(0, 0))
        assert.equal(tr.hasStraightAngle(), "triangle does not exist")
    });
});

