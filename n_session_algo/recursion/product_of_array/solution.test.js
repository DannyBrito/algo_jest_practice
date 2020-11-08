import {productOfArray} from './solution.js'

describe('productOfArray of array',()=>{
    test('productOfArray -> [1,2,3] return 6',()=>{
        expect(productOfArray([1,2,3])).toBe(6);
    })
    test('productOfArray -> [1,2,3,10] return 60',()=>{
        expect(productOfArray([1,2,3,10])).toBe(60);
    })
})