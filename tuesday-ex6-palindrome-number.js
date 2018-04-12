function palindrome(number) {

  var isPalindrome = false;
  while (isPalindrome === false) {
    var numberStr = number.toString();
    var reverse ='';
      for(var j = numberStr.length-1;j >= 0; j--) {
       reverse += numberStr[j];
      } //  console.log(reverse);

      if (reverse === numberStr) {
       isPalindrome = true;
       return number
      } else {
        number += 1;
      }
  }
}
console.log(palindrome(102));
