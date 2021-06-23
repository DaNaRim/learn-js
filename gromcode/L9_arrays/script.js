const students = [
  'Andrey',
  'Denis',
  'Alex',
  'Nastya',
  'Ninja',
  'Skywoker',
  'Joda',
  'Leo'
]

const thirdEl = students[2]
console.log(students[2])
console.log(students[5])
console.log(students[0])
console.log(students[students.length - 1])
console.log(students.length)

function printArray (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

printArray(students)

function printArray2 (arr) {
  for (let el of arr) {
    console.log(el)
  }
}

printArray2(students)

const arr = [1, 2, 3, 4, 5]

//add el
console.log(arr.push(111)) // return arr length
console.log(arr)

//update el
console.log(arr[2] = 19) // return updated el
console.log(arr)

// delete last el
console.log(arr.pop()) // return deleted el
console.log(arr)

// delete first el
console.log(arr.shift()) // return deleted el
console.log(arr)

console.log(arr.unshift(22)) // return arr length
console.log(arr)

console.log(arr.includes(50)) // return bool
console.log(arr.includes('50')) //===
console.log(arr)

const points = [44, 41, 40, 35, 30, 10, 7]

function addPoints (points, homeTeam, awayTeam, result) {
  let copyPoints = points.slice()

  if (result === 'win') {
    copyPoints[homeTeam - 1] += 3
  } else if (result === 'lose') {
    copyPoints[awayTeam - 1] += 3
  } else {
    copyPoints[homeTeam - 1] += 1
    copyPoints[awayTeam - 1] += 1
  }
  return copyPoints
}

const res = addPoints(points, 3, 6, 'lose')

console.log(res)
console.log(points)

/*
homework
 */

const arr2 = [1, 2, 3, 4, 5]
console.log(arr2.push(111))
console.log(arr2)

const students2 = ['Alex', 'Ann', 'Jaz', 'Viktor']
console.log(students.pop())
console.log(students)

const points2 = [11, 24, 37, 40, 7]
console.log(points.shift())
console.log(points)

const ages = [18, 25, 31, 29, 50, 11, 1000000]
console.log(ages.unshift(22))
console.log(ages)

const numbers = [5, 0, 8, 10, -4, 50, 220]
console.log(numbers.includes(0))
console.log(numbers.includes(100))

function sendEmail (userName) {
  console.log('Gromcode party invitation was sent to ' + userName + '!')
}

function sendEmailList (userNames) {
  for (let el of userNames) {
    sendEmail(el)
  }
}

function getRevenue (sales) {
  let sum = 0
  for (let i of sales) sum += i
  return sum
}

function checkRevenue (sales, plannedRevenue) {
  return getRevenue(sales) >= plannedRevenue
}

getRevenue([25, 40, 10, 58])
checkRevenue([25, 40, 10, 58], 100)

function reverseArray (arr) {
  let copyArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    copyArr.push(arr[i])
  }
  return copyArr
}

console.log(reverseArray([11, 4, 8, 3]))
console.log(reverseArray([]))
console.log(reverseArray([100, 50]))

const getSubArray = (arr, numberOfElements) => {
  let copyArr = []
  for (let i = 0; i < numberOfElements; i++) {
    copyArr.push(arr[i])
  }
  return copyArr
}

console.log(getSubArray([11, 4, 8, 3], 2))
console.log(getSubArray([1, 2, 3, 4, 5], 3))
console.log(getSubArray(['some string', 'hello', 'I am happy'], 1))

function cloneArr (arr) {
  return arr.slice()
}

console.log(cloneArr([11, 4, 8, 3]))
console.log(cloneArr([]))
console.log(cloneArr([0]))
