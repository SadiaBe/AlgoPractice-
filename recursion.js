

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
    let result = []
    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}




