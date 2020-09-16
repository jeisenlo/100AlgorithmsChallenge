function avoidObstacles(inputArray: number[]): number {
    // sort the array
    inputArray = inputArray.sort((a, b) => a - b);
    // get the largest value in the array
    const largestArrayValue = inputArray[inputArray.length - 1];

    // loop from 1 until the largest value in the array + 1
    // any number % 0 is NaN, so start loop at index of 1
    /* 
        Why are we looping up to largestArrayValue + 1??? 
        Because if there are no possible jumps, we need to be able to jump past all the obstacles
    */
    for (let i = 1; i <= largestArrayValue + 1; i++) {
        // if there is a remainder, we have missed the obstacle
        const avoidedObstacles = inputArray.every(obstacle => obstacle % i !== 0);
        if (avoidedObstacles) {
            return i;
        }
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
console.log(avoidObstacles([1, 1, 1, 1, 1]));

console.log(1 % 0);