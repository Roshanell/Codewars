// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an inter

//inputs numbers, whole numbers, no negative numbers

//return each individual number squared but concatenated

function squareDigits(number) {
  // return 0;
  //
  const digits = number.toString().split("");
  const squared = digits.map((x) => x * x);
  const squaredDigits = squared.join("");
  return +squaredDigits;
}
