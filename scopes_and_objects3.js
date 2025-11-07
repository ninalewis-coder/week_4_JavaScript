// TODO: Create a global variable called globalCount
var globalCount = 10;

// TODO: Create a function that demonstrates local scope
function localScope() {
    let localCount = 5;
   console.log("Local scope demonstration: " + localCount)
}
localScope()

// TODO: Create a function that tries to modify both variables
function modifyCounts() {
    globalCount += 2;
    let localCount = 6;
    console.log("Modified globalCount: " + globalCount)
    console.log("Modified localCount: " + localCount)
}
modifyCounts()

// TODO: Create a Student constructor function
function Student(first, last, grade){
    this.firstName = first;
    this.lastName = last;
    this.termGrade = grade;
}

// TODO: Create several student instances
let student1 = new Student ("Nina", "Lewis", "B")
let student2 = new Student ("Zahraa", "Thompson", "A")
let student3 = new Student ("Yaqoob", "Samsodien", "F")
let student4 = new Student ("Mische", "Fernandez", "B")

// TODO: Create an object literal with nested properties
let classroom = {
    class: "Class 1",
    teacher: {
        name: "Matthew",
        surname: "Brown",
        subject: "JavaScript"
    },
    students: [student1, student2, student3, student4],
    schedule: {
        day: "Friday",
        date: "07 November 2025",
        time: "11:30 AM"
    }
}
console.log("Classroom: ", classroom)