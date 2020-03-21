var containsDuplicate = function(nums) {
    let seen = {}
    for(const e of nums){
        if(seen[e]) return true
        seen[e] = true
    }
    return false
};