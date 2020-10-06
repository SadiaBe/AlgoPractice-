
function validAnagram(str1,str2){
    // add whatever parameters you deem necessary - good luck!
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