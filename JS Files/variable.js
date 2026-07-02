var a = 10; //var declare
var a = 80; // re-declare
console.log(a);
a = 20;//reinitialize
console.log(a);

//functional scope
function name() {
    var a = 30;
    console.log(a);

}
name();//calling the function

//block scope
if (true) {
    let b = 40;
    b = 50;//re-initialize
    console.log(b);
    const c = 60;
    console.log(c);
}
