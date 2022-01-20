// string substr quesn
// Write a function firstWord, taking a string and returning 
// the first word in that string. 
// The first word are all characters up to the first space.

// Example: firstWord('see and stop') should return 'see'.


function firstWord(string){
    let firstspace = string.indexOf(' ')
    return string.substr(0 , firstspace)
    }
    let result = firstWord('string')
    console.log(result)