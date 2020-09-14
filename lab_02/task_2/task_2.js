"use strict";

let gmod = require('../task_1/task_1');

module.exports.Triangle = class {

    constructor(a, b, c) {
        this._a = a;
        this._b = b;
        this._c = c;
        this.calculateSegments()
    }


    calculateSegments() {
        this.ab = new gmod.Segment(this._a, this._b).length()
        this.bc = new gmod.Segment(this._b, this._c).length()
        this.ac = new gmod.Segment(this._a, this._c).length()
    }


    get a() {
        return this._a;
    }

    set a(value) {
        this._a = value;
    }

    get b() {
        return this._b;
    }

    set b(value) {
        this._b = value;
    }

    get c() {
        return this._c;
    }

    set c(value) {
        this._c = value;
    }

    getAC() {
        return this.ac
    }

    getAB() {
        return this.ab
    }

    getBC() {
        return this.bc
    }

    isExist() {
        if (this.ac + this.bc <= this.ab) {
            return false
        } else if (this.ab + this.bc <= this.ac) {
            return false
        } else return this.ac + this.ab > this.bc;
    }

    getPerimetre() {
        if (this.isExist()) {
            return this.ac + this.bc + this.ab
        } else {
            return "triangle does not exist"
        }
    }

    getArea() {
        if (this.isExist()) {
            let p = this.getPerimetre() / 2
            return (p*(p - this.ab)*(p - this.ac)*(p - this.bc))**0.5
        } else {
            return "triangle does not exist"
        }
    }

    hasStraightAngle() {
        if (this.isExist()) {
            let eps = 1e-6
            let arr = [this.ac, this.bc, this.ab].sort()
            return Math.abs(arr[0] ** 2 + arr[1]**2 - arr[2]**2) <= eps
        } else {
            return "triangle does not exist"
        }
    }
}

let self = require("./task_2.js")
let tr = new self.Triangle(new gmod.Point(0, 0), new gmod.Point(3, 4) , new gmod.Point(6, 0))

console.log(tr.ab, tr.ac, tr.bc)

