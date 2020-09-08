// [1,1,3,4,4,6] -> 4 -- [1,3,4,6]
export const countUniqNumbers = function (arr){
    let left = 0
    for(let next = 1; next < arr.length; next++){
        if(arr[left] !== arr[next]){
            left++
            arr[left] = arr[next]
        }
    }
    return left + 1
}
