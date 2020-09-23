function extractMatrixColumn(matrix: number[][], column: number): number[] {
    const result: number[] = [];

    // for (let i = 0; i < matrix.length; i++) {
    //     result.push(matrix[i][column]);
    // }

    matrix.forEach(row => result.push(row[column]));
    
    return result;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], 
                                [0, 5, 0, 4], 
                                [2, 1, 3, 6]], 2));