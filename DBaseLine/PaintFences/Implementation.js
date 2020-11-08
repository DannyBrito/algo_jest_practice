/* 
Given a fence with n posts and k colors, find out the number of ways of 
painting the fence such that at most 2 adjacent posts have the same 
color.

 * @param {number} n -> fences
 * @param {number} k -> colors
 * @return {number}

*/

export const paintFences = (fences,colors) =>{
    // if no fences avalible return 0
    if(fences === 0) return 0
    // if 1 fence return number of colors
    if(fences === 1) return colors
    // there are two cases that we need to account for the problem
    // where we have two fences of the SAME color and when there are two different COLOR continous fences.
    
    // let start with two fences of same color, we can see that for the first fences with have N = total colors avalible and for second fence is going to be same color as the first fence.
    // resulting on
    let same = colors
    // the second case where there are two fences with different colors whe can see how for the first fence with have N = total colors avalible. But for second fence we need to exclude previous color from our avalible color. This can be represented by N - 1 = colors minus previous option * previous fence option N
    let different = colors * (colors - 1)
    if(fences === 2) return same * different
    // we need to built our result by prev returns meaning we need to keep track of previous Possibilities.
    let [prevSame,prevDiff] = [same,different]
    // we are going to iterrate all necessary times to find possible results for fences starting at 3 to N fences.
    for(let i = 3; i <= fences; i++){
        // we can have our case of same color fences if and only from a prev different outcome other wise we would go over the 2 color fence limit. Meaning the same result will be equalt to previous difference fence cases
        same = prevDiff
        // in contrast for different case, it can be built from previous same and different case as we don't have constrain of going over 2 same color fences. Resulting on prevSame Cases + (N - 1 colors) to be add to prevDifferent Cases + (N -1 colors) this can be simplify on (prevSame + prevDiff) * (N - 1 colors)
        different = (prevSame + prevDiff) * (colors - 1);
        // after calculation different and same case, we need to save result for next iterration
        [prevSame,prevDiff] = [same,different]
    }

    // total possibilites can be found by adding same and different cases
    return same + different
}