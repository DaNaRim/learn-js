/*
function sayWelcome () {
  console.log(`Hello, user! Have a good day!`)
}

function getWelcomeMessage (userName, currentDay) {
  return `Hello, ${userName}! Have a good ${currentDay}!`
}
 */

function sayWelcome (userName, currentDay) {
  let message = `Hello, ${userName}! Have a good ${currentDay}!`
  console.log(message)
  return message
}

sayWelcome('Andrey', 'Monday')

const personName = 'Denis'
const day = 'Monday'
sayWelcome(personName, day)

const result = sayWelcome(personName, day)
console.log(result)

console.log(sayWelcome(personName, day))

sayWelcome()

const lunchPrice = 100
const haircutPrice = 40

console.log(min(lunchPrice, haircutPrice))

function min (first, second) {
  return first < second ? first : second
}

/*
function min (first, second) {
  if (first < second) {
    return first
  } else {
    return second
  }
}
*/

console.log(min(30, 50))

const min2 = function (first, second) {
  return first < second ? first : second
}
console.log(min2(30, 50))

const min3 = (first, second) => {
  return first < second ? first : second
}
console.log(min3(30, 50))

const multiply = (num) => num * 10
console.log(multiply(30))

/*
homework
 */

function countArea (chickens, caws, pigs) {
  return chickens * 0.2 + caws * 1.5 + pigs * 0.5
}

const countAreaArrow = (chickens, caws, pigs) => chickens * 0.2 + caws * 1.5 + pigs * 0.5

function countCommission (amount, currency) {
  if (currency === 'UAH') return amount * (amount < 1000 ? 0.02 : 0.01)
  else if (currency === 'USD') return amount * (amount < 5000 ? 0.005 : 0.0025)
  else if (currency === 'EUR') return amount * (amount < 3000 ? 0.0075 : 0)
}

countCommission(20_000, 'USD')
countCommission(500, 'UAH')
countCommission(2000, 'UAH')