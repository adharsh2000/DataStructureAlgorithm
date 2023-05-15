// class MyArrayStack {
//   constructor() {
//     this.arr = [];
//     this.i = 0; // Move the index variable outside the method as an instance variable
//   }
print = console.log.bind(console)
//   push(val) {
//     this.arr[this.i] = val;
//     this.i++; // Increment the index for next value
//   }
//   pop() {
//     if (this.i === 0) {
//       // If stack is empty
//       return null;
//     }
//     this.i--; // Decrement the index to get the top element
//     const poppedVal = this.arr[this.i]; // Get the top element
//     this.arr.length = this.i; // Remove the top element from the array
//     return poppedVal; // Return the popped element
//   }
// }

// const s = new MyArrayStack();
// s.push(1);
// s.push(2);
// s.push(3);
// console.log(s.pop());
// console.log(s.arr); // Output: [1, 2, 3]



// class MyArrayQueue {
//   constructor() {
//     this.arr = [];
//     this.front = 0;
//     this.rear = 0;
//   }

//   enqueue(val) {
//     this.arr[this.rear++] = val; // Add element to the rear of the array and increment rear
//   }

//   dequeue() {
//     if (this.front === this.rear) {
//       // If queue is empty
//       return null;
//     }
//     const val = this.arr[this.front]; // Get element from the front of the array
//     this.front++; // Increment front to remove element from the queue
//     return val;
//   }
// }

// const q = new MyArrayQueue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// console.log(q.arr); // Output: [1, 2, 3]
// console.log(q.dequeue()); // Output: 1
// console.log(q.arr); // Output: [2, 3]

// function findMissingNumber(inputArray) {
//   const n = inputArray.length ;
//   const totalSum = (n * (n + 1)) / 2;
//   let arraySum = 0;

//   for (let i = 0; i < n ; i++) {
//     arraySum += inputArray[i];
//   }

//   const missingNumber = totalSum - arraySum;
//   return missingNumber;
// }

// console.log(findMissingNumber([1,2,3,4,6,7]));

// function findSame(arr1, arr2) {
//   let arr3 = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         let found = false;
//         for (let k = 0; k < arr3.length; k++) {
//           if (arr3[k] === arr1[i]) {
//             found = true;
//             break;
//           }
//         }
//         if (!found) {
//           arr3.push(arr1[i]);
//         }
//       }
//     }
//   }
//   return arr3;
// }

// let arr1 = [6, 5, 6, 7, 8, 9];
// let arr2 = [5, 3, 8, 6, 12, 13];
// console.log(findSame(arr1, arr2)); // [5, 6, 8]

//day 4
// let arr=[1,2,3,4,5]
// let mid = Math.floor(arr.length/2);
// let count = 0;
// // console.log(arr[mid]);
// for(let i=0;i < arr.length; i++){
//     // console.log('1');
//     if(arr[i] < arr[mid]){
//         // console.log('2');
//         while(arr[i] !== arr[mid]){
//             arr[i]=arr[i] + 1;
//             count++;
//             // console.log('count');
//         }
//     } else if(arr[i] > arr[mid]){
//         while( arr[i] !== arr[mid]){
//             arr[i] = arr[i] - 1;
//             count++;
//         }
//     }
// }
// console.log(count);
// console.log(arr);

// const myArray = [4,5,6,7,8];
// console.log(typeof(myArray));

//day 6

// let arr=[2,7,4,1,8,1]
// let newarr = arr.sort();

// for(let i=0;i<newarr.length-1;i++){
//     let largest = newarr.length - 1;
//     let secondlargest = newarr.length - 2;
//     let diff = largest
//     if(newarr[i] == secondlargest){
//         newarr[i] = diff;
//         newarr.pop();
//     } else if(newarr.length == 2){
//         newarr.pop();
//         newarr.pop();
//     } else {
//         return console.log("o");;
//     }
// }

// console.log(newarr);

// function lastStoneWeight(stones) {
//     while (stones.length > 1) {
//       stones.sort((a, b) => b - a); // sort the stones in descending order
//       const smashResult = stones[0] - stones[1]; // smash the two heaviest stones
//       stones.splice(0, 2); // remove the smashed stones from the array
//       if (smashResult > 0) {
//         stones.push(smashResult); // add the remaining stone to the array
//       }
//     }
//     return stones.length === 1 ? stones[0] : 0; // return the last stone or 0 if there are none left
//   }

// console.log(lastStoneWeight([2,7,4,1,8,1]));

// const p = {
//     name:"john",
//     salary:10000,
// }

// const p2 = {
//     ...p,
//     job:"driver"
// }

// console.log(p2.name);

//day 7
//ex : 
// const sortedArray = [1, 3, 5, 7, 9];
// const newElement = 4;
// output:-[1, 3, 4, 5, 7, 9]

// const sortedArray = [1, 3, 5, 7, 9];
// const newElement = 4;

// let i;
// for (i = 0; i < sortedArray.length; i++) {
//   if (sortedArray[i] > newElement) {
//     break;
//   }
// }

// sortedArray.splice(i, 0, newElement);

// console.log(sortedArray); // Output: [1, 3, 4, 5, 7, 9]


//DAY 8

// function findMissing(arr){
//     let totalSum = 0;
//     for(let i=0; i< arr.length+1; i++){
//         totalSum += i;
//     }
//     let arraySum = 0;
//     for(let i=0; i < arr.length; i++){
//         arraySum += arr[i];
//     }
//     missing = totalSum - arraySum;
//     return missing;
// }

// console.log(findMissing([0,2,3]));

//day 9
// function concate(arr){
//     let n=arr.length;
//     let newarr = JSON.parse(JSON.stringify(arr));
//     for(let i =0;i<n;i++){
//         newarr[i+n] = arr[i];
//     }
//     return newarr;
// }

// console.log("kkkk");
// print("heeeee")

//day 10
// function isHappy(n) {
//     let slow = squaredSum(n);
//     let fast = squaredSum(squaredSum(n));
//     while (slow !== fast) {
//         slow = squaredSum(slow);
//         fast = squaredSum(squaredSum(fast));
//     }
//     return slow === 1;
// }

// function squaredSum(n) {
//     let sum = 0;
//     while (n > 0) {
//         sum += Math.pow(n % 10, 2);
//         n = Math.floor(n / 10);
//     }
//     return sum;
// }


// console.log(isHappy(19));

//day 11
// let num = [1, 1, 0, 1, 1, 1];

// function find(num) {
//     let count = 0;
//     let largest = 0;
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] == 1) {
//             count++;
//         } else {
//             if (count > largest) {
//                 largest = count;
//             }
//             count = 0;
//         }
//     }
//     if (count > largest) {
//         largest = count;
//     }
//     return largest;
// }

// console.log(find(num));

/////
// let arr = [1,2,3,4,5,6,7,8];
// let odd = [];
// let even = [];
// for(let i=1; i<=arr.length; i++){
//     arr[i] % 2 === 0 ? even.push(i) :  odd.push(i);
// }
// console.log(odd);
// console.log(even);

//day 12
// function find(arr){
//     let num = new Set(arr);
//     let result = [];

// for(let i=1 ; i<= num.length; i++){

//     if(!num[i].has(i) ){
//         result.push(i);
//     }
// }

// return result

// }


// console.log(find([1,2,4,5]))

//day 13
// function combine(arr1, arr2){
//     let n = arr1.length;
//     let m = arr2.length;
//     for(let i = 0;i<n;i++){
//         for(let j = 0;j<m;j++){
//             if(arr1[i] === arr2[j]){
//                 arr1.splice(i,1)
//                 arr2.splice(j,1)
//             }
//         }
//     }
//     let combine = [];
//     combine.push(arr1, arr2);
//     return combine;
// }

// console.log(combine([1,2,3], [2,4,6]));

//day 14
// let string = " Hello, my   name is john";

// function countSegments(s) {
//     let ans = 0;
//     for (let i = 0; i < s.length; ++i) {
//         if (s.charAt(i) !== ' ' && (i === 0 || s.charAt(i - 1) === ' ')) {
//             ++ans;
//         }
//     }
//     return ans;
// }

// console.log(countSegments(string));

//day 15
// function find(arr){
//     n = arr.length;
//     let product=arr[0];
//     for(let i=1;i<n;i++){
//         product = arr[i] * product;
//     }
//     console.log("prd:"+product);
//     if(product > 0){
//         return 1;
//     }else if(product < 0){
//         return -1;
//     }else if(product == 0){
//         return 0;
//     }
// }
// arr=[-1,-2,-3,-4,3,2,1]
// arr1=[1,5,0,2,-5] 
// arr2=[-1,1,-1,1,-1]

// console.log(find(arr2));

//day 16
// var average = function (salary) {
//     let val = 0;
//     let max = -Infinity;
//     let min = Infinity;
//     for (let el of salary) {
//         val += el;
//         max < el ? max = el : max = max;
//         min > el ? min = el : min = min
//     }

//     let ans = val - (max + min);
//     ans = ans / (salary.length - 2);
//     return ans
// };

// arr=[4000,3000,1000,2000]
// console.log(average(arr));