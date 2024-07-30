/*Objects*/
const student = {
    fullName: "Sagnik Metiya",
    marks: 94.4,
    printMarks: function () {
        console.log("Marks= ", this.marks);
    },
};
const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    },
}
const Luffy = {
    salary: 30000,
    calcTax() {
        console.log("Tax rate is 10%");
    },
}
Luffy.__proto__ = employee; //Set Prototype

/*Classes*/
class Hyundai {
    constructor(Brand, Mileage) {
        this.Brand = Brand;
        this.Mileage = Mileage;
    }
    start() {
        console.log("Start");
    }
    stop() {
        console.log("Stop");
    }
}
let i20 = new Hyundai("i20", 10);
let i10 = new Hyundai("i20", 15);
console.log(i20);
console.log(i10);

/*Inheritance*/
class Parent {
    hello() {
        console.log("Hello World!");
    }
}
class Child extends Parent {

}
let obj = new Child();

class Person {
    constructor(Name) {
        this.species = "Homo Sapiens";
        this.Name = Name;
        
    }
    eat() {
        console.log("Eat");
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("Do nothing!");
    }
}
class Engineer extends Person {
    constructor(Branch, Name){
        super(Name);
        this.Branch = Branch;
    }
    work() {
        super.eat();
        console.log("Solve problem, build something");
    }
}
let Akash = new Engineer("Computer Science Engineer","Sagnik Metiya");
class Doctor extends Person {
    treatPatient() {
        console.log("Treat Patients");
    }
}
let Sagnik = new Doctor();
