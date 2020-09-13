let masOfChildren = []

let vowel = new Set("eyuoaEYUOA")
/*
vowel.add("e")
vowel.add("u")
vowel.add("y")
vowel.add("o")
vowel.add("a")
 */

function addChild(childMas, newChild) {
    if ((newChild["surname"] === undefined) || (newChild["age"] === undefined))  {
        return
    } else if ((typeof(newChild["age"]) !== "number") || (typeof(newChild["surname"]) !== "string")){
        return
    } else {
        for (let i = 0; i < childMas.length; i++) {
            let obj = childMas[i]
            if (newChild["surname"] === obj["surname"]) {
                return
            }
        }
        childMas.push(newChild)
    }
}

function editAgeBySurname(childMas = masOfChildren, surname, newage) {
    for (let i = 0; i < childMas.length; i++) {
        let child = childMas[i]
        if (child["surname"] === surname){
            childMas[i] = {surname: surname, age: newage}
            return
        }
    }
}

function readChildren(childMas = masOfChildren) {
    console.log("We have:")
    for (let i = 0; i < childMas.length; i++) {
        logChildByIndex(childMas, i)
    }
}

function deleteChild(childMas = masOfChildren, surname) {
    for (let i = 0; i < childMas.length; i++) {
        let child = childMas[i]
        if (child["surname"] === surname) {
            childMas.splice(i, 1)
            return
        }
    }
}

function logChildByIndex(childMas = masOfChildren, index) {
    let obj = childMas[index]
    console.log(obj["surname"] + ": " + obj["age"])
    return obj["surname"] + ": (" + obj["age"]
}

function logOldestChild(childMas = masOfChildren) {
    let max = childMas[0]
    for (let i = 0; i < childMas.length; i++) {
        let child = childMas[i]
        if (child["age"] > max["age"]) {
            max = child
        }
    }
    console.log(max["surname"] + ": " + max["age"])
}

function logChildGroupByAge(childMas = masOfChildren, from, to) {
    for (let i = 0; i < childMas.length; i++) {
        let child = childMas[i]
        if (from <= child["age"] && child["age"] <= to) {
            logChildByIndex(childMas, i)
        }
    }
}

function logChildGroupByFirstSurnameLetter(childMas = masOfChildren, letter) {
    for (let i = 0; i < childMas.length; i++) {
        let child = childMas[i]
        if (child["surname"][0] === letter) {
            logChildByIndex(childMas, i)
        }
    }
}

function logChildGroupBySurnameSize(childMas = masOfChildren, size) {
    for (let i = 0; i < childMas.length; i++) {
        let child = childMas[i]
        if (child["surname"].length >= size) {
            logChildByIndex(childMas, i)
        }
    }
}

function logChildGroupBySurnameVowel(childMas = masOfChildren) {
    for (let i = 0; i < childMas.length; i++) {
        let child = childMas[i]
        if (vowel.has(child["surname"][0])) {
            logChildByIndex(childMas, i)
        }
    }
}
