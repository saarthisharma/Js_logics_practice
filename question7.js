let object = {
    "A" : {"a":1},
    "B" : {"a":6},
    "C" : {"a":5},
    "D" : {"a":3},
}
let sortable_array=[]
for(let key in object)
{
    sortable_array.push([key , object[key]])
}
sortable_array.sort(function(a,b){
    return b[1].a-a[1].a;
});
console.log("original object before sorting")
console.log(object)
console.log("converting object into array for sorting")
console.log(sortable_array)
console.log("result after sorting and convert in object")
let data = Object.assign({}, sortable_array);
console.log(data)
let empty_object={}
for(let keys in data)
{
    empty_object[data[keys][0]]=data[keys][1]
}
console.log("original structure after sorting")
console.log(empty_object)
