// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .2
let arr = [1, 2, 1, 2, 1, 3, 2]
function sockMerchant(n, arr) {
  let pairs = 0
  let odds = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        pairs++
        j++
        continue
      } 
    }
  }
}
console.log(sockMerchant(7, arr))
