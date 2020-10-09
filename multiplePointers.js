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
        newObj[val] = [newObj[val] || 0] +1
    }
    return Object.keys(newObj).length
}

countUnique([1,1,1,1,1,2])
countUnique([1,2,3,4,4,4,7,7,12,12,13])