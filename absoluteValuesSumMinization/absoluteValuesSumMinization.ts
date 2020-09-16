// return the median value of the array
function absoluteValuesSumMinimization(a: number[]): number {
    // is the array have an even number of items?
    const isEven = a.length % 2 === 0;

    // if the array has an even number of items, we need to return the previous position
    // if the array has an odd number of items, we need to return a whole number
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)]
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));