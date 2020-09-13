"use strict";

const addPointResponse = {
    WRONGINFO: "wrong info",
    ALREADYEXIST: "already exist",
    POINTADDED: "point added"
}

const editRespsonse = {
    OK: "edited",
    NOPOINT: "no such point"
}

const direct = {
    UP: "up",
    DOWN: "down",
    LEFT: "left",
    RIGHT: "right"
}

exports.direct = direct
exports.addPointResponse = addPointResponse
exports.editResponse = editRespsonse

let masOfPoints = []

function getDistance(a, b) {
    return ((a["x"] - b["x"]) ** 2 + (a["y"] - b["y"]) ** 2) ** 0.5
}

exports.addPoint = function(pointMas, newPoint) {
    if ((newPoint["x"] === undefined) || (newPoint["y"] === undefined) || (newPoint["name"] === undefined))  {
        //console.log("С вашей точкой что-то не так")
        return addPointResponse.WRONGINFO
    } else if ((typeof(newPoint["x"]) !== "number") || (typeof(newPoint["y"]) !== "number") || (typeof(newPoint["name"]) !== "string")){
        return addPointResponse.WRONGINFO
    } else {
        for (let i = 0; i < pointMas.length; i++) {
            let obj = pointMas[i]
            if (newPoint["name"] === obj["name"]) {
                //console.log("Точка с таким именем уже есть")
                return addPointResponse.ALREADYEXIST
            }
        }
        pointMas.push(newPoint)
        return addPointResponse.POINTADDED
    }
}

exports.editCoordinatesByName = function(pointMas = masOfPoints, name, newx, newy) {
    for (let i = 0; i < pointMas.length; i++) {
        let curpoint = pointMas[i]
        if (curpoint["name"] === name){
            pointMas[i] = {name: name, x: newx, y:newy}
            return editRespsonse.OK
        }
    }
    return editRespsonse.NOPOINT
}

function readPoints(pointMas = masOfPoints) {
    console.log("We have:")
    for (let i = 0; i < pointMas.length; i++) {
        logPointByIndex(pointMas, i)
    }
}

function deletePoint(pointMas = masOfPoints, pointName) {
    for (let i = 0; i < pointMas.length; i++) {
        let point = pointMas[i]
        if (point["name"] === pointName) {
            pointMas.splice(i, 1)
            return
        }
    }
}

function logPointByIndex(pointMas = masOfPoints, index) {
    let obj = pointMas[index]
    console.log(obj["name"] + ": (" + obj["x"] + ";" + obj["y"] + ")")
    return obj["name"] + ": (" + obj["x"] + ";" + obj["y"] + ")" + '\n'
}

exports.maxDistance = function(pointMas = masOfPoints) {
    let response = ""
    let max = {dist: 0, a : undefined, b : undefined}
    for (let i = 0; i < pointMas.length; i++) {
        let a = pointMas[i]
        for (let j = i + 1; j < pointMas.length; j++) {
            let b = pointMas[j]
            let tmp = getDistance(a, b)
            if (tmp > max["dist"]){
                max = {dist: tmp, a : i, b : j}
            }
        }
    }
    response += logPointByIndex(pointMas, max["a"])
    response += logPointByIndex(pointMas, max["b"])
    return response
}

exports.noMoreDistance = function(pointMas = masOfPoints, limit, point) {
    let response = ""
    for (let i = 0; i < pointMas.length; i++) {
        if (getDistance(pointMas[i], point) <= limit) {
            response += logPointByIndex(pointMas, i)
        }
    }
    return response
}

exports.directPoints = function(pointMas, x, y, direction) {
    let response = ""
    for (let i = 0; i < pointMas.length; i++) {
        let currentPoint = pointMas[i]
        if (direction === direct.UP && currentPoint["y"] > y) {
            response += logPointByIndex(pointMas, i)
        } else if (direction === direct.DOWN && currentPoint["y"] < y) {
            response += logPointByIndex(pointMas, i)
        } else if (direction === direct.LEFT && currentPoint["x"] < x) {
            response += logPointByIndex(pointMas, i)
        } else if (direction === direct.RIGHT && currentPoint["x"] > x) {
            response += logPointByIndex(pointMas, i)
        }
    }
    return response
}

exports.insideReqt = function(pointMas, leftUp, rightDown) {
    let response = ""
    for (let i = 0; i < pointMas.length; i++) {
        let currentPoint = pointMas[i]
        if (currentPoint["x"] >= leftUp["x"] && currentPoint["x"] <= rightDown["x"]
            && currentPoint["y"] >= rightDown["y"] && currentPoint["y"] <= leftUp["y"]) {
            response += logPointByIndex(pointMas, i)
        }
    }
    return response
}

let test = require('./task_3')


test.addPoint(masOfPoints, {name: "A", x: 12, y: 5})
test.addPoint(masOfPoints, {name: "B", x : -4, y : 0})
test.addPoint(masOfPoints, {name: "C", x : 4, y : 1})
test.addPoint(masOfPoints, {name: "D", x : -2, y : 1})
test.addPoint(masOfPoints, {name: "E", x : 0, y : 0})
test.addPoint(masOfPoints, {name: "F", x : -4, y : 3})
test.addPoint(masOfPoints, {name: "J", x : -4, y : -3})
test.addPoint(masOfPoints, {name: "H", x : 3, y : -5})
