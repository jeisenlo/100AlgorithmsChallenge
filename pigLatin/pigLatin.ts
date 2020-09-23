function pigLatin(str: string): string {
    const vowels: string = "aeiou";

    // If the string starts with a vowel, return it with "way" appended
    if (vowels.includes(str[0])) {
        return str + "way";
    }

    /*
        shift() method removes the first element from an array 
        and returns that removed element. This method changes 
        the length of the array.
    */
    let pigLatin: string[] = str.split('');
    let suffix: string = '';

    // Loop over the string until a vowel is found
    while (!vowels.includes(pigLatin[0])) {
        // Remove the consonant from the first position of the array
        suffix += pigLatin.shift();
    }

    return pigLatin.join('') + suffix + "ay";
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
