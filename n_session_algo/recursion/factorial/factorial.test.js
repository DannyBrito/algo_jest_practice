import {factorial} from './factorial'

describe('factorial - recursive',()=>{
    test('factorial 5! to be 120',()=>{
        expect(factorial(5)).toBe(120);
    })
})