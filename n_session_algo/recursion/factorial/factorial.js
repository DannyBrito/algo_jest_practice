// Recursion has two important sections, a base case as ending condition for the function and a recursive call
export const factorial = num =>{
    if(num <= 1) return 1
    return num * factorial(num - 1)
}