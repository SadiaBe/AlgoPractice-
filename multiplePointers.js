function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


sumZero([-4,-3,-2,-1,0,1,2,5])


// refactor
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}






//this is my way of answering using the frequency counter pattern

function countUnique(arr) {
    let newObj = {}
    for (let val of arr) {
        newObj[val] = (newObj[val] || 0) + 1
    }
    return Object.keys(newObj).length
}

countUnique([1,1,1,1,1,2])
countUnique([1,2,3,4,4,4,7,7,12,12,13])


// trying to solve using multiple pointers using his guide : did it! 
function countUniqueValues(arr ){
    let left = 0
    let right = left + 1
    for (let val of arr){
        if (arr[left] === arr[right]) {
            right +=1 
        }
        else if(arr[left] != arr[right]){
            left++
            arr[left] === arr[right]
        }
        else {
            return "hi"
        }   
    }
    return left + 1
     // add whatever parameters you deem necessary - good luck!
}
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])



//this is how he solved it:
// function countUniqueValues(arr){
//     if(arr.length === 0) return 0;
//     var i = 0;
//     for(var j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1;
// }
// countUniqueValues([1,2,2,5,7,7,99])



// my original thought process:
function countUnique(arr){
    let left = 0
    let right = left + 1

    for (let val of arr){
       if (arr[left] != arr[right]){
            arr[left] === arr[right]
            right +1
        }
    }
    return left + 1
}
countUnique([1,1,1,1,1,2])