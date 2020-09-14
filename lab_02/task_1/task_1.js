"use strict";
module.exports.Point = class {

    constructor(x, y) {
        this._x = x;
        this._y = y;
    }


    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }


    set x(value) {
        this._x = value;
    }

    set y(value) {
        this._y = value;
    }

    print() {
        return `x: ${this._x}, y: ${this._y}`
    }
}

module.exports.Segment = class {
    constructor(a, b) {
        this._a = a;
        this._b = b;
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

    length (){
        return ((this._a._x - this._b._x)**2 + (this._a._y - this._b._y)**2)**0.5
    }

    print() {
        return `${a.print()} \n${b.print()}`
    }
}

/*
let a = new Point(0, 0)
let b = new Point(5, 5)
let ab = new Segment(a, b)
console.log(ab.print())
*/