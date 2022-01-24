let array = ["p","r","o","g","r","a","m","m","i","n","g"];
let object = {}
for(i=0;i<array.length;i++)
{
    // if exist
   if(object[array[i]]) {
       object[array[i]] = object[array[i]] + 1;
   } else {
    object[array[i]]=1;
   }
}
console.log(object)