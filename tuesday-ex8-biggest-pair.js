function biggestPair (num) {
  var pair = [];
  var numStr = num.toString();
  for(var i = 0; i < numStr.length - 1; i++) {
    pair.push(numStr.slice(i,i+2));
  } //return pair;
    pair.sort();
    var output = Number(pair[pair.length -1]);
    return output;
}


//Test Cases
console.log(biggestPair(641573)); // 73
console.log(biggestPair(12783456)); // 83
console.log(biggestPair(910233)); // 91
console.log(biggestPair(71856421)); // 85
console.log(biggestPair(79918293)); // 99
