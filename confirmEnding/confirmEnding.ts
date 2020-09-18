function confirmEnding(str: string, target: string) {
    /* 
        substr() method returns a portion of the string, 
        starting at the specified index and extending for 
        a given number of characters afterwards.
        In ES2015, can use .endsWith()
    */
    return (
        // target === str.substr(str.length - target.length) --> check will go to end of string with 2nd param
        target === str.substr(str.length - target.length, str.length)
    );
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
console.log(confirmEnding("same", "samejoe"));