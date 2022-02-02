// Object.entries() creates a nested array of the key/value pairs of an object

const operatingsystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source',
}

let entries = Object.entries(operatingsystem)
console.log(entries)


// with the result in array format , we can loop through that array using for forEach method and get the values
