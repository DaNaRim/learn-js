// no classwork because i know it
/*
homework
 */

function compareSums (firstFrom, firstTo, secondFrom, secondTo) {
  return sum(firstFrom, firstTo) > sum(secondFrom, secondTo)
}

function sum (from, to) {
  let result = 0
  for (let i = from; i <= to; i++) result += i
  return result
}