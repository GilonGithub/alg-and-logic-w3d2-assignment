// Write an algorithm that performs binary search on a given array.

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 26, 27, 29]

const binarySearch = function(arr, target) {

    if(arr.length === 1 && arr[0] === target) {
        return `${target} found`;
    } else if (arr.length === 1 && arr[0] != target) {
        return 'Not found';
    } else {
        let first = 0;
        let last = arr.length - 1;
        let middle = Math.trunc((first + last)/2);

        if(target > arr[middle]) {
            first = middle + 1; 
        } else if(target <= arr[middle]) {
            last = middle;
        }

        return binarySearch(arr.slice(first, last + 1), target);

    }

    //first index should be 0
    //last index should be the length of the array minus 1
    //middle index is (first index + last index)/2; remove the fractional part/decimal part

    //COMPARE the element of the array in the middle with the target
        //A. if target is greater than the middle element, then first index = middle index + 1
        //B. if target is less than the middle element, then the last index = middle
    //middle index is (first index + last index)/2    

};


console.log(binarySearch(testArray, 1)); //found
console.log(binarySearch(testArray, 7)); //found
console.log(binarySearch(testArray, 11)); //Not found
console.log(binarySearch(testArray, 19)); //found
console.log(binarySearch(testArray, 29)); //found