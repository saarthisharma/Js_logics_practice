// instance of operator
// The instanceof operator tests to see if the prototype property of a constructor appears 
// anywhere in the prototype chain of an object. 
// The return value is a boolean value.


// syntax
// object instanceof constructor

function Car(maker , model , year){
    this.maker = maker;
    this.model = model;
    this.year = year;
}

const auto = new Car("maruti","800",1990)
console.log(auto instanceof Car) // checking prototype property of a constructor appearing in our object auto or not
