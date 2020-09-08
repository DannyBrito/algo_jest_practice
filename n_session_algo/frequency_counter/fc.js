// using frequency counter strategy when need to compare different inputs on problem - with the compromise of memory.
// the strat consist of creating objects/sets to track the different outputs for fast comparation times.

// an example where to use the strat could be to check if two array have the inputs with same frequencies.

//function: accepts 2 inputs and checks if 2nd input is power 2 of 1st input, and has same frequencies in both arrays.

export const sameFrequency = (arr1,arr2) =>{

    if(arr1.length !== arr2.length) return false

    let frequency1 = {}
    let frequency2 = {}

    for(const val of arr1)frequency1[val] = (frequency1[val] || 0) + 1
    for(const val of arr2)frequency2[val] = (frequency2[val] || 0) + 1

    for(const key in frequency1){
        if(!(key**2 in frequency2) || frequency2[key**2] !== frequency1[key]) return false
    }
    return true
}