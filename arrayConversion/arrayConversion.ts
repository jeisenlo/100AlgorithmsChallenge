// Try to also solve this recursively

function arrayConversion(inputArray: number[]): number {
    let isOddIteration = true;

    while (inputArray.length > 1) {
        inputArray = sumOrProduct(inputArray, isOddIteration);
        isOddIteration = !isOddIteration;
    }

    return inputArray[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

function sumOrProduct(numsArray: number[], isOddIteration: boolean) {
    let sumProductArray: number[] = [];

    if (isOddIteration) {
        for (let i = 0; i < numsArray.length; i += 2) {
            sumProductArray.push(numsArray[i] + numsArray[i + 1]);
        }
    } else {
        for (let i = 0; i < numsArray.length; i += 2) {
            sumProductArray.push(numsArray[i] * numsArray[i + 1]);
        }
    }

    return sumProductArray;
}
