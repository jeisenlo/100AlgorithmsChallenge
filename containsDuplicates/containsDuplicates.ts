function containsDuplicates(a: number[]): boolean {

    // If all numbers have an indexOf value equal to their index
    // Then, there is no duplicate value
    let uniqueNumsArray: number[] = a.filter((num, index) => {
        return a.indexOf(num) === index;
    });
    // If the lengths of the arrays are equal then no duplicates exist
    return uniqueNumsArray.length === a.length;

}

function containsDuplicates2(a: number[]): boolean {
    const uniqueNums: number[] = [];

    a.forEach((num) => {
        if (!uniqueNums.includes(num)) {
            uniqueNums.push(num);
        }
    });

    return uniqueNums.length === a.length;

}

function containsDuplicates3(a: number[]): boolean {
    // Sort the values
    a = a.sort((a, b) => a - b);
    
    for (let i = 0; i < a.length; i++) {
        // If any value is equal to the next value in array
        if (a[i] === a[i + 1]) {
            return true;
        }
    }

    return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));

console.log(containsDuplicates2([1, 2, 3, 1]));
console.log(containsDuplicates2([3, 1]));

console.log(containsDuplicates3([1, 2, 3, 1]));
console.log(containsDuplicates3([3, 1]));
