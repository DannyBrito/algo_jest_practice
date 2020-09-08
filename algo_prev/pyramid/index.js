const pyramid = (n,row = 0,level = '') => {
    let len = n * 2 - 1
    let mid = Math.floor(len/2)
    if(n === row)return
    if(len === level.length){
        console.log(level)
        return pyramid(n,row+1)
    }
    const add = (level.length >= mid - row && level.length <= mid + row)? '#':' '
    pyramid(n,row,level + add)
}