import {fib} from './solution.js'

describe('fib #',()=>{
    test('fib of 2 to be 1',()=>{
        expect(fib(2)).toBe(1);
    })
    test('fib of 35 to be 9227465',()=>{
        expect(fib(35)).toBe(9227465);
    })
    test('fib of 10 to be 55',()=>{
        expect(fib(10)).toBe(55);
    })
})