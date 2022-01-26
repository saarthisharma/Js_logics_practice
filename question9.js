let number = 5;
let flag = true;
if(number===1)
{
    console.log("1 is neither prime nor composite number")
}
else if(number>1)
{
    for(let i=2;i<number;i++)
    {
        if(number%i==0)
        {
            flag = false;
            break;
        }
    }
    if(flag)
    {
        console.log(`${number} is a prime number`)
    }
    else
    {
        console.log(`${number} is a not prime number`)
    }
}