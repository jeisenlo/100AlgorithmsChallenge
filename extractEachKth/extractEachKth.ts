function extractEachKth(inputArray:number[], k: number): number[] {
    // k starts at 1 so we need to add 1 to index for comparison
    return inputArray.filter((num, index) => (index + 1) % k !== 0);
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));