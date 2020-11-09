import {findPossibleWays} from './Implementation'

describe('findPossibleWays',()=>{
    test("[[1,0,1],[1,1,1],[0,0,1]] expected 1" ,()=>{
        expect(findPossibleWays([[1,0,1],[1,1,1],[0,0,1]])).toBe(1)
    })
    test("[[1,0,1],[1,0,1],[0,0,1]] expected 0" ,()=>{
        expect(findPossibleWays([[1,0,1],[1,0,1],[0,0,1]])).toBe(0)
    })
    test("[[1,1,1],[1,1,1],[1,1,1]] expected 0" ,()=>{
        expect(findPossibleWays([[1,1,1],[1,1,1],[1,1,1]])).toBe(6)
    })
})
