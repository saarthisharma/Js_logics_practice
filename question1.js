let array = [1,2,3,4,5,6,1,1,1,1]
let arr = []

for(i=0;i<array.length;i++)
{
    if(i<array.length-2)
    {
        arr = array[i]+array[i+1]+array[i+2]
        console.log(arr)
    }
    //else if(i>=array.length-2 && i<array.length)
    else
    {
        console.log(array[i])
    }
}
