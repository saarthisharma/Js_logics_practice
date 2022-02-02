// object create() method
// Object.create() is used for implementing inheritance.

const job = {
    position : "cashier",
    type : "hourly",
    isAvailable : "true",
    showDetails : function(){
        const accepting = this.isAvailable ?'is accepting applications' : "is not currently accepting applications";
        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }    
};

// using object.create to pass properties
const barista=Object.create(job)
barista.position = "barista"
barista.showDetails()

// The barista object now has one property — position — 
// but all the other properties and methods from job are available through the prototype. 
// Object.create() is useful for keeping code DRY by minimizing duplication.
