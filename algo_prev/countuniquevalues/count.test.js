import count from './count.js'

test("count function return 2 on [1,1,1,2]",()=>{
    expect(count([1,1,1,2])).toBe(2);
})

test("count function return 6 on [1,2,3,4,4,4,5,6]",()=>{
    expect(count([1,2,3,4,4,4,5,6])).toBe(6);
})