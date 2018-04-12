function findMean(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    total += arr[i];
  } var length = arr.length //console.log(total);
    var output = Math.round(total/length);
    return output;
}
// TEST CASES
console.log(findMean([1, 2, 3, 4, 5])); // 3
console.log(findMean([3, 5, 7, 5, 3])); // 5
console.log(findMean([6, 5, 4, 7, 3])); // 5
console.log(findMean([1, 3, 3])); // 2
console.log(findMean([7, 7, 7, 7, 7])); // 7
