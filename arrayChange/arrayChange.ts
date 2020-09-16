function arrayChange(inputArray: number[]): number {
    let countOfMoves:number = 0;

    for (let i = 1; i < inputArray.length; i++) {
        // compare the current inputArray value to the prior index value
        let difference: number = inputArray[i - 1] - inputArray[i];
        if (difference >= 0) {
            countOfMoves += difference + 1;
            // update the current value
            inputArray[i] += countOfMoves;
        }
    }

    return countOfMoves;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([2, 1, 4, 5]));
console.log(arrayChange([1, 5, 2, 6]));