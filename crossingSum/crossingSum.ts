function crossingSum(matrix: number[][], a: number, b: number): number {
    let rowA = 0;
    let columnB = 0;

    // Loop over the main array
    for (let x = 0; x < matrix.length; x++) {
        // Loop inside each nested array
        for (let y = 0; y < matrix[x].length; y++) {
            // If the row x equals a
            if (x === a) {
                rowA += matrix[x][y];
            }
            // If column y equals b AND row x does not equal a
            if (y === b && x !== a) {
                columnB += matrix[x][y];
            }

        }

    }

    return rowA + columnB;
}

function crossingSum2(matrix: number[][], a: number, b: number): number {
	/*
        reduce() method executes a reducer function (that you provide) 
        on each element of the array, resulting in single output value.
        const array1 = [1, 2, 3, 4];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
    */
	const rowA = matrix[a].reduce((a, b) => a + b);
	let columnB = 0;

	for (let i = 0; i < matrix.length; i++) {
		// When we are not looping over row a, add the value at column b
		columnB += i !== a ? matrix[i][b] : 0;
	}

	return rowA + columnB;
}

console.log(crossingSum([[1, 1, 1, 1], 
                        [2, 2, 2, 2], 
                        [3, 3, 3, 3]], 1, 3));

console.log(
	crossingSum2(
		[
			[1, 1, 1, 1],
			[2, 2, 2, 2],
			[3, 3, 3, 3],
		],
		1,
		3
	)
);