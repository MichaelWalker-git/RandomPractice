Scan the grid
1.) Look for 1s
2.) Depth First Search
    CheckStatement =        
         - Out of boundary?
        - Is the value a 0?
        - Either yes -> Possible island.

    2a). Look Right.
        CheckStatement.
    2b). Look Left.
        CheckStatement.
    2c). Look Top.
        CheckStatement.
    2d). Look Left.
        CheckStatement.
3.) If all steps in 2 are true, then increase the counter.

Time Complexity = O(n?^2)

First attempt:
```
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    console.log(grid, "GRID")
    
    const checkBoundary = () => {
        
    }
    
    const checkX = (currX, currY, direction) => {
        const newX = currX += direction;
        if(grid[newX]){
            // console.log((grid[newX][currY]), `| [${newX}, ${currY}] , CheckX`);
            console.log(newX < 0, newX >= grid.length, ((grid[newX][currY]) !== '0'))
            return newX < 0 || newX >= grid.length || ((grid[newX][currY]) !== '0');
        }
        return false;
    }

    const checkY = (currX, currY, direction) => {
        const newY = currY += direction;
        if(grid[currX][newY]){
            // console.log((grid[currX][newY]), `| [${currX}, ${newY}] , CheckY`);
            console.log(newY < 0 , newY >= grid[currX].length, ((grid[currX][newY]) !== '0'))
            return newY < 0 || newY >= grid[currX].length || ((grid[currX][newY]) !== '0');
        }
        return false;
    }
    
    let count = 0;
    for(let i = 0; i < grid.length; i++) {
        const row = grid[i];
        for(let j = 0; j < row.length; j++){
            const horizontalChecks = checkX(i,j, 1) && checkX(i,j, -1);
            const verticalChecks = checkY(i, j, 1) && checkY(i,j, -1);
            console.log(horizontalChecks, verticalChecks, "Checks")
            if(row[j] === '1' && horizontalChecks && verticalChecks){
                count++;
            }
        }
    }    
    return count;
};
```

Revised Version:

```
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    function depthFirstSearch(grid,  row,  column) {
        const rowLen = grid.length;
        const columnLen = grid[0].length;

        grid[row][column] = '0';
        if (row - 1 >= 0 && grid[row-1][column] == '1') {
            depthFirstSearch(grid, row - 1, column)
            };
        if (row + 1 < rowLen && grid[row+1][column] == '1') {
        depthFirstSearch(grid, row + 1, column); 
        }
        if (column - 1 >= 0 && grid[row][column-1] == '1') {
            depthFirstSearch(grid, row, column - 1)};
        if (column + 1 < columnLen && grid[row][column+1] == '1') {
            depthFirstSearch(grid, row, column + 1)};
    }

    const rowLen = grid.length;
    if (!rowLen) {
      return 0;
    }
    const columnLen = grid[0].length;
    let num_islands = 0;

    for (let row = 0; row < rowLen; row++) {
      for (let column = 0; column < columnLen; column++) {
        if (grid[row][column] == '1') {
          num_islands++;
          depthFirstSearch(grid, row, column);
        }
      }
    }
    return num_islands;
  };
```

