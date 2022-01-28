// If the numbers 1 to 5 are written out in words: 
// one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, 
// how many letters would be used?


// NOTE: Do not count spaces or hyphens. 
// For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. 
// The use of "and" when writing out numbers is in compliance with British usage.



// let ones = {
//   1: 'one',
//   2: 'two',
//   3: 'three',
//   4: 'four',
//   5: 'five',
//   6: 'six',
//   7: 'seven',
//   8: 'eight',
//   9: 'nine',
//   10: 'ten',
//   11: 'eleven',
//   12: 'twelve',
//   13: 'thirteen',
//   14: 'fourteen',
//   15: 'fifteen',
//   16: 'sixteen',
//   17: 'seventeen',
//   18: 'eighteen',
//   19: 'nineteen'
// }
// let tens = {
//   2: 'twenty',
//   3: 'thirty',
//   4: 'forty',
//   5: 'fifty',
//   6: 'sixty',
//   7: 'seventy',
//   8: 'eighty',
//   9: 'ninety'
// }
// const words =[];
// for(let i=1;i<=1000;i++)
// {
//     words.push(word_count(i))
// }
// function word_count(number)
// {
//     let empty_array = []
//     if(ones[number])
//     {
//         empty_array.push(ones[number])
//     }
//     if(number>=20)
//     {
//         empty_array.push(tens[Math.floor(number/10)])
//         number = number%10
//     }
//     if(number>=100)
//     {
//         empty_array.push(ones[Math.floor(number/100)])
//         empty_array.push("hundred")
//         if(number%100!==0)
//         {
//             empty_array.push("and")
//         }
//         number = number%100 
//     }
//     if(number>=1000)
//     {
//         empty_array.push(ones[Math.floor(number/1000)])
//         empty_array.push("thousand")
//         number = number%1000
//     }
//     return empty_array.join("")
// }
// console.log("total words =",words.join("").length)



const ones = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  }
  
  const tens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  }
  
  const words = []
  for (let i = 1; i <= 1000; i++) {
    words.push(word_count(i))
  }
  
  function word_count(number) {
    let empty_array = []
  
    if (number >= 1000) {
      empty_array.push(ones[Math.floor(number / 1000)])
      empty_array.push("thousand")
      number %= 1000
    }
  
    if (number >= 100) {
      empty_array.push(ones[Math.floor(number / 100)])
      empty_array.push("hundred")
      if (number % 100 !== 0) {
        empty_array.push("and")
      }
      number %= 100
    }
  
    if (number >= 20) {
      empty_array.push(tens[Math.floor(number / 10)])
      number %= 10
    }
  
    if (ones[number]) {
      empty_array.push(ones[number])
    }
  
    return empty_array.join("")
  }
  
  console.log(words.join("").length)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // for(let key in digit)
  // {
  //     total_words = total_words+digit[key].length
  //     // console.log(digit[key].length)
  // }
  // console.log("total words =",total_words)
  // function count_words()
  // {
  //     for(let i=1;i<19;i++){
  //         if(i<=19)
  //         {
  //         for(let key in digit){
  //         total_words = total_words+digit[key].length
  //         }
  //         }
  //     }
  //     console.log(total_words)
  // }
  // count_words()
  // function count_digit()
  // {
      
  // }
  
  
  

  // let one = one.length
  // let one = "one"
  // let one_len = one.length
  // let two = "two"
  // let two_len = two.length
  // let three = three.length
  // let three_len = three.length
  // let four = 
  // let total_letters = 0
  // for(let i=1;i<=10;i++)
  // {
  //     total_letters = total_letters + one
  // }
  // console.log(total_letters)
  