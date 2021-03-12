"use strict";
var aString = "Hi";
var aString2 = "hi";
var aNum = 5;
var aNum2 = 10;
var aBool = true;
var aBool2;
var aVar; // is the same as (below)
var avar2;
var aVar3 = "a string";
aVar = 5; // this will work because we set the type to ANY
var year; // the pipe character ( | ) means or
year = 2021; // allowed
year = "2021"; // allowed
// year = false; // not allowed
var parsedYear = parseInt(year);
/* ARRAYS */
var arrString = ["a", "b", "c"]; // is the same as (below)
var arrString2 = ["a", "b", "c"];
// arrString[0] = 1; // not allowed
arrString[0] = "aA"; // allowed
// arrString.push(2); // not allowed
arrString.push("aAa"); // allowed
console.log(arrString);
var arrNumber = [1, 2, 3]; // is the same as (below)
var arrNumber2 = [1, 2, 3];
var arrBool = [true, false];
var arrBool2;
var arrBool3 = [true, false];
var arrMix = [1, "a", true];
var arrMix2 = [2, "b", false]; // not common practice
// Tuple
// with a tuple you define inside the array
var arrTup = ["a string", 5];
var arrTup2 = ["gnirts a", 10];
arrTup2 = ["b", 4];
// arrTup2 = [4, "b"]; // not valid
/* OBJECTS */
var person = {
    name: "Gabe",
    age: 38
};
var yearNow;
yearNow = 2021; // valid
yearNow = "2021"; // valid
// yearNow = true; // not valid
/* FUNCTIONS */
function calcSum(a, b) {
    return a + b;
}
calcSum(2, 2);
// Arrow Function
var calcSum2; // question mark = optional
calcSum2 = function (first, second) {
    return first + second;
};
calcSum2(2, 3);
/* VOIDs */
var sayHi = function () {
    console.log("hi");
};
var gabe = {
    name: "Gabe",
    age: 38
};
var Person = /** @class */ (function () {
    function Person(n, a) {
        this.name = n;
        this.age = a;
    }
    // add a method
    Person.prototype.greet = function () {
        return "Hi, my name is " + this.name + " and I am " + this.age + ".";
    };
    return Person;
}());
var john = new Person("John", 35);
console.log(john.greet());
