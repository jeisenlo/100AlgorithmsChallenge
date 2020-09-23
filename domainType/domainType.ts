function domainType(domains: string[]): string[] {
    const domainTypes: string[] = [];
    const domainTypeMap = {
        'com': 'commerical',
        'org': 'organization',
        'net': 'network',
        'info': 'information',
    };

    for (let i = 0; i < domains.length; i++) {
        // Convert domain into array split by '.'
        const domainArray: string[] = domains[i].split('.');
        // Get the last element in the domainArray
        const domainEnding: string = domainArray[domainArray.length - 1];
        // Get domain type by referencing domainTypeMap with last item in domainArray
        domainTypes.push(domainTypeMap[domainEnding]);
    }

    return domainTypes;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));