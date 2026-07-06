//declaring function

//function declaration
function square() {
  let num = 10;
  console.log(num * num);
}
square();

//function Expression
let square2 = function (num) {
  console.log(`The square of ${num} is ${num * num}`);
};
square2(5);

//Arrow function
let square3 = (num) => console.log(num * num);
square3(3);

//Anonymous Function
(function () {
  console.log(`Thank You`);
})();

function largest(a, b, c) {
  if (a > b && a > c) {
    console.log(`The largest number is ${a}`);
  }
  if (b > a && b > c) {
    console.log(`The largest number is ${b}`);
  } else {
    console.log(`The largest number is ${c}`);
  }
}

const largest2 = function (a, b, c) {
  if (a > b && a > c) {
    console.log(`The largest number is ${a}`);
  }
  if (b > a && b > c) {
    console.log(`The largest number is ${b}`);
  } else {
    console.log(`The largest number is ${c}`);
  }
};

const largest3 = (a, b, c) => {
  if (a > b && a > c) {
    console.log(`The largest number is ${a}`);
  }
  if (b > a && b > c) {
    console.log(`The largest number is ${b}`);
  } else {
    console.log(`The largest number is ${c}`);
  }
};

largest(3, 5, 2);
largest2(3, 9, 6);
largest3(7, 9, 12);

(function () {
    let a = 2;
    let b = 9;
    let c = 71;
   if (a > b && a > c) {
    console.log(`The largest number is ${a}`);
  }
  if (b > a && b > c) {
    console.log(`The largest number is ${b}`);
  } else {
    console.log(`The largest number is ${c}`);
  }
}) ();


//spread Operator
const sum = function (...numbers) {
    let count = 0;
    for (let num of numbers) {
        count = count + num;
    }
    console.log(count);
}

sum(2, 7, 3);
sum(2, 5);
