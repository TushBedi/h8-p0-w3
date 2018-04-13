function checkArithmeticSequence(arr) {
  var checker = 0;
  var output;
  var increment = arr[1]-arr[0];
  for(var i = 0; i < arr.length - 1; i++) {
    if(arr[i+1] - arr[i] === increment) {
      checker++;
    } else {
      break;
    }//console.log(checker);
  } if(checker === arr.length - 1) {
    output = true;
  } else {
    output = false;
  } return output;
}

// TEST CASES
console.log(checkArithmeticSequence([1, 2, 3, 4, 5, 6])); // true
console.log(checkArithmeticSequence([2, 4, 6, 12, 24])); // false
console.log(checkArithmeticSequence([2, 4, 6, 8])); // true
console.log(checkArithmeticSequence([2, 6, 18, 54])); // false
console.log(checkArithmeticSequence([1, 2, 3, 4, 7, 9])); // false
