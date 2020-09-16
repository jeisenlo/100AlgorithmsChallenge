function almostIncreasingSequence(sequence: number[]): boolean {
    let countOfNumsNotInSequence = 0;

    for (let i = 0; i < sequence.length - 1; i++) {
        // if the current number is greater than or equal to the next number
        if (sequence[i] >= sequence[i + 1]) {
            countOfNumsNotInSequence++;
            // If the prior number is greater than or equal to the next number
            if (sequence[i - 1] >= sequence[i + 1]) {
                return false;
            }
        }
    }

    return countOfNumsNotInSequence <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 1, 2])); 
console.log(almostIncreasingSequence([1, 3, 2])) 
console.log(almostIncreasingSequence([8, 11, 6, 7, 14]));  
console.log(almostIncreasingSequence([4, 1, 2, 3 ])); 
console.log(almostIncreasingSequence([3, 2, 4])); 