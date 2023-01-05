function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
  const complement = target - array[i];  
  for (let j = i + 1; j < array.length; j++) {
  if (array[j] === complement) return true;
}
}
return false;
}


/* 
  Write the Big O time complexity of your function here
  runtime: O(n^2)
  function hasTargetSum(array, target) {
    for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];  
    for (let j = i + 1; j < array.length; j++) {
    if (array[j] === complement) return true;
}
}
return false;
}

*/

/* 
  Add your pseudocode here
  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  iterate over the remaining numbers in the array
    check if any of the remaining numbers is the complement
      if so, return true
if we reach the end of the array, return false

*/

/*
  Add written explanation of your solution here
  created a function hasTargetSum to return true if the array has a set of two numbers that sum up to the target. we loop 'i' iterating from '0' from length minus 1. adding that to 'j' also iterating through array length of 'i' plus 1. If pair equal that of target, return true or otherwise false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
 
  console.log('expecting: true');
  console.log('=>', hasTargetSum([1,2,3,4,5], 7));

  console.log('');

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
