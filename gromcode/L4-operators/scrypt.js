let income = 1000;
let rent = 40;
let otherExpenses = 100;
let freelanceIncome = 200;

let balance = income - rent - otherExpenses;
console.log(balance);

income = income + freelanceIncome;
console.log(income);

otherExpenses = otherExpenses * 3;
console.log(otherExpenses);

income = income / 2;
console.log(income);


const name = 'Andrey';
const currentDay = 'Monday';
const welcomeMessage = 'Hello, ' + name + '! It is ' + currentDay + '!';
console.log(welcomeMessage);


income += freelanceIncome;
console.log(income);

otherExpenses *= 3;
console.log(otherExpenses);

income /= 3;
console.log(income);

let studentsCount = 10;
console.log(studentsCount++);
console.log(studentsCount);
console.log(++studentsCount);


const id = 1001;
let productName = 'Iphone';
let isAvailable = true;
let price = 20000;
const color = 'Silver';
let storeAddress = null;

// const canBuyProduct = balance >= price;
console.log(balance >= price);

console.log(isAvailable);

const isSilver = color == 'Silver';
console.log(isSilver);

console.log(color === 'Silver');


const canBuyProduct = balance >= price;

if (canBuyProduct) {
    console.log('You have enough money to buy ' + productName);
} else {
    console.log('You don`t have enough money to buy ' + productName);
}

if (isAvailable) {
    console.log('Product ' + productName + ' is available now');
}


console.log(isAvailable && balance >= price);

console.log(isAvailable || price < 10_000);

console.log(!price < 10_000);


/*
homework
 */

storeAddress = 'Kyiv, Melnichenka st';

console.log(isAvailable && balance >= price);

if (isAvailable && storeAddress === 'Kyiv, Melnichenka st') {
    console.log('You can buy this product in the store');
}

if (isAvailable && color === 'Silver') {
    console.log('You have enough money to buy product in silver color');
}

if (isAvailable && balance - price >= 1000) {
    console.log('You have enough money to buy this product');
}


console.log(studentsCount += 10);
console.log(studentsCount -= 4);
console.log(studentsCount *= 2);
console.log(studentsCount /= 5);


console.log(freelanceIncome *= 2);
console.log(balance += freelanceIncome);
console.log(balance /= 2);