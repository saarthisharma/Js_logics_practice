let array = ["p","r","o","g","r","a","m","m","i","n","g"];
let object = {}
for(i=0;i<array.length;i++)
{
    // if exist
   if(object[array[i]]) {
       object[array[i]] = object[array[i]] + 1;
   } else {
    object[array[i]]=1;
   }
}
console.log(object)

console.log(object)
let key = Object.keys(object)
console.log(key)
let values = Object.values(object)
console.log(values)
// (...) is spread operator
//Passing elements of the array as arguments to the Math Object
let max = Math.max(...values)
console.log("max value is" ,max)
let min = Math.min(...values)
console.log("min value is",min)