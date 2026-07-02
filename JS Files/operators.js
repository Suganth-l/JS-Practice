let a = 10;
let b = 5;
document.writeln("<br>");
document.writeln(" Arithemetic Operators");
document.writeln(a + b);
document.writeln("<br>");
document.writeln(a ** b); //a power b
document.writeln("<br>");
document.writeln(a % b);
document.writeln("<br>");
let x = 7;
document.writeln(x++); ///7
document.writeln("<br>");
document.writeln(x); //8
document.writeln("<br>");
document.writeln("<br>");

document.writeln("Assigment Operators");
let c = 10;
document.writeln("<br>");
document.writeln((c += 3));
document.writeln("<br>");
document.writeln((c -= 5));
document.writeln("<br>");
document.writeln((c *= 3));
document.writeln("<br>");
document.writeln((c /= 2));
document.writeln("<br>");
document.writeln((c %= 5));
document.writeln("<br>");
document.writeln("<br>");

//Comparision Operator
let f = 5;
let g = "5";
let h = "3";
document.writeln("Comparision Operator");
document.writeln("<br>");
document.writeln(f == g); //true
document.writeln("<br>");
document.writeln(f === g); //false compares both value and datatypes
document.writeln("<br>");
document.writeln(f != h); // true
document.writeln("<br>");
document.writeln(f !== g); //true
document.writeln("<br>");
document.writeln("<br>");

//logical Operator
let j = 8;
document.writeln("Logical Operator");
document.writeln("<br>");
document.writeln(j > 18 && j < 30); //false
document.writeln(j > 18 || j < 30); //true
document.writeln("<br>");
document.writeln(2 & 4); //0
document.writeln(2 | 4) //6
document.writeln("<br>");
document.writeln("<br>");

//Ternary Operator
let num = 1;
document.writeln("Ternary Operator");
document.writeln("<br>");
let result = (num % 2 == 0) ? "Even" : "Odd";
document.writeln(result);
document.writeln("<br>");
document.writeln("<br>");


//typeOf, instanceOf

let q = "3";
document.writeln(typeof (q)); //String
document.writeln([1,2,3] instanceof Array) //True


