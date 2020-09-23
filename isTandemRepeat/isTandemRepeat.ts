function isTandemRepeat(inputString: string): boolean {
    const halfIndex: number = inputString.length / 2;
    const firstHalf: string = inputString.slice(0, halfIndex);
    const secondHalf: string = inputString.slice(halfIndex);

    return firstHalf === secondHalf;
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
