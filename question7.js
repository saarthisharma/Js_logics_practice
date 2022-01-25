let data = {
    "A" : {"a":1},
    "B" : {"a":6},
    "C" : {"a":5},
    "D" : {"a":3},
}
console.log(data.A.a)
let sortable_array=[]
for(let key in data)
{
    sortable_array.push([key , data[key]])
}
sortable_array.sort(function(a,b){
    return a[1]-b[1];
});
console.log(sortable_array)

