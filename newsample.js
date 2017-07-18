var numbers = [65, 44, 12, 4];
 console.log(numbers);
var newnumber=myFunction();
console.log(newnumber);
  function addArrayElement(num) 
  {
    return num +10;
   }

  function myFunction()
 {
    var num = numbers.map(addArrayElement);
     return num;
}
