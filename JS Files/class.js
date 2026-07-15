class Mentor {
    constructor(name, age, tech) {
        this.name = name;
        this.age = age;
        this.tech = tech;
    }

    teach() {
        console.log("Mentor teaching");
    }

    groom() {
        console.log("Mentor Grooming");
    }
}
let m = new Mentor("Suganth", 21, "Javascript");
console.log(`Name: ${m.name}  Age: ${m.age}  Tech: ${m.tech}`);
m.groom();
m.teach();