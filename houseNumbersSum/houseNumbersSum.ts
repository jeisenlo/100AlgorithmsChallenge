function houseNumbersSum(inputArray: number[]): number {
    let houseSum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === 0) {
            // The boy got distracted so we are done
            break;
        }
        // Add to the sum
        houseSum += inputArray[i];
    }

    return houseSum;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));