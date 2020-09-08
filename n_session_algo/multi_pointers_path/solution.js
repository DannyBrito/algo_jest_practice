// mutiple pointer path used to track different position within input the pointer will move from beginning, end, middle depending on problem conditions. Effective for minimal space complexity.

// function to check sorted input for values that added up to 0

export const sumZero = arr =>{
    let left = 0
    let right = arr.length - 1
    let sum
    while(left < right){
        sum = arr[left] + arr[right]
        if(sum === 0) return [arr[left],arr[right]]
        else if(sum > 0) right--
        else left++
    }
}

export const countUniqueValues = arr =>{
    if(!arr || !arr.length) return 0

    let pointer = 0
    for(let i = 1; i <  arr.length; i++){
        if(arr[pointer] !== arr[i]) arr[++pointer] = arr[i]
    }
    return pointer + 1
}