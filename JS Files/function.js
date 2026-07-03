function sum() {
  let a = 10;
  let b = 5;
  let c = a + b;
  console.log(`The sum of ${a} and ${b} is ${c}`);
}
sum();

function square() {
  let a = 10;
  let b = a * a;
  console.log(`The square of ${a} is ${b}`);
}
square();

function largest() {
  let a = 10;
  let b = 20;
  let c = 15;
  let largest = 0;
  if (a > b) {
    largest = a;
  } else {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }
  console.log(`The Largest number is ${largest}`);
}
largest();

function greet() {
  let username = "Rahul";
  console.log(`Welcome ${username}, Good Morning!`);
}
greet();

