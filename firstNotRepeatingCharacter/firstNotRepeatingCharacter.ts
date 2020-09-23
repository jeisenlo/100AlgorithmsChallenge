function firstNotRepeatingCharacter(s: string): string {
    let dups = {};

    for (let i = 0; i < s.length; i++) {
        /* 
            If this character is not in dups 
            AND the lastIndexOf this character equals the current index
        */
        if (!dups.hasOwnProperty(s[i]) 
            && s.lastIndexOf(s[i]) === i) {
            return s[i];
        }
        // Create a property in dups for this character
        dups[s[i]] = s[i];
    }

    return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
