var ages = [32, 33, 16, 40];
console.log(ages);
var totalage=ages.reduce(function(sum,ages){
console.log(sum,ages);
return sum+ages;
},0)
console.log(totalage);
