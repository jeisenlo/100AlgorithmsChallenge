function palindromeRearranging(inputString: string): boolean {
    const inputArray: string[] = inputString.split('');
    let charCounts = {};
    let oddCharsCount = 0;

    /* 
        Looping over inputArray and inserting it into charCounts obj
        to keep count of each character
    */
    for (let i = 0; i < inputArray.length; i++) {
        const currentChar = inputArray[i];
        if (charCounts.hasOwnProperty(currentChar)) {
            charCounts[currentChar]++;
        } else {
            charCounts[currentChar] = 1;
        }
    }
    // Find total count of characters that are in the inputString an odd number of times
    for (let key in charCounts) {
        if (charCounts[key] % 2 !== 0) {
            oddCharsCount++;
        }
    }
    
    // Palindromes can only have up to 1 character an odd number of times
    return oddCharsCount > 1 ? false : true;
}

console.log(palindromeRearranging('aabb'));
console.log(palindromeRearranging("radar"));
console.log(palindromeRearranging("moonooe"));