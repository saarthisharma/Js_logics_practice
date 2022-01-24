function getElement(array)
{
    if ( typeof(array) == "object"){
    for(let i=0;i<array.length;i++)
    {
        getElement(array[i])
    }
    }
    else console.log(array)
}
getElement([1,[2,[3,[4,[5,[6,[7,[8,[9,[0]]]]]]]]]])