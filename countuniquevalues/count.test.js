import count from './count.js'

test("count function return 2 on [1,1,1,2]",()=>{
    expect(count([1,1,1,2])).toBe(2);
})