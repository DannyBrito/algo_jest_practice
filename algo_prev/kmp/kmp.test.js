import {lsp,findSubpathInText} from './kmp'

describe('lsp helper method to return longest prefix and suffix for pattern for',()=>{
    test(`'ajpmajx' to be [0,0,0,0,1,2,0]`,()=>{
        const result = lsp('ajpmajx')
        expect(result).toEqual([0,0,0,0,1,2,0])
    })   
})

describe('findSubpathInText( kmp to find if substring in text)',()=>{
    test(`'ajpmajx' on 'lsxeajpmxxajpmajx' to be true`,()=>{
        expect(findSubpathInText('lsxeajpmxxajpmajx','ajpmajx')).toBeTruthy()
    })
    test(`'lol' on 'lsxeajpmxxajpmajx' to be false`,()=>{
        expect(findSubpathInText('lsxeajpmxxajpmajx','lol')).toBeFalsy()
    })  
})
