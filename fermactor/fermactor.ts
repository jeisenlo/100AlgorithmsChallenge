function fermactor(n: number): number[] {
	/*
        Math.pow() function returns the base to the exponent power, that is, base^exponent.
    */
   for (let i = 1; i < n; i++) {
       for (let j = 1; j < i; j++) {
            const total = Math.pow(i, 2) - Math.pow(j, 2);
            // const total = i ** 2 - j ** 2; // <-- new way

            if (total === n) {
                return [i, j];
            }
        }
   }
}

console.log(fermactor(15));