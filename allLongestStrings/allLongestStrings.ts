function allLongestStrings(inputArray: string[]): string[] {
    let lengthOfLongestString = 0;
    let longestStringsArray = [];

    // Using a for loop
    // for(let i = 0; i < inputArray.length; i++) {
    //     if (inputArray[i].length > lengthOfLongestString) {
    //         lengthOfLongestString = inputArray[i].length;
    //         longestStringsArray = [];
    //         longestStringsArray.push(inputArray[i]);
    //     } else if (inputArray[i].length === lengthOfLongestString) {
    //         longestStringsArray.push(inputArray[i]);
    //     }
    // }

    inputArray.forEach((item: string) => {
        if (item.length > lengthOfLongestString) {
            lengthOfLongestString = item.length;
            longestStringsArray = [];
            longestStringsArray.push(item);
        } else if (item.length === lengthOfLongestString) {
            longestStringsArray.push(item);
        }
    });

    return longestStringsArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));