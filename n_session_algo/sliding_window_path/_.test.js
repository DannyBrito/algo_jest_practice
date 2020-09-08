import {maxSubarraySum} from './solution'

describe('maxSubarraySum',()=>{
    test('[2,6,9,2,1,8,5,6,3] to be 19',()=>{
        expect(maxSubarraySum([2,6,9,2,1,8,5,6,3],3)).toBe(19)
    })
    test('[] to be NULL',()=>{
        expect(maxSubarraySum([],3)).toBeNull()
    })
})