

//a function that returns all the numbers counted down and then all done when finished
// Recursive Version
function countDown(num){
    //check to see if num is less than or equal to 0, if its not then it just goes to the next block of code *this is the base case*
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    //next block of code is it first prints the num and then subtracks 1 from the num and then recalls itself with the new value of num *the new value of num is the different input 
    console.log(num);
    num--;
    countDown(num);
}
countDown(3)

// Iterative Version
function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!")
}


//Our second recursive function: a function to add all the numbers starting from 1 to the number passed in. So if 3 is passed in it should return 1+2+3=6 so should return 6. If you put in 4 it should return 10 because 1+2+3+4=10
function sumRange(num){
    //the return 1 is the base case
    if(num === 1) return 1; 
    //the invocation of sumRange with num-1 is a different input
    return num + sumRange(num-1);
 }



 //  Writing Factorial Iteratively vs Recursively 

//iterative because it iterates through 
function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}


//this is recursive because it calls on itself 
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}



// HELPER METHOD RECURSION:

function outer(input){
    var outerScopedVariable = []
    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--)
    }
    helper(input)
    return outerScopedVariable;
}


// Trying to collect all of the odd values in an array using a helper recursive method:

function collectOddValues(arr){
    //first make an empty array that will hold all the results! this is in the outter function so the variable isn't reset everytime the inner function is run but the inner function still has access to the variable because of closure. 
    let result = []

    //then write the recursive inner funtion
    function helper(helperInput){
        //make sure to take care of any edge cases have a base case
        //if the the length of the array which is named hellperInput is equal to 0 then it will return nothing which will happen once the inner function stops running
        if(helperInput.length === 0) {
            return;
        }
        //this function checks to see if the first number in the index is odd (not even) and then will put that number into the results array
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        //after it puts it in the result array you call on the same inner helper function again but this time with a shortter array that doesnt include the number you just evaluated before.
        helper(helperInput.slice(1))
    }
    //this is what will call the inner function with the array passed into the outter function
    helper(arr)
    //must return result at the end of the outter array
    return result;
}




//PURE RECURSION:

function collectOddValues(arr){
    // making a similar new array but this time it will reset to an empty array each time this function calls itself but that's going to help how this function is written. 
    let newArr = [];
    //same base case logic
    if(arr.length === 0) {
        //this will return an empty array at the end and will help with the concat and trigger the reversal of the recursion. 
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        //USING CONCAT is how we make pure recursion work. even though each time through the newArr we made is resetting to 0, because we use the concat mathod, it saves the number we pushed into the newArr each time the recursion occurs and then puts all in a list once each recursion is resovled. 
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    //need to have this return so that each time through the concagt can add the value it gets to the new array
    return newArr;
}





//
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) => 2*2*2*2 // 16
answer = [];
function power(base, expo){
    if(expo === 0){
        return 1;
    }
   return answer = base * power(base, expo-1)
}



//write a fuction called productOfArray which takes in an array of numbers and returns the product of them all: 
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function outter(arr){
    let result = 1

    function productOfArray(arr){
        // i can use an or operator to murge the two if statments since they have tje same return value
        if(arr.length === 0){
            return 0;
        }
        // if(arr[0] === 0){
        //     result = 0;
        //     return result
        // }
        if (arr[0] !==0){
            result = result * arr[0]
        }

        productOfArray(arr.slice(1))
         
    }
    productOfArray(arr)
    return result
}
outter([1,2,3,10])

//this is how recursion working behind the scenes. 

// 1 * productOfArray(arr.slice(1))
//             1 * productOfArray(arr.slice(1))
//                      1 * productOfArray(arr.slice(1))
//                               1 * productOfArray(arr.slice(1))

// let arr = [1,2,3]
// let newArr = arr.slice(1)
// console.log(newArr)
// End of problem: it was not that hard once i visualized what was happening. took about 25 min. 


