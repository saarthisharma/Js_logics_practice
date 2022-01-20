function getArea(width , height)
{
    if (width > 3 && height > 3)
    {
        return width*height
    }
    else
    {
        return 0
    }
}
let result = getArea(2,2);
console.log(result)