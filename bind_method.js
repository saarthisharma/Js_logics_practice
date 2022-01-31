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

let car = {
    brand:"Honda",
    getBrand:function()
    {
        return this.brand
    }
}
let brand = car.getBrand.bind(car);
console.log(brand())

