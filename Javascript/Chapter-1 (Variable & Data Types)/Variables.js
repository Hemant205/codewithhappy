// * Variables in JS :- Variables are containers for data

fullName = "Hemnat Malik";
console.log("Name =",fullName);//````

age = 23;
console.log("age =",age);

x= null;
console.log(x);

y = undefined;
console.log(y);

isFollow = true;
console.log(isFollow);

// Variable Rules 
// * Variable names are case sensitive ; "a" & "A" is different.

fullname = "Hemant Malik";
console.log(fullname);

FULLNAME = "HAPPY MALIK";
console.log(FULLNAME);

// * Only Letter, digits, Underscore(_) and $ is allowed (not even space).

fullName = "Shashi Rani";
age123 = 50;
education_ = "Graduate";
address$ = "Meerut";

console.log("Name :",fullName);
console.log("Age :",age123);
console.log("qualification :",education_);
console.log("Address :",address$);

// * Only a letters, Underscore(_) or $ be 1st character.

fullName = "Hemant";
_age = 23;
$qualification = "Diploma";
// 123address = "meerut"; // error not usenumeric literal

console.log(fullName);
console.log(_age);
console.log($qualification);

// * Reserved words cannot be variable names.
/*
console = "Hemant";
console.log(console);
const = "hemant";
console.log(const); 
*/

// let, const & var

// * var :- Variable can be re-declared & updated. A global scope variable

var age = 24;
var age = 59;
var age = 86;
console.log(age);





