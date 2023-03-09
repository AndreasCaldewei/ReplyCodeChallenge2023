function coverMatrixWithSnakes(matrix, snakeLengths) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const snakes = [];   // Helper function to check if a given position is valid and available
    function isValidAndAvailable(row, col) {
        return (
            row >= 0 &&
            row < numRows &&
            col >= 0 &&
            col < numCols &&
            matrix[row][col] === null
        );
    }   // Helper function to generate a new snake starting from a given position
    function generateSnake(startRow, startCol, length) {
        const snake = [];
        let row = startRow;
        let col = startCol;
        let direction = 1; // 1: right, -1: left
        let remainingLength = length;     while (remainingLength > 0) {
            if (isValidAndAvailable(row, col)) {
                snake.push([row, col]);
                matrix[row][col] = snake;
                remainingLength--;
            } else {
                // Hit a wall or an existing snake, change direction
                direction *= -1;
                row += 1; // Move down to the next row
            }
            col += direction;
        }     return snake;
    }   // Try to generate snakes of the specified lengths until all lengths are covered
    let numSnakes = 0;
    while (snakeLengths.length > 0 && numSnakes < numRows * numCols) {
        const length = snakeLengths.shift();
        let row, col;     // Try to find a random empty position to start the new snake
        do {
            row = Math.floor(Math.random() * numRows);
            col = Math.floor(Math.random() * numCols);
        } while (!isValidAndAvailable(row, col));     const newSnake = generateSnake(row, col, length);
        snakes.push(newSnake);
        numSnakes++;
    }   return snakes;
}