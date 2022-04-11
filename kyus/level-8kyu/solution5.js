
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow' 
// 





function solution(str){

    const splitString = str.split("")
    const reverseArry = splitString.reverse ();
    const joinArry =  reverseArry.join("");
    return joinArry;
  }