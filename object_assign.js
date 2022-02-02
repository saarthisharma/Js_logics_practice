// Object.assign() is used to copy values from one object to another.

// We can create two objects, and merge them with Object.assign().

const name = {
    firstname : "jack",
    lastname : "fry"
};

const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// merging both objects

const character = Object.assign(name , details)
console.log(character)