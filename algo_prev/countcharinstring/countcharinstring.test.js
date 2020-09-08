import {countCharInString} from './countcharinstring.js'

test("'Hello' and 'h(&^^*% ello\" ' to return object: {h:1,e:1,l:2,o:1}",()=>{
    expect(countCharInString('Hello')).toEqual({h:1,e:1,l:2,o:1});
})

test("'h(&^^*% ello\" ' to return object: {h:1,e:1,l:2,o:1}",()=>{
    expect(countCharInString('h(&^^*% ello" ')).toEqual({h:1,e:1,l:2,o:1});
})
