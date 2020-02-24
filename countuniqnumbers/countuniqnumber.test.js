import {countUniqNumbers} from './countuniqnumber.js'

test("countUniqNumbers function return 2 on [1,1,1,2]",()=>{
    expect(countUniqNumbers([1,1,1,2])).toEqual(2);
})
test("countUniqNumbers function return 4 on [2,4,5,5,7]",()=>{
    expect(countUniqNumbers([2,4,5,5,7])).toEqual(4);
})
test("countUniqNumbers function return 1 on [3,3,3] ",()=>{
    expect(countUniqNumbers([3,3,3])).toEqual(1);
})
test("countUniqNumbers function return 7 on [1,1,2,3,3,3,4,5,6,7,7,7] ",()=>{
    expect(countUniqNumbers([1,1,2,3,3,3,4,5,6,7,7,7])).toEqual(7);
})