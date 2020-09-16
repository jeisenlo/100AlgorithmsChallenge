function alphabeticShift(inputString: string): string {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const inputArray = inputString.split('');
    let result = '';

    inputArray.forEach(letter => {
        if (letter !== 'z') {
            const letterIndex = alphabet.indexOf(letter) + 1;
            result += alphabet.charAt(letterIndex);
        } else {
            // if the letter is 'z', return 'a'
            result += 'a';
        }
    });

    return result;
}

console.log(alphabeticShift('crazy'));