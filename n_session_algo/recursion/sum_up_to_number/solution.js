
export const sumNumberTo = number =>{
    if(number <=1) return 1
    return number + sumNumberTo(number-1)
}