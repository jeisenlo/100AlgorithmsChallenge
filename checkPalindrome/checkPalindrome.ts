function checkPalindrome(inputString: string): boolean {
    const lcInputString = inputString.toLowerCase();
    const lcReversedString = lcInputString.split('').reverse().join('');

    return lcInputString === lcReversedString;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
