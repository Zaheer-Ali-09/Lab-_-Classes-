// let std = ["zaheer","mubeen","hassan"];

// for(let std in std){
//     console.log(std[std]);

// }

// samj nhi aya 

// let arr = [10, 30, 30, 10, 40, 454, 56, 243, 55, 45, 45];

// let total = 0;

// for (let nums of arr) {
//     total += nums;
// }
// console.log(total);

// let std1 = "Zaheer  Ali".includes("Ahmed");

// console.log(std1);


// let std2 = "Zaheer  Ali".includes("Ali");

// console.log(std2);

// ---------------

// let msg = "Hello my is name Zaheer Ali. I am a Web Developer.";
// let vowels = "aeiouAEIOU";
// let count = 0;
// for (const vowelsLatter of msg) {
//     if (vowels.includes(vowelsLatter)) {
//         count++
//     }
// }
// console.log(count);

// ---------------

// let food = ["Burger", "Pizza", "Broast", "Mandi"];

// for (let foods of food) {
//     console.log(`I love ${foods}`);
// }
// 
// let food = ["Burger", "Pizza", "Broast", "Mandi"];
//  for(let i = food.length - 1 ; i >= 0; i--){
//         console.log(`I love ${food[i]}`);
//     }
// for (let foods of food) {
//     for(let i = food.length - 1 ; i >= 0; i--){
//         console.log(`I love ${foods[i]}`);
//     }
// }

// 

// let obj = {
//     stdName : "Zaheer Ali",
//     roolNo : 390102,
// }

// for(let item in obj){
//     console.log(`${item} : ${obj[item]}`);

// }

// let obj = {
//     stdName : "Zaheer Ali",
//     roolNo : 390102,
// }
// for (let [keys,values] of Object.entries(obj)){
//     console.log(`${keys} : ${values}`);
// }
// -----
// let marks = {
//     English: 125,
//     Maths: 211,
//     Physics: 189
// }
// let total = 0;
// for (let result in marks) {
//     total += marks[result]
// }
// console.log(`Your Total Marks are  ${total}`);


// let inventory = {
//     apples: 8,
//     banana: 13,
//     kiwi: 15,
// }

// for (let result in inventory) {

//     console.log(`There are  Apple ${inventory[result]} : ${result}  Left`);

// }

// ----
// let human = {
//     fullName: "Zaheer Ali",
//     rollNo: 390102,
//     isDisabled: true
// }

// let result = [];

// for (let std in human) {
//     result.push(human[result]);

// }
// console.log(result);


// let human = new Map([
//     ["FullName", "Zaheer Ali"],
//     ["RollNo", 390102],
//     ["isDisabled", false],
// ]);

// console.log(human);



// Practice __________________________________________________________________>
// For in Loop

let student = {
    name: "Zaheer",
    age: 20,
    course: "Web Development"
};

console.log(student);

for (let key in student) {
    console.log(key, "=", student[key]);
}

// 
let fruits = ["Apple", "Banana", "Kiwi"];

for (let fruit of fruits) {
    console.log(fruit);
}

// 

let fruits2 = new Set(["Apple", "Banana", "Apple"]); // duplicate "Apple" remove ho jayega

console.log(fruits2.has("Banana")); // true
fruits2.add("Orange");              // new item add
fruits2.delete("Banana");           // item remove
console.log(fruits2.size);          // total unique items

// ________________________________________________________>

let human = new Map([
    ["fullName", "Zaheer Ahmed"],
    ["rollNo", 123456],
    ["isDisabled", false]
]);

console.log(human);
console.log(human.get("fullName")); // value nikalna
console.log(human.size);            // total entries
