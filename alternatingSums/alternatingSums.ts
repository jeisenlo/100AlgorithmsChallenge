function alternatingSums(a: number[]): number[] {
    let evenSum: number = 0;
    let oddSum: number = 0;

    a.forEach((num, index) => {
        if (index % 2 === 0) {
            evenSum += a[index];
        } else {
            oddSum += a[index];
        }
    });

    return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))