// string trim
// Write a function firstChar, 
// which returns the first character that is not a space when a string is passed.

// Example: firstChar(' Rosa Parks ') should return 'R'

function firstChar(string){
    return string.trim().charAt(0);
    }
    let result = firstChar(' Rosa Parks ')
    console.log(result)