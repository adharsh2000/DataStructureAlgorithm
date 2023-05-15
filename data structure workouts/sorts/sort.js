//!bubble sort------------------------------------------------------------------------------->

function bubbleSort(arr) {
    if (!arr.length) return "array empty";
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    return arr;
}


//! insertion sort --------------------------------------------------------------------------->

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}


let array = [1, 4, 6, 3, 67, 34, 5, 54]
// console.log(array);
// console.log(bubbleSort(array));
// console.log(insertionSort(array));

//! selection sort----------------------------------------------------------------------------->

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        // var position = arr[i];
        // arr[i] = arr[lowest];
        // arr[lowest] = position;
        [arr[lowest],arr[i]=arr[i],arr[lowest]]
    }
    return arr;
}

// console.log(selectionSort([34, 22, 10, 19, 17]));


//! merge sort --------------------------------------------------------------------------------->
function merge(arr1, arr2) {
    let output = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            output.push(arr1[i]);
            i++;
        } else {
            output.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        output.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        output.push(arr2[j]);
        j++;
    }
    return output;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    console.log(left);
    let right = mergeSort(arr.slice(mid));
    console.log(right);

    return merge(left, right)
}

// console.log(mergeSort([2, 6, 8, 53, 1, 3, 3446, 223]));


// let arr = [1,2,3,4,5,6,7,9,3];
//     let mid = Math.floor(arr.length/2);
//     let left = arr.slice(0,mid);
//     let right = arr.slice(mid);
//     console.log("array 1 :"+left);
//     console.log("array 2 :"+right);


//!quick sort -------------------------------------------------------------------------------------->
 
function pivot(arr, start, end=arr.length - 1){
    const swap = (array, i, j) => {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };

    let pivot = arr[start];
    let swapIndex = start;

    for(let i= start + 1;i<=end;i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr, swapIndex, i)
        }
    }

    swap(arr, start, swapIndex);
    return swapIndex;
}

function sort(arr, left=0, right=arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        sort(arr, left, pivotIndex - 1);
        sort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(selectionSort([1, 5, 6, 3, 76, 34, -3]));