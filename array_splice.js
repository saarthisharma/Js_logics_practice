let array = [1,2,3,4,5,6]
let len = array.length
if(len%2 == 0) //if length is even
{
    let  output = array.splice(0,3)
    console.log(output)
    console.log(array)
}
else 
{
    // if len is odd
    let output2 =array.splice(0,4)
    console.log(output)
}
