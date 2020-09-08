
import {validAnagram} from './solution'

test("validAnagram function return true on '' - '' ",()=>{
    expect(validAnagram('','')).toBeTruthy();
})
test("validAnagram function return false on 'aaz' - 'zza' ",()=>{
    expect(validAnagram('aaz','zza')).toBeFalsy();
})
test("validAnagram function return true on 'anagram' - 'nagaram' ",()=>{
    expect(validAnagram('anagram','nagaram')).toBeTruthy();
})
test("validAnagram function return false on 'awesome' - 'awesom' ",()=>{
    expect(validAnagram('awesome','awesom')).toBeFalsy();
})