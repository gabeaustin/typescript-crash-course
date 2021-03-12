let aString = "Hi";
let aString2: string = "hi";

let aNum = 5;
let aNum2: number = 10;

let aBool = true;
let aBool2: boolean;

let aVar; // is the same as (below)
let avar2: any;
let aVar3: any = "a string";
aVar = 5; // this will work because we set the type to ANY

let year: string | number; // the pipe character ( | ) means or
year = 2021; // allowed
year = "2021"; // allowed
// year = false; // not allowed

const parsedYear = parseInt(year);



/* ARRAYS AND OBJECTS */
let arrString = ["a", "b", "c"]; // is the same as (below)
let arrString2: string[] = ["a", "b", "c"];
// arrString[0] = 1; // not allowed
arrString[0] = "aA"; // allowed
// arrString.push(2); // not allowed
arrString.push("aAa"); // allowed
console.log(arrString);

let arrNumber = [1, 2, 3]; // is the same as (below)
let arrNumber2: number[] = [1, 2, 3];

let arrBool = [true, false];
let arrBool2: boolean[];
let arrBool3: boolean[] = [true, false];








