
export const validAnagram = (str1,str2) =>{
    if(str1.length !== str2.length) return false
    let frequency = {}
    for(const val of str1) frequency[val] = (frequency[val] || 0 ) + 1

    for(const val of str2){
        if(!frequency[val]) return false
        else --frequency[val]
    }
    
    return true
}