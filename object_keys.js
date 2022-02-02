// creates an array containing the keys of an object

const employees = {
    boss: 'Michael',
	secretary: 'Pam',
	sales: 'Jim',
	accountant: 'Oscar'
}

// syntax object.keys(objectName)
// getting keys of object employee in the array format
const keys = Object.keys(employees)
console.log(keys)