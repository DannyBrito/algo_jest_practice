import {sumNumberTo} from './solution.js'

describe('sumNumberTo #',()=>{
    test('sumNumberTo -> 6 return 21',()=>{
        expect(sumNumberTo(6)).toBe(21);
    })
    test('sumNumberTo -> 10 return 55',()=>{
        expect(sumNumberTo(10)).toBe(55);
    })
})