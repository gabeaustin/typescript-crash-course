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
/* ARRAYS AND OBJECTS */
var arrString = ["a", "b", "c"]; // is the same as (below)
var arrString2 = ["a", "b", "c"];
// arrString[0] = 1; // not allowed
arrString[0] = "aA"; // allowed
// arrString.push(2); // not allowed
arrString.push("aAa"); // allowed
console.log(arrString);
var arrNumber = [1, 2, 3]; // is the same as (below)
var arrNumber2 = [1, 2, 3];
