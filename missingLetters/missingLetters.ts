function missingLetters(str: string): string {
    const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    const startIndex: number = alphabet.indexOf(str[0]);
    const alphabetSubstring: string = alphabet.slice(startIndex, str.length + 1);

    if (str === alphabetSubstring) {
        return undefined;
    }

    for (let i = startIndex; i < str.length; i++) {
        if (alphabetSubstring[i] !== str[i]) {
            return alphabetSubstring[i];
        }
    }

}
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));