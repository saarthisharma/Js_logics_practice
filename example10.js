let array = [1,2,3,4];
let no = 4;
let counter = 0;
let len = array.length;
function pushElement(){
    for(let i=0;i<len;i++){
    if(array[i] != no){
        counter++;
    }
}
if(len == counter){
    array.push(no);
    console.log(array)
}
else
{
    console.log('number already exist');
}
}
pushElement();