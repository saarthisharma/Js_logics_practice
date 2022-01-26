// let string = "hellothisisconsole"
// let result = string.includes("hello")
// console.log(result)






// let word = "this"

// let convert_string = string.split('');
// let convert_word = word.split('');
// // console.log(convert_array)
// // console.log(convert_word)

// for(i=0;i<convert_string.length;i++)
// {
//     for(j=0;j<convert_word.length;j++)
//     {
//         if(convert_string[i]==convert_word[j])
//         {
//             console.log("match")
//             break
//         }
//         else
//         {
//             console.log("didnt match")
//             break
//         }
//     }
// }




function check_substr(sentence, word)
{
     // To break the sentence in words
    let string = sentence.split(" ");
  
    // To temporarily store each individual word
    for ( let temp=0;temp<string.length;temp++)
    {
        if (string[temp] == (word) )
        {
            return true;
        }
    }
    return false;
}
let string = "hello this is console";
let  word = "on";
 
if (check_substr(string, word))
        console.log("exist");
    else
        console.log("dont exist");