let data= "secret information"

class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Website data = ",data);
    }
}

let student1 = new user("Sagnik Metiya","cse22008@cemk.ac.in");
let student2 = new user("Soham Mayur","cse22018@cemk.ac.in");
let student3 = new user("Ranit Manik","cse22034@cemk.ac.in");
let student4 = new user("Anish Kanrar","cse22033@cemk.ac.in");

let teacher1 = new user("Kazi Ashiqur Rahman","kaji123@cemk.ac.in")