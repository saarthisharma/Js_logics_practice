// find sum of all the elements

// this is the classic way of getting the sum
// const arr = [5,1,3,2,6]
// let sum = 0 ;
// function findSum(arr){
//     for (let i =0 ;i<arr.length;i++)
//     {
//         sum = sum + arr[i]
//     }
//     return sum
// }
// console.log(findSum(arr))


// using reduce method to do the same 
const arr = [5,1,3,2,6]
const result = arr.reduce(function(acc,curr){
    // here acc = accumulator , accumulating all the values and curr here point towards the current value in array
    // sum = acc , arr[i] = curr
    acc = acc + curr;
    return acc;
},0);
console.log(result);

// 0 is the second argument to the reduce function and its the accumulator initial value , acc have initial value 0


// this function(acc , curr) iterating over each element of the array and  the curr represent the each value of the array
// 
