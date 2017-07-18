var ages = [32, 33, 16, 40];
console.log(ages);
var adult= myFunction();
console.log(adult);
function check(age) {
    return age >= 18;
}

function myFunction() {
 var newage= ages.filter(check);
return newage;
}
