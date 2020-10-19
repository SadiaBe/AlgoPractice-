
function validAnagram(str1,str2){
    // i forgot to check if the strings were the same length, need to do this before comparing anything else
    if (str1.length !== str2.length) {
        return false
    }
    let count1 = {}
    let count2 = {}
    for (let val of str1) {
        count1[val] = (count1[val] || 0) +1
    }
    for (let val of str2) {
        count2[val] = (count2[val] || 0) +1
    }
  //  console.log(count1)
  for (let key in count1) {
      if (!(key in count2)) {
          return false
      }
      if (count2[key] !== count1[key]) {
          return false 
      }
      return true
      }
    
  }
  validAnagram("love", "evol")



  // his solution using tirnary? : 

  // function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }
//   const lookup = {};
//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//   }
//   console.log(lookup)
//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }
//   return true;
// }
// // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// validAnagram('anagrams', 'nagaramm')



//student 1: code is cleaner and still o(n) comlexity 
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//     return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//     let correctIndex = arr2.indexOf(arr1[i] ** 2)
//     if(correctIndex === -1) {
//     return false;
//     }
//     arr2.splice(correctIndex,1)
//     }
//     return true
//     }

// From leetCode: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//this is my solution with a quadratic big O but it works 
// numArray.sort((a, b) => a - b); // For ascending sort
// numArray.sort((a, b) => b - a); // For descending sort

function twoSum(nums, target) {
    let newNums = nums.sort((a, b) => a - b)

    for (let i = 0; i < newNums.length; i++) {
        for (let j = i + 1; j < newNums.length; j++){
            if (newNums[i] + newNums[j] === target) {
                return [newNums[i], newNums[j]]
                // pr return [i,j] since that's whagt theyre asking for!!
            }
        } 
    }
};
twoSum([2,7,11,15], 9)
twoSum([3,2,4], 6)

//can have a better solution of the array we get is sorted. maybe first sort the array then do the work? 

