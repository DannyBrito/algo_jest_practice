// Given a string count each character and return results only alphanumeric

export const countCharInString = function(str){
    let results = {}
    for(let char of str){
        if(/[a-z0-9]/i.test(char)){
            char = char.toLowerCase()
            results[char] = (results[char] || 1) + 1
        }
    }
    return results
}
