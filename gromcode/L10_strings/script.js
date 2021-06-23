function sayWelcome (userName, currentDay) {
  console.log(`Hello, ${userName}! Have a good ${currentDay}!`)
}

const firstName = 'Alexandr'
const space = ' '
const lastName = 'Ivanov'

console.log(firstName[0])
console.log(firstName[firstName.length - 1])

console.log(firstName.includes('exa'))
console.log(firstName.includes('exw'))

console.log(firstName.split('a'))

console.log(firstName.concat(space).concat(lastName))

console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())

console.log(firstName.slice(5, 9))

function isLetter (c) {
  return c.toUpperCase() !== c.toLowerCase()
}

function isValidWord (str) {
  for (let i of str) {
    if (!isLetter(i)) return false
  }
  return true
}

console.log(isValidWord('ABCDE'))
console.log(isValidWord('ABCDE@'))

/*
homework
 */

const getMessage = (userName, email, tasksCount) => {
  return `Hello again, ${userName}. Your email is ${email}. You have ${tasksCount} tasks for today`
}

function isValidWord2 (str) {
  if (str.length < 2) return false

  for (let i of str) {
    if (!isLetter(i)) return false
  }
  return true
}

function capitalize (str) {
  return str[0].toUpperCase().concat(str.substr(1, str.length))
}

console.log(capitalize('cake'))
console.log(capitalize('Monday'))
console.log(capitalize('hello, it is me'))

function getAbbreviation (str) {
  let abbreviation = ''
  for (let s of str.split(' ')) {
    if (s.length > 2) {
      abbreviation = abbreviation.concat(s[0].toUpperCase())
    }
  }
  return abbreviation
}

console.log(getAbbreviation('some company name'))
console.log(getAbbreviation('Union of Soviet Socialist Republics'))
console.log(getAbbreviation('United States'))

function camelCase (str) {
  let pascalStr = ''
  for (let s of str.split(' ')) {
    pascalStr = pascalStr.concat(s[0].toUpperCase().concat(s.substr(1, s.length)))
  }
  return pascalStr[0].toLowerCase().concat(pascalStr.substr(1, pascalStr.length)) //Now it`s camel case
}

console.log(camelCase('some function name'))
console.log(camelCase('get message'))
console.log(camelCase('render tasks list'))
