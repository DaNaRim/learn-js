'use strict'

const id = 1001
let name = 'Iphone'
let isAvailable = true
let price = 5000
const color = 'Silver'
let storeAddress = null

const product = {
  id: 1001,
  name: 'Iphone',
  isAvailable: true,
  price: 5000,
  color: 'Silver',
  storeAddress: null
}

const productName = product.name
const productPrice = product['price']
console.log(productName)
console.log(productPrice)

product.deliveryOptions = ['New mail', 'Urkmail']
console.log(product)
product['deliveryOptions'] = ['New mail',]
console.log(product)

for (const key in product) {
  console.log(`key is ${key}`)
  console.log(`value is ${product[key]}`)
}
const keys = Object.keys(product)
console.log(keys)

for (const key of keys) {
  console.log(`key is ${key}`)
  console.log(`value is ${product[key]}`)
}

const values = Object.values(product)
console.log(values)

function copyObj (obj) {
  const res = {}
  for (const key in obj) {
    res[key] = obj[key]
  }
  return res
}

const user = {
  id: 1001,
  name: 'Andrey',
  age: 100
}

const copiedObj = copyObj(user)
console.log(copiedObj)
copiedObj.testField = 'test'

console.log(copiedObj)

/*
homework
 */

function getGoalsStat (players) {
  let resultPlayers = []
  for (let player of players) {
    let resultPlayer = {}
    for (let key in player) {
      if (key === 'name' || key === 'goals' || key === 'team') {
        resultPlayer[key] = player[key]
      }
    }
    resultPlayers.push(resultPlayer)
  }
  return resultPlayers
}

const players = [
  {
    name: 'Jason Mount',
    birthdate: '19.12.1993',
    country: 'Deutschland',
    number: '21',
    team: 'Manchester United',
    position: 'MF',
    goals: 4,
  },
  {
    name: 'Jason Mount',
    birthdate: '01.01.2001',
    country: 'Deutschland',
    number: '16',
    team: 'Manchester United',
    position: 'MF',
    goals: 0,
  },
  {
    name: 'Finne Bard',
    birthdate: '13.02.1995',
    country: 'Norwegen',
    number: '26',
    position: 'FW',
    team: 'Fulham United',
    goals: 1,
  },
  {
    name: 'Gerhardt Yannick',
    birthdate: '13.03.1994',
    country: 'Deutschland',
    number: 31,
    position: 'MF',
    team: 'Liverpool',
    goals: 8,
  },
]

console.log(getGoalsStat(players))

function usersCountByCity (users) {
  let result = {}
  for (let user of users) {
    if (Object.keys(result).includes(user.city)) {
      result[`${user.city}`]++
    } else {
      result[`${user.city}`] = 1
    }
  }
  return result
}

const users = [
  {
    id: 888,
    name: 'Denis',
    age: 44,
    city: 'Kyiv',
  },
  {
    id: 333,
    name: 'Alex',
    age: 33,
    city: 'Lviv',
  },
  {
    id: 392,
    name: 'Nastya',
    age: 22,
    city: 'Kyiv',
  },
  {
    id: 123,
    name: 'Violetta',
    age: 15,
    city: 'Odesa',
  },
  {
    id: 640,
    name: 'Mykola',
    age: 31,
    city: 'Lviv',
  },
]

console.log(usersCountByCity(users))

function findUsersByName (users, name) {
  let usersWithName = []
  for (let user of users) {
    if (user.name === name) {
      usersWithName.push(user)
    }
  }
  return usersWithName
}

function findUsersByString (users, str) {
  let usersWithName = []
  for (let user of users) {
    if (user.name.includes(str)) {
      usersWithName.push(user)
    }
  }
  return usersWithName
}

const users2 = [
  {
    id: 101,
    name: 'Denis',
    city: 'Kyiv',
  },
  {
    id: 102,
    name: 'Alexandr',
    city: 'Lviv',
  },
  {
    id: 103,
    name: 'Nastya',
    city: 'Kyiv',
  },
  {
    id: 104,
    name: 'Violetta',
    city: 'Odesa',
  },
  {
    id: 105,
    name: 'Mykola',
    city: 'Lviv',
  },
  {
    id: 106,
    name: 'Denis',
    city: 'Lviv',
  },
  {
    id: 107,
    name: 'Andrey',
    city: 'Odesa',
  },
  {
    id: 108,
    name: 'Alexey',
    city: 'Dnipro',
  },
]

console.log(findUsersByName(users2, 'Denis'))
console.log(findUsersByName(users2, 'Andrey'))
console.log(findUsersByName(users2, 'Anna'))

console.log(findUsersByString(users2, 'Al'))
console.log(findUsersByString(users2, 't'))
console.log(findUsersByString(users2, 'Vik'))

console.log(findUsersByString(users2, 'm'))
