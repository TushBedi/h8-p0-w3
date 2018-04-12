function biggestPair (num) {
  // var pair = [];
  var max = 0;
  var numStr = num.toString();
  for(var i = 0; i < numStr.length - 1; i++) {
    // pair.push(numStr.slice(i,i+2));
    if (numStr.slice(i,i+2) > max) {
      max = numStr.slice(i,i+2);
    }
  } //return pair;
    // pair.sort();
    // var output = Number(pair[pair.length -1]);
    return max;
}


//Test Cases
console.log(biggestPair(641573)); // 73
console.log(biggestPair(12783456)); // 83
console.log(biggestPair(910233)); // 91
console.log(biggestPair(71856421)); // 85
console.log(biggestPair(79918293)); // 99
