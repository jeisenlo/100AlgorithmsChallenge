function matrixElementsSum(matrix: any[][]): number {
    let suitableRoomsCost: number = 0;

    // First row of matrix has no haunted rooms of above it
    suitableRoomsCost += matrix[0].reduce((acc, curr) => acc + curr);

    for (let i = 1; i < matrix.length; i++) {

        suitableRoomsCost += matrix[i].reduce((acc, curr, idx) => {
            return matrix[i - 1][idx] !== 0 ? acc + curr : acc;
        }, 0); // <-- Requires the initial value parameter for idx to start at zero

    }

    return suitableRoomsCost;
}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));
