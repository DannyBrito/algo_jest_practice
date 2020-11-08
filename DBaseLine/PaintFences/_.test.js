import {paintFences} from './Implementation'

describe('paintFences',()=>{
    test("run on fences = 0, colors = 5  expected 0",()=>{
        expect(paintFences(0,5)).toBe(0)
    })
    test("run on fences = 1, colors = 30 expected 30",()=>{
        expect(paintFences(1,30)).toBe(30)
    })
    test("run on fences = 2, colors = 8 expected 64",()=>{
        expect(paintFences(2,8)).toBe(64)
    })
    test("run on fences = 3, colors = 2 expected 6",()=>{
        expect(paintFences(3,2)).toBe(6)
    })
})
