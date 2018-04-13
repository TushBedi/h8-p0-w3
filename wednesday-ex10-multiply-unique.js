function multiplyUnique(arr) {
  var output;
  var arrOutput=[];
  for(var j = 0; j <arr.length;j++){
    var multiplier = 1;
    for(var i = 0; i < arr.length; i++) {
      multiplier *= arr[i];
    }
  var divisor = arr[j];
  output = multiplier/divisor;
  // console.log(output);
  arrOutput.push(output);
  } return arrOutput;
}

// TEST CASES
console.log(multiplyUnique([2, 4, 6])); // [24, 12, 8]
console.log(multiplyUnique([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(multiplyUnique([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(multiplyUnique([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(multiplyUnique([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
