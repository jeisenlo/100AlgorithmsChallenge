function flattenArray(arr: any[]): any[] {

    return flatDeep(arr, Infinity);

}
/*
    flat() method creates a new array with all sub-array 
    elements concatenated into it recursively up to the specified depth.

    slice() method returns a shallow copy of a portion of an array 
    into a new array object selected from start to end (end not included) 
    where start and end represent the index of items in that array. 
    The original array will not be modified.
    If start is undefined, slice starts from the index 0.
    If end is omitted, slice extracts through the end of the sequence (arr.length).
*/
// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, depth = 1) {
   return depth > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, depth - 1) : val), []) : arr.slice();
};

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
