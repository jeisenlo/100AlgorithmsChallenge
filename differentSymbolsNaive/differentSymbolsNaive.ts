function differentSymbolsNaive(s: string): number {
    const sArray: string[] = s.split('');

    // Extract the unique characters
    const uniqueChars = sArray.filter((char, index) => {
        return sArray.indexOf(char) === index;
    });

    return uniqueChars.length;
}

function differentSymbolsNaive2(s: string): number {
    const sArray: string[] = s.split("");
    const uniqueChars: string[] = [];

	sArray.forEach(char => {
        if (!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        }
    });

    return uniqueChars.length;
}

function differentSymbolsNaive3(s: string): number {
	/*
        Set object lets you store unique values of any type, 
        whether primitive values or object references.
    */
    const uniqueChars = new Set(s);

	return uniqueChars.size;
}

console.log(differentSymbolsNaive('cabca'));
console.log(differentSymbolsNaive2("cabca"));
console.log(differentSymbolsNaive3("cabca"));