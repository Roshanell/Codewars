// Test Results:
// removeSmallest
// works for the examples
// returns [] if the list has only one element
// returns a list that misses only one element
// check for mutations to original array/list
// works for random lists

function removeSmallest(numbers) {
  const smallest = Math.min(...numbers);
  const index = numbers.indexOf(smallest);

  return numbers.filter((_, i) => i !== index);
}
