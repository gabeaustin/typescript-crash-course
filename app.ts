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

