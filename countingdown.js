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

