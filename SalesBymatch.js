// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .2
let arr = [1, 2, 1, 2, 1, 3, 2]
function sockMerchant(n, arr) {
  let pairs = 0
  let a = arr.sort()
  for (let i = 0; i < n; a++) {
    for (let j = 0; j < 7; j++) {
      if (a[i] === a[j]) {
        pairs++
        i++
        j++
      }
    }
  }
  return pairs
}
console.log(sockMerchant(7, arr))
