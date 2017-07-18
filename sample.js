var num = [10,40,30,25, 3];
console.log('before:' + num);
var newarray = addTen(num);
console.log('after:' + newarray);

function addTen(arr) 
{
  var array=new Array();
  for(var i=0;i<arr.length;i++) {
    array[i]=arr[i]+10;

  }
  return  array;
 
  //return array variable with 10 added

}
