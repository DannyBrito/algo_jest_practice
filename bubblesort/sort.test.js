import {bubbleSort} from './sort'

describe('Bubble Sort',()=>{
    test('testing [3,5,6,1,8] to be [1,3,5,6,8]',()=>{
       expect(bubbleSort([3,5,6,1,8])).toEqual([1,3,5,6,8]) 
    })
    test('testing [1,0,-4,1,2,1,8] to be [-4,0,1,1,1,2,8]',()=>{
       expect(bubbleSort([1,0,-4,1,2,1,8])).toEqual([-4,0,1,1,1,2,8]) 
    })
})