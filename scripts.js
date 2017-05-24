
//is evenOdd
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  }//end if
   else {
    return "odd";
  }//end else
}//end function
//

//Create a function that takes a string as an argument and converts the first character of each word to uppercase.
//Return the newly formatted string.
function makeTitle(str) {
  var strings = str.split(' ');
  // console.log('strings:', strings);
  for (var i = 0; i < strings.length; i++){
    strings[i] = strings[i].slice(0,1).toUpperCase() + strings[i].slice(1);
  } //end for
  return strings.join(' ');
} //end function
