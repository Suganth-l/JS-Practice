let person = {
    firstname: 'Suganth',
    lastname : 'L',
    age : 21,
    tech: 'JavaScript',
    fullname : function() {
        return this.firstname + " " + this.lastname;
    }
};
console.log(person["name"]);

console.log(person.age)

for (let p1 in person) {
    console.log(p1 + " : " + person[p1]);
}

console.log(JSON.stringify(person))

console.log(person.fullname())