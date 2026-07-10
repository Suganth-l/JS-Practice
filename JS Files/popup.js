//alert
alert("Welcome Suganth")

//confirm
let res = confirm("Do you want to continue")
if (res) {
    console.log(`User wants to continue`);
} else {
    console.log(`User doesn't want to continue`);
}

//prompt
let name = prompt("Enter your Name: ");
console.log(`Hello ${name}!`);

//Add 2 numbers
let a = Number(prompt("Enter num1: "));
let b = Number(prompt("Enter num2: "));
let sum = a + b;
console.log(sum);