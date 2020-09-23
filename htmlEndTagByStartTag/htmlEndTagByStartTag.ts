function htmlEndTagByStartTag(startTag: string): string {
    let endTag =
			startTag.substr(1, startTag.indexOf(" ")).length > 0
				? startTag.substr(1, startTag.indexOf(" ") - 1)
				: startTag.substr(1, startTag.indexOf(">") - 1);

    endTag = `</${endTag}>`;
    
    return endTag;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))