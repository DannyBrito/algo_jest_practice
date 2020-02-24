// given two strings create a function to determine if second string is an anagram for first string.
// output true/false

export const validAnagram = function (str1,str2){
    // count frequency for both strings and
    if(str1.length !== str2.length) return false
    const frequency = {}
    // 
    for(const chr of str1){
        frequency[chr] = (frequency[chr] || 0) + 1
    }

    for(const chr of str2){
        if(!frequency[chr]) return false
        else{
            frequency[chr] -= 1
        }
    }

    return true
}