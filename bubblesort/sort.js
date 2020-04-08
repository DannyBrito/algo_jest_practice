function bubbleSort(arr){
    // swap to order
    for(let i = arr.length; i > 0; i--){
        let notSwap = true
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                notSwap = false
            }
        }
        if(notSwap) break
    }
    return arr
}


export {bubbleSort}