// need to find number of possibles ways to reach to bottom-right corner
// of matrix starting from top-left corner. You can only move to right 
// or bottom. The input matrix given will represent the map/path to travel filled with either a 1 or 0. 1 meaning you can access the cell and 0 the cell is block and you need to find other path.

/*
[
    [1,0,1],
    [1,1,1],
    [0,0,1],
]
return should be 1 as there is only one avalible path to go from start 
to end

 * @param {2D Array[Number]} matrix
 * @return {number}
 * 
*/

export const findPossibleWays = matrix =>{
    let rows = matrix.length
    let columns = matrix[0].length
    let dp = [...new Array(rows)].map(x => new Array(columns).fill(0))

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            if(matrix[i][j] !== 0){
                if(i > 0 && j > 0){
                    dp[i][j] = dp[i-1][j] + dp[i][j-1]
                }
                else if(i === 0 && j === 0) dp[i][j] = 1
                else{
                    dp[i][j] = dp[validateIndex(i-1)][j] + dp[i][validateIndex(j-1)]
                }
            }
        }
    }

    return dp[rows-1][columns-1]
}

const validateIndex = i => i < 0 ? 0 : i