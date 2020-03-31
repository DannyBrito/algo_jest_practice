var containsDuplicate = function(nums) {
    // use a object to keep track of the frequency of the characters
    let seen = {}
    for(const e of nums){
        // if existeng return true as there is duplicates
        if(seen[e]) return true
        // if char found means duplicated
        // save if character no found on seen
        seen[e] = true
    }
    return false
};