function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    const yourStrongest: number = yourLeft >= yourRight ? yourLeft : yourRight;
    const yourWeakest: number = yourLeft <= yourRight ? yourLeft : yourRight;
    const friendsStrongest: number = friendsLeft >= friendsRight ? friendsLeft : friendsRight;
    const friendsWeakest: number = friendsLeft <= friendsRight ? friendsLeft : friendsRight;

    return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
