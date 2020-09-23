function evenDigitsOnly(n: number): boolean {
    const nums = n.toString().split('');

    // for (let i = 0; i < nums.length; i ++) {
    //     if (parseInt(nums[i]) % 2 !== 0) {
    //         return false;
    //     }
    // }

    return nums.every(num => parseInt(num) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));