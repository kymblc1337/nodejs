let masOfStudents = []

function logStudentAsObject(studentObject) {
    console.log("group: " + studentObject["groupNum"] + " record book number: " +
        studentObject["recordBookNum"] + " marks: " + studentObject["marks"])
}

function addStudent(studentMas, newStudent) {
    if ((newStudent["groupNum"] === undefined) || (newStudent["recordBookNum"] === undefined)
        || (newStudent["marks"] === undefined))  {
        return
    } else {
        for (let i = 0; i < studentMas.length; i++) {
            let obj = studentMas[i]
            if (newStudent["recordBookNum"] === obj["recordBookNum"]) {
                return
            }
        }
        studentMas.push(newStudent)
    }
}

function editGroupByRecordBook(studentMas = masOfStudents, recordBookNum, newGroup) {
    for (let i = 0; i < studentMas.length; i++) {
        let student = studentMas[i]
        if (student["recordBookNum"] === recordBookNum){
            studentMas[i]["groupNum"] = newGroup
            return
        }
    }
}

function editMarksByRecordBook(studentMas = masOfStudents, recordBookNum, newMarks) {
    for (let i = 0; i < studentMas.length; i++) {
        let student = studentMas[i]
        if (student["recordBookNum"] === recordBookNum){
            studentMas[i]["marks"] = newMarks
            return
        }
    }
}

function readStudents(studentMas = masOfStudents) {
    console.log("We have:")
    for (let i = 0; i < studentMas.length; i++) {
        logStudentById(studentMas, i)
    }
}

function deleteStudent(studentMas = masOfStudents, recordBookNum) {
    for (let i = 0; i < studentMas.length; i++) {
        let student = studentMas[i]
        if (student["recordBookNum"] === recordBookNum) {
            studentMas.splice(i, 1)
            return
        }
    }
}

function logStudentById(studentMas = masOfStudents, index) {
    let obj = studentMas[index]
    console.log("group: " + obj["groupNum"] + " record book number: " +
        obj["recordBookNum"] + " marks: " + obj["marks"])
    return "group: " + obj["groupNum"] + " record book number: " +
        obj["recordBookNum"] + " marks: " + obj["marks"]
}

function getAvgMarkOfStudentById(studentMas = masOfStudents, id) {
    if (studentMas.length === 0) {
        return 0
    } else {
        let student = studentMas[id]
        let avg = 0
        for (let i = 0; i < student["marks"].length; i++) {
            avg += student["marks"][i]
        }
        avg /= student["marks"].length
        return avg
    }
}

function getAvgMarkOfStudentByRecordBook(studentMas = masOfStudents, recordBookNum) {
    for (let i = 0; i < studentMas.length; i++) {
        let student = studentMas[i]
        if (student["recordBookNum"] === recordBookNum){
            console.log(getAvgMarkOfStudentById(studentMas, i))
            return
        }
    }
}

function getStudentsGroupByGroup(studentMas = masOfStudents, groupNum, needLog) {
    let result = []
    for (let i = 0; i < studentMas.length; i++) {
        let student = studentMas[i]
        if (student["groupNum"] === groupNum) {
            result.push(studentMas[i])
            if (needLog === true) {
                logStudentById(studentMas, i)
            }
        }
    }
    return result
}

function logStudentMaxMarksGroupByGroup(studentMas = masOfStudents, groupNum) {
    let students = getStudentsGroupByGroup(studentMas, groupNum, false)
    let max = students[0]
    for (let i = 0; i < students.length; i++) {
        let curStudent = students[i]
        if (curStudent["marks"].length > max["marks"].length) {
            max = curStudent
        }
    }
    logStudentAsObject(max)
}

function logStudentWithNoMarks(studentMas = masOfStudents) {
    for (let i = 0; i < studentMas.length; i++) {
        let curStudent = studentMas[i]
        if (curStudent["marks"].length === 0) {
            logStudentById(studentMas, i)
        }
    }
}



addStudent(masOfStudents, {groupNum: 1, recordBookNum: 1, marks: [4, 3, 5, 5]})
addStudent(masOfStudents, {groupNum: 2, recordBookNum: 2, marks: [4, 3, 3]})
addStudent(masOfStudents, {groupNum: 3, recordBookNum: 3, marks: [4, 5, 5]})
addStudent(masOfStudents, {groupNum: 1, recordBookNum: 4, marks: [5, 5, 5, 5, 5, 7]})
addStudent(masOfStudents, {groupNum: 1, recordBookNum: 5, marks: []})

logStudentWithNoMarks()
logStudentMaxMarksGroupByGroup(masOfStudents, 2)
getAvgMarkOfStudentByRecordBook(masOfStudents, 2)
editGroupByRecordBook(masOfStudents, 4, 100)
editMarksByRecordBook(masOfStudents, 5, [2, 3, 2])
deleteStudent(masOfStudents, 3)
readStudents()