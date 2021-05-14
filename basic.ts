// Primitives types: number, string, boolean
// More complex types: arrays, objects
// Functions types and parameters

//Primitives types
//number : this indicates to the Primitives types
//Number : this indicates to the object 

let num1 : number = 8;
num1 = 9;
num1 = 9.02;

//string
let str1 : string = "Hello";
str1 = "Gautam";

//boolean
let isGood : boolean = true;
isGood = false;

// Complex types
let arr1 : string[];

arr1 = ["asd","gdgf","ase"];
// uncomment to see the error
// arr1 = ["rer", 3343];  
let arr2 : number[] = [44.5, 3343];  


let anyType : any;

anyType = "SSSS";
anyType = 345345;
anyType = ["Asddfasdf"];

let obj1 : {
    name: string;
    age:number;
}

obj1 = {
    name: "Gautam",
    age: 26
}
// uncomment to see the error

// obj1 = {
//     name: true     // with different type
// }
// obj1 = {
//     game: "rue"    // with different name
// }

let obj2 : {
    name: number;
    age:number;
};

obj2 = {
    name: 345345345,
    age: 66.66
};
let people : {
    name: string;
    age:number;
}[];

people = [{
    name: "Gautam",
    age: 26
}];

people = [obj1];

// uncomment to see the error
// people = [obj2];
// people = {
//     name: "Gautam",
//     age: 26
// }


// Type inference  : when you declared a variable and also assgined the value to it as string
// and later when you try to assigned a number value to the  same variable you will get the error
// That means with first assign the TS trys to declare a variable with its type

let str2 = "Hello Gautam";
// uncomment to see the error
// str2 = 456456;

// Union types

let a : string | number = 34534;
a = "str1";
a = 345345;

let b : (string | number)[] = ["asdfa",543543,"asdfsd"];
b  = ["asdfa"];
b = [345345];
// uncomment to see the error
// b = [true];


// Assigning the type alias
// we have to declare a type using tpye and folowed by = and object of type or its type

type Sports = {
    groundType : string;
    equipment : string;
    noOfPlayers : number
}

let Cricket : Sports;
let Football : Sports;

let SportsInSchool : Sports[];


// Funtions 
// If we define the below function like subtract(a:number, b:number) the TS inference the funtion as number
function subtract(a:number, b:number) : number {
    return a-b;  
}

// here on hovering you will see the type of the function as void 
// which is basically is undefined 
function output(a:any) {
    console.log(a);
}

// Generics

// the type of resulted arr by hovering over it
// here we have defined a funtion were we are using the type any we wanted to have 
// the output to be of same type as that of the arguments passed
function insertAtBeginning(arr:any[], e:any) {
    return [e, ...arr];
}
// type of numberArr = number[] and type of newNumberArr = any[]
const numberArr = [1,2,3];
const newNumberArr = insertAtBeginning(numberArr, 4);
// this will give us the runtime error as split is for the string
newNumberArr[0].split('');

// type of strArr = string[] and type of newStrArr = any[]
const strArr = ["ABC","BCD","CDE"];
const newStrArr = insertAtBeginning(strArr, "DEF");
// this not give any error
newStrArr[0].split('');

function insertAtLast<T>(arr:T[], e:T) {
    return [e, ...arr];
}

// typeOf numberArrLast and newNumberArrLast is number[]
const numberArrLast = [1,2,3];
const newNumberArrLast = insertAtLast(numberArr, 4);
// uncomment to see the error
// newNumberArrLast[0].split('');

// typeOf strArrLast and newStrArrLast is number[]
const strArrLast = ["ABC","BCD","CDE"];
const newStrArrLast = insertAtLast(strArrLast, "DEF");
// this not give any error
newStrArrLast[0].split('');



// Classes
// we can make a properties and method as public or private using TS;
// We can declare the properties before using them in constructor where as we don't have this in JS
class Student {
    firstName : string;
    lastName : string;
    age : number;
    private courses : string[];

    constructor( first : string, last : string, age : number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }

    enrollForCourses(courseName : string) {
        this.courses.push(courseName);
    }

    listOfCourses() {
        return this.courses.slice();
    }
}


const student1 = new Student('Gautam', 'Prasad', 26, ['React']);
student1.enrollForCourses("ReactNative");
// will give an error as private
// student1.courses ;
student1.age;


// Short hand of writing
class Students {
    // firstName : string;
    // lastName : string;
    // age : number;
    // private courses : string[];

    constructor(public firstName : string, public lastName : string, public age : number, private courses: string[]) {}

    enrollForCourse(courseName : string) {
        this.courses.push(courseName);
    }

    listOfCourses() {
        return this.courses.slice();
    }
}


const studentA = new Students('Gautam', 'Prasad', 26, ['React']);
studentA.enrollForCourse("ReactNative");
// will give an error as private
// student1.courses ;
studentA.listOfCourses()
studentA.age;
studentA.firstName;
studentA.lastName;


// interfaces is only present in TS not in JS
// interfaces are object type definations


interface Human  {
    name: string;
    age: number;

    greetSelf : () => void;
}

let Gautam : Human;

Gautam = {
    name : "Gautam",
    age: 26,
    greetSelf() {
        console.log("Hello Gautam!!!");
    }
}


// 'interface' alternate can be 'type' keyword like below 

type Human1 = {
    name: string;
    age: number;

    greetSelf : () => void;
}

let Gautam1 : Human1;
Gautam1 = {
    name : "Gautam",
    age: 26,
    greetSelf() {
        console.log("Hello Gautam!!!");
    }
}


// Why do we have interfaces if we can do it using same as type keyword
// Because classes can be defined by interfaces if we want some classes to be have some 
// structure then we might needed to addded some feature to add to classes


class Instructor implements Human {
    name : string;
    age: number;
    greetSelf : () => {}
}


// npx tsc --init
