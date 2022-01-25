let object = {
    "a":5,
    "c":4,
    "d":1,
    "b":2,
    "e":3,
}

let sortable_array = [];

// syntax of for loop
// for (key in object) {
//   // code block to be executed
// }

for(let key in object){
    sortable_array.push([key , object[key]]);
}
sortable_array.sort(function(a, b) {
    return a[1]-b[1];
});
// console.log(sortable_array)
let convert_to_object = Object.assign({}, sortable_array);
// console.log(convert_to_object)
let data = convert_to_object;
let empty_object={}
for(let keys in data)
{
    empty_object[data[keys][0]]= data[keys][1]
}
console.log(empty_object)