function student(firstname, lastname, rollno, courses) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.rollno = rollno;
    this.courses = courses;
    this.students = function () {
        document.write(`<h3>${this.firstname} 
                        ${this.lastname}
                        ${this.rollno} 
                        ${this.courses} 
                        <br> 
                        <br><h3 />`);
        console.log(`   ${this.firstname} ${this.lastname} ${this.rollno} ${this.courses} `);
    }
}

var student1 = new student(
    "muhammad",
    "rafiq",
    "1543",
    "Angular,Typescript");
var student2 = new student(
    "muhammad",
    "areeb",
    "1544",
    "Reactjs,Typescript");
var student3 = new student(
    "muhammad",
    "haseeb",
    "1545",
    "MongoDB, ReactJs");
var student4 = new student(
    "muhammad",
    "sohaib",
    "1546",
    "C,C++, CSS");

student1.students();
student2.students();
student3.students();
student4.students();