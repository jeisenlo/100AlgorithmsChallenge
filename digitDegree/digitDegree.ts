function digitDegree(n: number): number {
    let count = 0;
    let result = n.toString();

    // Loop until the result is only 1 character
    while (result.length !== 1) {
        // Convert the result string into an array of characters
        let newArray = result.split('');
        let sum = 0;
        // Loop over the array of characters and sum
        newArray.forEach(num => {
            sum += parseInt(num);
        });

        result = sum.toString();

        count++;
    }


    return count;
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));