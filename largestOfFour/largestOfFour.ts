function largestOfFour(nums: number[][]): number[] {
    const largestNums: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        // Sort the row from largest to smallest numbers
        const sortedRow = nums[i].sort((a, b) => b - a);
        // Add the largest number to the largestNums array
        largestNums.push(sortedRow[0]);
    }

    return largestNums;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));