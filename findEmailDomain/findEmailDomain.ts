function findEmailDomain(address: string): string {
    const domainIndex: number = address.lastIndexOf('@');

    return address.slice(domainIndex + 1);
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
