// accessing object properties
// 2 ways , dot notation and the []bracket notation

const gimli = {
	name: "Gimli",
	race: "dwarf",
	weapon: "axe",
	greet: function() {
		return `Hi, my name is ${this.name}!`;
	},
};

// accessing property by dot notation
console.log(gimli.name)
console.log(gimli.race)
console.log(gimli.weapon)
console.log(gimli.greet())

// accessing property by bracket notation

console.log(gimli["weapon"])

// adding and modifying object properties

// adding new age property to gimli
gimli.age = 51;

// we can also add the property by bracket notation
gimli["AGE"] = 12;
console.log(gimli)


// A method can also be added to the object

// adding new fight method to the object gimli

gimli.fight = function(){
    return `gimli attacks with an ${this.weapon}`
}
console.log("-->" , gimli.fight())


// modifying/updating object properties

// updating weapon property
gimli.weapon = "battle axe";
console.log("-->",gimli);

// gimli.fight = function(){
//     return `Gimli attacks with an ${this.weapon}`
// }
// console.log(gimli.fight())


// removing object properties

// to remove a property from an object ,use delete keyword
delete gimli.weapon; 
console.log("new object",gimli)

delete gimli.fight
console.log("new object after delete",gimli)


// looping through object properties
const gimli_2 = {
	name: "Gimli",
	race: "dwarf",
	weapon: "battle axe",
};
// Using bracket notation, we can retrieve the property value as a variable key
for(let key in gimli_2){
    console.log(key +":"+gimli_2[key])
}


// Another useful enumeration method is the Object.keys() method, 
// which will return an array of the object’s keys.

console.log(Object.keys(gimli))