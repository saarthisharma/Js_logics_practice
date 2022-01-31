// javascript this keyword
// source - https://www.w3schools.com/js/js_this.asp

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.



// method function invocation
const person = {
    firstname:"john",
    lastname:"doe",
    id:55,
    fullname : function(){
        return this.firstname +" "+ this.lastname;
    }
};
// let result = person.fullname();
// console.log(result)
console.log(person.fullname())