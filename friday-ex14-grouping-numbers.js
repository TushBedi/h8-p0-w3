/*
Algorithm
-var arrFinal =[ [], [], [] ]
- for loop from i to arr
push if:
3 groups:
 i[0]. even numbers (excluding multiples of 3) { arr[i] % 3 !== 0 && arr[i] % 2 === 0}
 i[1]. odd numbers (excluding multiples of 3) { arr[i] % 3 !== 0 && arr[i] % 2 !== 0}
 i[2]. multiples of 3 { arr[i] % 3 === 0}
*/


function groupingNumbers(arr) {
  var arrFinal = [ [], [], [] ];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      arrFinal[2].push(arr[i]);
    } else if (arr[i] % 2 === 0 && arr[i] % 3 !== 0) {
      arrFinal[0].push(arr[i]);
    } else if (arr[i] % 2 !== 0 && arr[i] % 3 !== 0) {
      arrFinal[1].push(arr[i]);
    }
  } return arrFinal;
}

// TEST CASES
console.log(groupingNumbers([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(groupingNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(groupingNumbers([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(groupingNumbers([])); // [ [], [], [] ]
