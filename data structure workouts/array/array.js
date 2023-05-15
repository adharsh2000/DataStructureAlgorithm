//!
// function reverseArray(arr) {
//     for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     return arr
// }

// arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(arr);
// console.log(reverseArray(arr));

//!
// function frequency(arr) {
//     let hashTable = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (hashTable[arr[i]]) hashTable[arr[i]]++;
//         if (!hashTable[arr[i]]) hashTable[arr[i]] = 1;
//     }
//     return hashTable;
// }

// console.log(frequency([1,2,3,4,4,3,2,1]));


//!
// function firstNonRepeating(arr) {
//     let hashTable = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (hashTable[arr[i]]) hashTable[arr[i]]++;
//         if (!hashTable[arr[i]]) hashTable[arr[i]] = 1;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (hashTable[arr[i]] == 1) return arr[i];
//     }
//     return false;
// }

// console.log(firstNonRepeating([1,2,3,1,2,3,4,5]));

//!
class Solution {
    //Function to check if two arrays are equal or not.
    check(A, B, N) {
        let HashTableA = {};
        let HashTableB = {};

        for (let i = 0; i < N; i++) {
            if (HashTableA[A[i]]) HashTableA[A[i]]++;
            if (HashTableB[B[i]]) HashTableB[B[i]]++;

            if (!HashTableA[A[i]]) HashTableA[A[i]] = 1;
            if (!HashTableB[B[i]]) HashTableB[B[i]] = 1;
        }

        for (let i = 0; i < N; i++) {
            if (!HashTableB[A[i]]) return false;
            if (HashTableB[A[i]] !== HashTableA[A[i]]) return false;
        }

        return true;
    }
}

const sol = new Solution()

console.log(sol.check([1,2,3,4,5],[5,4,3,2,6],5));



let b= 99;
console.log(b);