// understanding call method
// source - https://www.youtube.com/watch?v=75W8UPQ5l7k

let person_1 = {
    firstname : "john",
    lastname : "doe",
    fullname : function(hometown , state){
        console.log(this.firstname+" "+this.lastname+" from "+hometown,state)
    }
}
// invoking our method
person_1.fullname("sydney","Australia")

// suppose we have another person
let person_2 = {
    firstname : "alex",
    lastname : "costa" 
    //one method to print this name is to make a fullname method as in the person_1 object but thats not a good practice to do it.
    // here call method comes to practice,its basically borrowing the function define in one object to use it in another object.
    // to print full name for person_2 object we will use call method
}

// applying call method 
// syntax
// in call() , we are passing the arguments(london and britain) individually
person_1.fullname.call(person_2 ,"London","Britain");

let person_3 = {
    firstname : "james",
    lastname : "bond"
}

// using apply method
// only difference between call and apply method is the way we pass arguments

// here in apply() , we are passing the arguments in the array
person_1.fullname.apply(person_3 , ["washington", "America"])


// applying bind method

// the bind method create the copy of the method fullname and bind it to the object(person_2 here) and return the 
// function.
// bind does not directly call the method like call does , bind return the complete method and we have to call it later

// bind method keep a copy of a method and we can invoke that whenever required

let printMyName=fullname.bind(person_1,"London","Britain");
console.log(printMyName())

