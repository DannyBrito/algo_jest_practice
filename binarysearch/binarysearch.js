export function search(arr,val){
    let left = 0
    // divide and conquer
    let right = arr.length - 1 
    while (left < right){
        let middle = Math.ceil((left+right)/2)
        if(arr[middle] === value) return middle
        else if(arr[middle] > value){
            right = middle 
        }
        else left = middle 
    }
    return -1
}