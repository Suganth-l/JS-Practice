var a = 10;
function outer() {
    var b = 20;
    function inner() {
        var c = 30;
        if (true) {
            console.log(a);
            console.log(b);
            console.log(c);
        }
    }
    inner();
}
outer();

// let message = "Original Message";

// function inner() {
//     message = "Updated Message";
// }

// console.log(message);
// inner();
// console.log(message);