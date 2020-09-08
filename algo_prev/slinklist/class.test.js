import {SingleLinkedList} from './class.js'

describe('Push method for linkedLikst',()=>{
    let newLl = new SingleLinkedList()
    test('testing newLl.push(1) on an empty single linkedlist',()=>{
        newLl.push(1)
       expect(newLl.head).toEqual({next:null,val:1})
    })
    test('after executing push method,length of Ll should increase by 1',()=>{
       expect(newLl.length).toBe(1)
    })
    test('pop method should return',()=>{
       expect(newLl.pop()).toEqual({next:null,val:1})
    })
    test('length after pop should be 0',()=>{
       expect(newLl.length).toBe(0)
    })
})