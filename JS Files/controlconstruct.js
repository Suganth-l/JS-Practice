// If Statement - A student is eligible for voting if age ≥ 18.
let age = 25;
if (age >= 18) {
    console.log("The student is eligible to vote");
}

//If-Else Statement - Write a program to check if a number is positive or negative.
let num = 2;
if (num > 0) {
    console.log(`The number is Positive`);
} else {
    console.log(`The number is Negative`);
}

//If-Else Ladder- Check if a number is positive, negative, or zero.
let num1 = -41;
if (num1 > 0) {
    console.log(`The number is positive`);
} else if (num1 < 0) {
    console.log(`The number is negative`);
} else {
    console.log(`The number is zero`);
}

//Nested If - A student passes if marks ≥ 40. If marks ≥ 80, show “Distinction”.
let mark = 85;
if (mark >= 40) {
    if (mark >= 80) {
        console.log(`Distinction`);
    } else {
        console.log(`Pass`);
    }
} else {
    console.log(`Fail`);
}

//Switch Case 1. Print the grade based on letter (A=Excellent, B=Good, C=Average, D=Poor).
let grade = 'A';
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
        break;
    case "D":
    console.log("Poor");
        break;
    default:
        console.log("Fail");
        break;
}

//2. print the season based on months in the year (3,4,5 - summer) (11,12,1,2 - winter) (6,7,8,9 - rainy)


//---------- Looping constructs ---------------------

//For Loop - Print the first 10 natural numbers.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//While Loop - Print numbers from 1 to 5 using while loop.
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

//Do-While Loop: ATM machine: Keep asking PIN until the user
let pin = 1234;
do {
    console.log(`Enter Correct Pin ${pin}`);
} while (pin != 1234);
console.log("Enter pin is correct welcome!");

//For…of Loop - Print all fruits in a basket.

//For…in - Print all student details from an object.

//forEach Loop - Print the squares of all numbers in an array.
let array1 = [1, 2, 4, 6, 8, 9];
array1.forEach(i => console.log(i));

// ------------------ control flow modifiers------------------------

//Break Statement - Question: Stop printing when number reaches 3.
for (let i = 1; i <= 5; i++) {
    if (i == 4) {
        break;
    }
    console.log(i);
}

//Continue Statement -Question: Skip printing number 3.
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  } else {
      console.log(i);
  }
  
}
