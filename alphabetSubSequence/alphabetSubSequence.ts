function alphabetSubsequence(s: string): boolean {
    const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    const inputArray: string[] = s.split('');
    let priorLetterIndex: number = 0;

    for (let i = 0; i < inputArray.length; i++) {
        let currentLetterIndex = alphabet.indexOf(inputArray[i]);

        if (currentLetterIndex <= priorLetterIndex && priorLetterIndex !== 0) {
            return false;
        }
        priorLetterIndex = currentLetterIndex;
    };

    return true;
}

/*
    You could also use charCodeAt() method returns an integer between 0 and 65535 representing 
    the UTF-16 code unit at the given index. 
*/
console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
