
function groupAnimals(animals) {
    var grouped = [];
    for (i = 1 ; i <= animals.length; i++){
      grouped.push([]);
      }var constant = '';
      for(u = 0; u <= animals.length-1;u++){
        constant += animals[u][0] + " ";
      }var letterArray = constant.split(" ");
      letterArray.pop();
      var index = ''
      for(o = 0; o <= animals.length-1; o++ ){
        index = letterArray.indexOf(animals[o][0])
        grouped[index].push(animals[o]);
      }var finalLoop = 0;
      for(k = 0; k <= animals.length-1;k++){
        if(grouped[k].length === 0){
          finalLoop++
        }
      }grouped.sort();
      for(z = 1; z <= finalLoop; z++){
        grouped.shift();
      }return grouped;
  }

  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
