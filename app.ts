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



/* ARRAYS */
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

let arrMix = [1, "a", true];
let arrMix2: (string | number | boolean)[] = [2, "b", false];  // not common practice



// Tuple
// with a tuple you define inside the array
let arrTup = ["a string", 5];
let arrTup2: [string, number] = ["gnirts a", 10];
arrTup2 = ["b", 4];
// arrTup2 = [4, "b"]; // not valid



/* OBJECTS */
let person = {
    name: "Gabe",
    age: 38
};

// type aliases
type stringOrNum = string | number;
let yearNow: string | number;
yearNow = 2021; // valid
yearNow = "2021"; // valid
// yearNow = true; // not valid



/* FUNCTIONS */
function calcSum(a: number, b: number) {
    return a + b;
}

calcSum(2, 2);

// Arrow Function
let calcSum2: (a: number, b: number, c?: number) => number; // question mark = optional

calcSum2 = (first: number, second: number) => {
    return first + second;
}

calcSum2(2, 3);



/* VOIDs */
const sayHi = () => {
    console.log("hi");
}

/* ------------------------------------------------------- */
/* this section interacts with the form on the HTML page */
// Type Casting
const inputName = document.querySelector("#name") as HTMLInputElement;
const inputAge = document.querySelector("#age") as HTMLInputElement;
const inputForm = document.querySelector("form");
const greeting = document.querySelector(".greeting") as HTMLDivElement;

/* INTERFACES */
interface PersonInterface {
    name: string;
    age: number;
}

let gabe = {
    name: "Gabe",
    age: 38
}

class Person implements PersonInterface {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
    // add a method
    greet() {
        return `Hi, my name is ${this.name} and I am ${this.age}.`
    }
}

// getting this from the form
inputForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const person = new Person(inputName.value, inputAge.valueAsNumber);

    greeting.innerText = person.greet();

    inputForm.reset(); 
});


/* GENERICS */
// used when you don't know exactly what type something might be
function doSomething<T>(arg: T) {
    // do something
    return arg;
}

doSomething(3);







