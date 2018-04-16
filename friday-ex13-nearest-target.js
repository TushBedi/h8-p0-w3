/*
ALGORITHM
 - create var x []
 - create var o []
 - do a for loop
 - if arr[i] === 'x'
    push i to var x
 - else if arr[i] === 'o'
    push i to var o
 -

*/

function nearestTarget(arr) {
  var x = [];
  var o = [];
  var i;
  for (i =  0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      x.push(i);
    } else if(arr[i] === 'o') {
      o.push(i);
    }
  }
  var min = arr.length
   if(x.length === 0 || o.length === 0) {
    return 0;
  } else if (o[0] > x[x.length - 1]) {
    var oHigh = o[0] - x[x.length-1];
    return oHigh;
  } else if (x[0] > o[0]) {
    var xHigh = x[0] - o[0];
    return xHigh;
  }
}

// TEST CASES 3
console.log(nearestTarget([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(nearestTarget(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(nearestTarget(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(nearestTarget([' ', ' ', 'o', ' '])); // 0
console.log(nearestTarget([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
