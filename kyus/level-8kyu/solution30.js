// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"


function nameShuffler(str){
    //Shuffle It
  let firstName = str.slice(0,4)
  let lastName = str.slice(5,13)
    
    return lastName + ' '+ firstName
  }