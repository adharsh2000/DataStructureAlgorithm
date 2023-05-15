// function heapify(arr, n, i){
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;
//     if(left < n && arr[left] > arr[largest]){
//         largest = left;
//     }

//     if(right < n && arr[right] > arr[largest]){
//         largest = right;
//     }

//     if(largest != i){
//         let temp = arr[i];
//         arr[i] = arr[largest];
//         arr[largest] = temp;
//         heapify(arr, n, largest);
//     }
// }

// function heapsort(arr){
//     const n = arr.length;
//     for( let i = Math.floor(n/2) -1 ; i>= 0; i--){
//         heapify(arr, n, i);
//     }
//     for(let i =n - 1; i> 0; i--){
//         let temp = arr[0];
//         arr[0] = arr[i];
//         arr[i] = temp;
//         heapify(arr, i, 0)
//     }
//     return arr;
// }

// let arr = [23,54,6,9,12,8]

// console.log(heapsort(arr));

// var removeElement = function(nums, val) {
//     length = nums.length;
//     let key=0;
//     for(let i=0;i<length;i++){
//         if(val===nums[i]){
//             let temp = nums[i];
//             nums[i]=nums[length-1];
//             nums[length-1]=temp;
//             key++;
//         }
//     }
//     for(let j=length-key;j<length;j++){
//         nums[j]=null;
//     }
//     return nums;
// };

// console.log(removeElement([3,2,2,3], 3))
