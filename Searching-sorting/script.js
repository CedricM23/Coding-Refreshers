/*
*   lINEAR SEARCH - wwalk throught the data structure
* look at each element, if we find value, return true
* else return false
*/
function linearSearch(arr, value){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if (value === arr[i]){
            // return true;
            console.log(count)
            return i;
        }
        count++;
    }
    return false;
    return -1;
}
/**
 * Interval search, we need a sorted data scructure
 * because we look at the value in the middle
 * determine if our value is higer, then we search the bottom half
 * otherwise we search the top half
    3,4,5,6,8,9,12
    value = 14
 */
function binarySearch (arr,value){
    let count = 0;
    //create lowIndex set to 0
    // create a highIndex set to last index in array (arr.length - 1)
    //while lowIndex , highIndex
        // create a middleindex -- find index of middle ellemtn 
        // compare value to arr[middleIndex]
            //if they eqaul, return true (or return middleIndex)
            // if value is larger, then set lowIndex to middleIndex + 1
            //else, then set highIndex to middleIndex - 1
    //return false
    let lowIndex = 0;
    let highIndex = arr.length - 1;
    while (lowIndex < highIndex){
        let middleIndex = (highIndex + lowIndex) / 2;
        if (value === arr[middleIndex]){
            return true;
        }
        else if (value > arr[middleIndex]){
            lowIndex = middleIndex + 1;
        }else {
            highIndex = middleIndex - 1;
        }
        count++;
    }
    console.log(count)
    return false;
}

/**
 * sorts an array
 */

function bubbleSort(arr){
    console.log(`before sort: ${arr}`)
    let count = 0;
    /*
    create an outer loop -- is just used to keep looping
        create an inner loop
            compare element and element at index + 1
                // if element is larger, swap
    */
   for (let i = 0; i < arr.length; i++){
    for (let j =0; j < arr.length - i - 1; j++){
        if (arr[j] > arr[j + 1]){
            //swap
            let temp = arr[j]; // have to have temp holding spot
            arr[j] = arr[j+1]; // so that we can overwrite
            arr[j + 1] = temp;
        }
        count++;
    }
   }
   console.log(count)
   console.log(`after sort: ${arr}`)
}

/**
 * 
 */

function bubbleSortOptimized(arr){
    console.log(`before sort: ${arr}`)
    let count = 0;
    /*
    create an outer loop -- is just used to keep looping
        create an inner loop
            compare element and element at index + 1
                // if element is larger, swap
    */
   for (let i = 0; i < arr.length; i++){
    let swapped = false
    for (let j =0; j < arr.length - i - 1; j++){
        if (arr[j] > arr[j + 1]){
            //swap
            let temp = arr[j]; // have to have temp holding spot
            arr[j] = arr[j+1]; // so that we can overwrite
            arr[j + 1] = temp;
            swapped = true;
        }
        count++;
    }
    if (!swapped){
        break;
    }
   }
   console.log(count)
   console.log(`after sort: ${arr}`)
}

function insertionSort(arr){
    // insertion sort
    // sorts one at a time
    //compares values
    // if we need to move an element right to make more room, do so
    let n = arr.length
    let count = 0;
    console.log(`before sort: ${arr}`)
    for( let i =0; i < arr.length; i++){
        let index = 1;
        let valueToInsert = arr[index]
        while(index > 0 && valueToInsert < arr[index - 1]){
            arr[index] = arr[index - 1];
            index--;
            count++;
        }
        arr[index] = valueToInsert;
    }
    console.log(`after sort: ${arr}`)
    console.log(count);
}