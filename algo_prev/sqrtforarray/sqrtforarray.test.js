import {same} from './sqrtforarray.js'

test("same function return true on [1,2,3] - [4,9,1]",()=>{
    expect(same([1,2,3],[4,9,1])).toBeTruthy();
})
test("same function return true on [1,1,2,3] - [4,9,1]",()=>{
    expect(same([1,1,2,3],[4,9,1])).toBeFalsy();
})