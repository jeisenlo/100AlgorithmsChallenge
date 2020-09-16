function isCaseInsensitivePalindrome(inputString: string): boolean {
    const lcInputString = inputString.toLowerCase();
    const reverseString = lcInputString.split('').reverse().join('');

    // Is the string a palindrome?
    if (lcInputString === reverseString) {
        return true;
    }

    return false;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));