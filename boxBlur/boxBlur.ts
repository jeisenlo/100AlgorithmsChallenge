function boxBlur(image: number[][]): number[][] {
    let res = [];

    // loop over y axis and avoid the edges
    for (let y = 0; y < image.length - 2; y++) {
        let line = [];
        // loop over the x axis and avoid the edges
        for (let x = 0; x < image[y].length - 2; x++) {
            let sum = 0;
            let count = 0;

            // Now we need to loop over each 3 x 3 grid
            for (let y2 = y; y2 < y + 3; y2++) {
                for (let x2 = x; x2 < x + 3; x2++) {
                    sum += image[y2][x2];
                    count++;
                }
            }
            // store each line's values
            line.push(Math.floor(sum / count));
        }
        res.push(line);
    }
    return res;
}

// should be [[1]]
console.log(boxBlur([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));

// should be [[40, 30]]
console.log(
	boxBlur([
		[36, 0, 18, 9],
		[27, 54, 9, 0],
		[81, 63, 72, 45],
	])
);

/* should be [
    [5, 4],
    [4, 4]
]
*/
console.log(
	boxBlur([
		[7, 4, 0, 1],
		[5, 6, 2, 2],
        [6, 7, 10, 8],
        [1, 4, 2, 0],
	])
);