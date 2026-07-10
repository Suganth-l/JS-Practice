let nums = [2, 3, 4, 5, 1];
let multiple = nums.reduce((multi, num) => multi * num, 1);
console.log(multiple);

console.log(nums.map(n => n * 3));

console.log(nums.filter(n => n % 2 == 1));