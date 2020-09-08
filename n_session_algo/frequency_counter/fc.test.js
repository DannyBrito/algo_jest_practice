import {sameFrequency} from './fc.js'

test("sameFrequency function return true on [1,2,3,2,5] - [9,1,4,4,11]",()=>{
    expect(sameFrequency([1,2,3,2,5],[9,25,4,4,1])).toBeTruthy();
})
test("sameFrequency function return true on [3,2,5] - [9,1,4,4,11]",()=>{
    expect(sameFrequency([3,2,5],[1,4,11])).toBeFalsy();
})
test("sameFrequency function return false on [] - [4,4]",()=>{
    expect(sameFrequency([],[4,4])).toBeFalsy();
})
test("sameFrequency function return false on [2,2,1,6] - [1,36,4,4]",()=>{
    expect(sameFrequency([2,2,1,6],[1,36,4,4])).toBeTruthy();
})