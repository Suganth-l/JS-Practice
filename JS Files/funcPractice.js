function cube1() {
  let a = 5;
  console.log(`The cube of num is ${a * a * a}`);
}
cube1();

function cube2() {
  let a = 2;
  return a * a * a;
}
console.log(`The cube of num is `, cube2());

function cube3(b) {
    console.log(`The cube of num is ${b*b*b}`);
}
cube3(4);

function cube4(b) {
    return b * b * b;
}
console.log(`The cube of num is `, cube4(3));