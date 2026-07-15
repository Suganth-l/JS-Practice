class Mentor {
    name = "Ayush";
    age = 25;
    skill = "Java";

    teach() {
        console.log("Mentor teaching");
    }

    groom() {
        console.log("Mentor Grooming");
    }
}
let m = new Mentor();
console.log(`Name: ${m.name}  Age: ${m.age}  Skill: ${m.skill}`);
m.groom();
m.teach();