// understanding new keyword
// the new keyword used to create an instance of a user defined object type and a constructor function
//  It is used to constructs and returns an object of the constructor function.

//  On calling the constructor function with ‘new’ operator, the following actions are taken:
// 1.A new empty object is created.
// 2.The ‘this’ variable is made to point to the newly created object. 
// It binds the property which is declared with ‘this’ keyword to the new object.
// syntax - new constructor[([arguments])]


// source : https://www.geeksforgeeks.org/javascript-new-keyword/
// source : https://www.geeksforgeeks.org/what-is-the-new-keyword-in-javascript/


function Student(name , age){
    this.name = name ;
    this.age = age;
}

// creating an instance of a function
 
let student_1 =  new Student('henry',22)

// student_1.class = 5; // way to add another property of object
// student_2.class = 5;

console.log(student_1) // this student_1 is a object
console.log("-->",student_1.name)
console.log("-->",student_1.age)

// let name = "matt";
// function student(name){
//     this.name=name;
//     console.log("-->",this.name)
//     console.log(name)
// }
// student("henry")
// console.log("-" , name)