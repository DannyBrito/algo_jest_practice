// longest string pattern
function lsp(pattern){
    let result = []
    let left = 0
    let right = 1
    // at index 0 always 0
    result[left] = 0
    while(right < pattern.length){
        if(pattern[left] === pattern[right]){
            left++
            result[right] = left
            right++
        }
        else{
            if(left !== 0){
                left = result[left-1]
            }
            else{
                result[right] = 0
                right++
            }
        }

    }
    return result
}

// check if pattern is on text
function findSubpathInText(text,pattern){
    const result = lsp(pattern)
    let pointerText = 0
    let pointerPat = 0

    while(pointerText < text.length && pointerPat < pattern.length){
        if(text[pointerText] === pattern[pointerPat]){
            pointerPat++
            pointerText++
        }
        else{
            if(pointerPat === 0) pointerText++
            else pointerPat = result[pointerPat-1]
        }
    }
    if(pointerPat === pattern.length) return true
    return false
}


export {lsp, findSubpathInText}