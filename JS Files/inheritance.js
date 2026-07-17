class Employee {
  constructor(name, age, skill) {
    this.name = name;
    this.age = age;
    this.skill = skill;
  }

  info() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Skill: ${this.skill}`);
  }

  role(role) {
    console.log(`Role: ${role}`);
  }
}

class Developer extends Employee {
  role(role) {
    console.log(`Role: ${role}`);
    }
    
    work(work) {
        console.log(`Work: ${work}`);
    }
}

class Tester extends Employee {
  role(role) {
    console.log(`Role: ${role}`);
  }

  work(work) {
    console.log(`Work: ${work}`);
  }
}

let d = new Developer("Suganth",21,"JavaScript");
let t = new Tester("John",25,"Selenium");
d.info();
t.info();
d.role("Developer");
t.role("Tester");
d.work("Developer project");
t.work("Tester Project");
