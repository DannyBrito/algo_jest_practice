import {validAnagram} from './anagramchecker.js'

test("validAnagram function return true on'car','rca",()=>{
    expect(validAnagram('car','rca')).toBeTruthy();
})
test("validAnagram function return true on 'zaa','aaz' ",()=>{
    expect(validAnagram('zaa','aaz')).toBeTruthy();
})
test("validAnagram function return false on 'daa','dda'",()=>{
    expect(validAnagram('daa','dda')).toBeFalsy();
})