// let car = {
//     brand : "honda",
//     getBrand:function(){
//         return this.brand;
//     }
// }
// console.log(car.getBrand()) 
// this program will give the output honda because we have attached our property to our object car.



// but if we can store the object method(getBrand) in variable and the call the method through the variable
// that will give error because "this" keyword didnt refer to the object
// for example

// let car = {
//     brand:"Honda",
//     getBrand:function()
//     {
//         return this.brand
//     }
// }
// let brand = car.getBrand.bind(car);
// console.log(brand())

// the bind() method takes an object as a first argument and creates a new function.


let person_1 = {
    name:"alpha",
    game:"cricket"
}

let person_2 = {
    name:"beta",
    game:"cricket"
}

let person_3 = {
    name:"gama",
    game:"football"
}

function play(time){
    return(`${this.name} plays ${this.game} for ${time} hours`)
}

let information =play.bind(person_1)
console.log("information ->", information(2))

let information_1 = play.bind(person_2)
console.log(information_1(3))