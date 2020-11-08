import {power} from './power.js'

describe('power of number',()=>{
    test('power -> 5^2',()=>{
        expect(power(5,2)).toBe(25);
    })
    test('power -> 1298484^0',()=>{
        expect(power(1298484,0)).toBe(1);
    })
})