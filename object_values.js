// Object.values() creates an array containing the values of an object.

const session = {
    id: 1,
    time: `26-July-2018`,
    device: 'mobile',
    browser: 'Chrome'
}

// syntax object.values(objectname)

let values = Object.values(session)
console.log(values)
