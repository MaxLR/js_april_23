class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, email, major, gradeLevel) {
        //the order that we pass in arguments should match the order that the parent class expects them in
        super(firstName, lastName, age, email);
        this.major = major;
        this.gradeLevel = gradeLevel;
    }

    updateFirstName(newName) {
        this.firstName = newName;
        return this;
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, age, email, classesTaught = []) {
        super(firstName, lastName, age, email);
        this.classesTaught = classesTaught;
    }

    fullName() {
        // return "Instructor " + this.firstName + " " + this.lastName;
        return `Instructor ${this.firstName} ${this.lastName}`
    }
}

class Lecture {
    constructor(instructor, topic, zoomLink, studentList = []) {
        this.instructor = instructor;
        this.topic = topic;
        this.zoomLink = zoomLink;
        this.studentList = studentList;
    }

    printAttendance() {
        console.log("Welcome to Instructor: " + this.instructor.fullName() + "'s " + this.topic + " class");

        if(this.studentList.length === 0) {
            console.log("No students yet :'(");
        } else {
            this.studentList.forEach(student => {
                console.log(student.fullName());
            })
        }
    }
}

const person1 = new Person("Jordan", "Nitta-Rodriguez", 25, "jordan@awesomedevs.gov");
const student1 = new Student("Yang", "Cui", 27, "yang@supercooldevs.edu", "Computer Science", "Post-secondary");
const teacher1 = new Teacher("Max", "Rauchman", 32, "max@dojo.com");
const teacher2 = new Teacher("Spencer", "Rauch", 21, "spencer@dojo.com", ["Python", "Web Fund", "Java", "JavaScript"]);
// javascript doesn't care what datatype we pass in for each argument, even if it's one that will break our code later on
// const teacher3 = new Teacher("Some", "Teacher", 9001, "livinglegend@dojo.com", "42");
const myLecture = new Lecture(teacher1, "JavaScript OOP", "somelink.com", [student1, person1, teacher2])

// console.log(person1.firstName + " " + person1.lastName);
console.log(person1.fullName());
console.log(student1.fullName() + " is majoring in: " + student1.major);

// console.log("email: " + student1.email);
// console.log("age " + student1.age);

console.log(student1.updateFirstName("YANG").fullName());

console.log("-------------");
console.log(teacher1.classesTaught.join(", "));
console.log(teacher2.classesTaught.join(", "));
// console.log(teacher3.classesTaught.join(", "));
console.log("-------------");

myLecture.printAttendance();