// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1


//this is my simple solution, has O(n) time complexity so not so bad

function search(arr, num){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === num){
            return i
        }
    }
    return -1;
}


//this has Time Complexity - Log(N) (less than O(n))- Binary Search *much better way to do it
function search(array, val) {
 
    let min = 0;
    let max = array.length - 1;
 
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];
 
        if (array[middle] < val) {
            min = middle + 1;
        }
        else if (array[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
 
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)