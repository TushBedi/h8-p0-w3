function dataHandling2 () {
  input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

  input.splice(1,2,'Roman Alamsyah Elsharawy','Bandar Lampung Province');
  input.splice(4,1,'Male','SMA International Metro');

  console.log(input);

  var date = input[3];
  var strDate = date.toString(); //Converts array to string for SPLIT
  // console.log(strDate);

  var arrDate = strDate.split('/');
  // console.log(arrDate);

  var month = arrDate[1];
   switch (month) {
     case '01':
      console.log('January');
    break;

     case '02':
      console.log('February');
    break;

     case '03':
      console.log('March');
    break;

     case '04':
      console.log('April');
    break;

     case '05':
      console.log('May');
    break;

     case '06':
      console.log('June');
    break;

     case '07':
      console.log('July');
    break;

     case '08':
      console.log('August');
    break;

     case '09':
      console.log('September');
    break;

     case '10':
      console.log('October');
    break;

     case '11':
      console.log('November');
    break;

     case '12':
      console.log('December');
    break;

    default:
    console.log('Invalid month');
    break;
   }

  // console.log(arrDate);
  arrDate.sort(function (value1, value2) {return Number(value1)<Number(value2)}); // THIS IS IMPORTANT
  console.log(arrDate);

  // console.log(strDate);
  var arrDate1 = strDate.split('/'); // Split STRINGS ONLY by value in brackets ()
  // console.log(arrDate1)
  console.log(arrDate1.join('-')); //USE JOIN FOR JOINING AN ARRAY WITH ELEMENT IN BRACKETS ()

  var name = input[1]
  // console.log(name);
  console.log(name.slice(0,15));


  // console.log(arrDate.reverse());


}

dataHandling2();



//['0001' , 'Roman Alamsyah Elsharawy', 'Bandar Lampung Province' , '21/05/1989' , 'Male' , 'SMA International Metro']
