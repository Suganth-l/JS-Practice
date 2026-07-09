//Arrays in JS -> arrays are heterogenous which we can store multiple different datatypes in array
let arr = [101, "Abhi", "ECE", 250, true];
console.log(arr[3]);

let arr1 = new Array("Sugan", "Abhi", "Rohan");
arr1.push("Siva");
console.log(arr1);
arr1.unshift("Ravi");
console.log(arr1);
console.log(arr1.pop());

//splice
let arr2 = ["Red", "Blue", "Green", "Yellow", "White"];
arr2.splice(2, 3, "Black");
console.log(arr2);

//slice -- like a subarray
let price = [100, 200, 300, 400, 500, 600, 700]; 
console.log(price.slice(2, 5));

//indexOf and includes
console.log(price.indexOf(300));
console.log(price.includes(200));

//sort and reverse
let store = [688, 32, 43, 65, 67];
console.log(store.sort());
console.log(store.reverse());

//foreach 
store.forEach(st => console.log(st));

//map and filter
let nums = [2, 4, 6, 8];
console.log(`The map is ${nums.map(num => num * num)}`);
console.log(`The filter - ${nums.filter(num => num % 2 == 0)}`);

//Reduce
console.log(`The reduce - ${nums.reduce((acc, num) => acc + num, 0)}`);

// concat and join
let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b));

let words = ["Hello", "World"];
console.log(words.join("-"));

//destructing
let [first, second] = words;
console.log(first);
console.log(second);
