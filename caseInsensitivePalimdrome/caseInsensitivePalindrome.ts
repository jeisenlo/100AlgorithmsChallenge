function isCaseInsensitivePalindrome(inputString: string): boolean {
    const lcInputString = inputString.toLowerCase();
    const lcReverseString = lcInputString.split('').reverse().join('');

    // Is the lowercase string a palindrome?
    return lcInputString === lcReverseString;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));