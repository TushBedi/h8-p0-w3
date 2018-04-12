function countTotalWords(sentence) {
  var countSpaces = 1;
  var arrSentence = [];
  for(var i = 0; i < sentence.length; i++) {
    arrSentence.push(sentence[i]);
      if(arrSentence[i] === ' ') {
        countSpaces++;
      }
  } return countSpaces;
}

// TEST CASES
console.log(countTotalWords('I have a dream')); // 4
console.log(countTotalWords('Never eat shredded wheat or cake')); // 6
console.log(countTotalWords('A song to sing')); // 4
console.log(countTotalWords('I')); // 1
console.log(countTotalWords('I believe I can code')); // 5
