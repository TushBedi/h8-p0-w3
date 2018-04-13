function checkGeometricSequence(arr) {
  var divisor = arr[1]/arr[0];
  var checker = 0;
  var output;
  for(var i = 0; i < arr.length -1; i++) {
    if (arr[i+1]/arr[i] === divisor) {
      checker++;
    } else {
      break;
    }//console.log(checker)
  } if(checker === arr.length -1) {
    output = true;
  } else {
    output = false;
  } return output;
}

// TEST CASES
console.log(checkGeometricSequence([1, 3, 9, 27, 81])); // true
console.log(checkGeometricSequence([2, 4, 8, 16, 32])); // true
console.log(checkGeometricSequence([2, 4, 6, 8])); // false
console.log(checkGeometricSequence([2, 6, 18, 54])); // true
console.log(checkGeometricSequence([1, 2, 3, 4, 7, 9])); // false
