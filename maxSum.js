// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

//this is my atempt 
function maxSubarraySum(arr, num){
    //make two variables that will hold the values you'll need to compare in order to get the max sum:
    let maxSum = 0
    let tempSum = 0
    //take care of edge case:
    if (num > arr.length){
        return null;
    }
    tempSum = maxSum;
    // create the first sum by using a loop and adding together n number of digits:
    for (let i = 0; i < num; i++){
        tempSum += arr[i]
    }
    // create another loop that will go through the array and i will be the index of the next number to be added which is also n. so you subtract the first number and then add the number in the end to create a sliding window. this will keep lopping for every number after the number with index = n. then it will compare the max and temp sum and return rhe greater 
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
      }
      return maxSum;

}




//this is the long way with large big 0 

function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
  
  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
  
  
//this is the better solution: 
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
  