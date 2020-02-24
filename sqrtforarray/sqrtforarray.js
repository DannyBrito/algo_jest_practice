// create function that compares two arrays looking for the original value and sqrt on other array and has same frequency return true/false
export const same = function (baseArray,sqrtArray){
    // get frequency of base array and store it
    if(baseArray.length !== sqrtArray.length) return false
    let frequencyBase = {}
    let frequencySqrt = {}
    for(let number of baseArray){
        frequencyBase[number] = (frequencyBase[number] || 1) + 1
    }
    // iterrate over sqrtarray and check for frequency
    for(let number of sqrtArray){
        number = Math.sqrt(number)
        frequencySqrt[number] = (frequencyBase[number] || 1) + 1
    }
    // compare array for last return false/true

    for(const key in frequencyBase){
        if (frequencyBase[key] !== frequencySqrt[key])return false
    }
    return true
}

// Alternative of Math.sqrt just compare square of n on last for loop