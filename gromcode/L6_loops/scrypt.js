function printNumbers (num) {
  for (let i = 0; i <= num; i++) {
    console.log(i)
  }

  let j = 0
  while (j <= num) {
    console.log(j)
    j++
  }

  do {
    console.log(num)
  } while (j < num)
}

printNumbers(3)

/*
homework
 */

function sumOfMillions () {
  let sum = 0
  for (let i = 0; i <= 10_000_000; i++) sum += i
  return sum
}

console.log(sumOfMillions())

function factorial (num) {
  let result = 1
  for (let i = 1; i <= num; i++) result *= i
  return result
}

console.log(factorial(4))

function sum (from, to) {
  let result = 0
  for (let i = from; i <= to; i++) result += i
  return result
}

function compareSums (firstFrom, firstTo, secondFrom, secondTo) {
  return sum(firstFrom, firstTo) > sum(secondFrom, secondTo)
}

function sendEmail () {
  console.log('Gromcode party invitation was sent!')
}

function sendEmailList () {
  for (let i = 0; i < 30; i++) sendEmail()
}