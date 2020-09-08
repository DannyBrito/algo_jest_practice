import {sumZero,countUniqueValues} from './solution'

describe('sumZero',()=>{
    test("run on [-3,-2,0,1,2,3,5] to be [-3,3] ",()=>{
        expect(sumZero([-3,-2,0,1,2,3,5])).toEqual([-3,3])
    })
    test("run on [-2,0,1,3,5] to be undefined",()=>{
        expect(sumZero([-2,0,1,3,5])).toBeUndefined()
    })
})

describe('countUniqueValues',()=>{
    test("run on [1,1,1,1,1,2] return 2",()=>{
        expect(countUniqueValues([1,1,1,1,1,2])).toBe(2)
    })
    test("run on [1,2,3,4,4,4,7,7,12,12,13] return 7",()=>{
        expect(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])).toBe(7)
    })
})