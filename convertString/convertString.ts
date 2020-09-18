function convertString(s: string, t: string): boolean {
    let tIndex = 0;
    let word = '';
    
    // Loop over the longest string which is s
    for (let i = 0; i < s.length; i++) {
        // if the character in s matches the character in t
        if (s[i] === t[tIndex]) {
            // add the character in s to word
            word += s[i];
            // increment the count for t
            tIndex++;

            // If word === t then return true
            if (word === t) {
                return true;
            }
        }
    }

    return false;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
