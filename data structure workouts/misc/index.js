//1 fibonacci of a number

// function fibonacci(n){
//     const fib = [0,1]
//     for(let i=2;i<n;i++){
//         fib[i] = fib[i-1]+fib[i-2];
//     }
//     return fib;
// }

// console.log(fibonacci(7));

//2 factorial of a number
// function  factorial(n){
//     let result=1;
//     for(let i=1;i<=n;i++){
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(2));

//3 isPrime number 
// function isPrime(n){
//     if(n<2){
//         return (n+" not a prime Number");
//     }
//     for(let i=2;i<n;i++){
//         if(n%i==0){
//             return (n+" not a prime number");
//         }
//     }
//     return (n+" is a prime number");
// }

// console.log(isPrime(6));

//linked list
// class Node {
//     constructor(value, next = null) {
//         this.value = value;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
// Add a new node to the end of the linked list
//     add(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//         this.size++;
//     }
// Print out the values in the linked list
//     print() {
//         let current = this.head;
//         while (current) {
//             console.log(current.value);
//             current = current.next;
//         }
//     }
// }

// Create a new linked list and add some values
// const list = new LinkedList();
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);
// list.add(6);
// list.add(7);
// list.add(8);
// list.add(9);

// Print out the values in the linked list
// list.print(); // Output: 1 2 3 4 5 6 7 8 9

//recursion base
// function fun(n){
//     if(n<=1){
//         return;
//     };
//     fun(n-1)
//     console.log(n);
//     fun(n-1);
// };
// fun(5);


//power of two
// function isPoweroftwo(n){
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n%2 !== 0){
//             return false
//         }
//         n = n/2;
//     }
//     return true;
// }

// console.log(isPoweroftwo(1));
// console.log(isPoweroftwo(2));
// console.log(isPoweroftwo(5));

//Big-o , o(logn)

//another methode
// function isPoweroftwobitwise(n){
//     if(n<1){
//         return false
//     }
//     return (n & (n-1)) === 0;
// }

// console.log(isPoweroftwobitwise(1));
// console.log(isPoweroftwobitwise(2));
// console.log(isPoweroftwobitwise(5));

//big o - O(n)T

//Recursion 

// function refib(n){
//     if(n<2){
//         return n;
//     }
//     return refib(n-1)+refib(n-2);
// }

// console.log(refib(7));
// for(let i = 0; i <= 7; i++){
//     console.log(refib(i));
// }
// //big o O(2^n)

// //factorial by recursion
// function fact(n){
//     if(n === 0){
//         return 1;
//     }
//     return n * fact(n-1);
// }

// console.log(fact(0));
// console.log(fact(1));
// console.log(fact(5));
// big-O = o(n)

//Search algorithms
//1.linear 
//2.binary 


//linear serch
// function array(arr, target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(array([2,3,4,5,6],6));
// console.log(array([2,3,4,5,6],3));
// console.log(array([2,3,4,5,6],9));
// // big o - o(n)

// //binary search
// function binary(arr, target){
//    let leftIndex = 0;
//    let rightIndex = arr.length - 1;
//    while(leftIndex <= rightIndex){
//       let middleIndex = Math.floor((leftIndex+rightIndex)/2);
//       if(target === arr[middleIndex]){
//          return middleIndex;
//       }
//       if(target < arr[middleIndex]){
//          rightIndex = middleIndex - 1;
//       }else{
//          leftIndex = middleIndex + 1;
//       }
//    }
//    return -1;
// }

// console.log(binary([3,4,5,7,8,9],4));
// console.log(binary([3,4,5,7,8,9],7));
// console.log(binary([3,4,5,7,8,9],20));

//Big-O = O(logn)

//Recursive binary search
// function recursionBinary(arr, target){
//    return search(arr, target ,0 , arr.length - 1)
// }

// function search(arr, target, leftIndex, rightIndex){
//    if(leftIndex > rightIndex){
//       return -1;
//    }
//    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//    if(target === arr[middleIndex]){
//       return middleIndex;
//    }
//    if(target < arr[middleIndex]){
//       return search(arr,target,leftIndex, middleIndex - 1)
//    }else{
//       return search(arr, target, middleIndex + 1, rightIndex)
//    }
// }

// console.log(recursionBinary([3,4,5,7,8,9],3));
// console.log(recursionBinary([3,4,5,7,8,9],7));
// console.log(recursionBinary([3,4,5,7,8,9],20));

//Big-O = O(logn)

//Linked list
//check the the size and value present in it
//basic linked list
// class Node {
//    constructor(value){
//       this.value = value;
//       this.head = null;
//    }
// }

// class LinkedList {
//    constructor(){
//       this.head = null;
//       this.size = 0;
//    }

//    isEmpty(){
//       return this.size === 0;
//    }

//    getSize(){
//       return this.size;
//    }
// }

// const List = new LinkedList()
// console.log("list is empty?  "+List.isEmpty());
// console.log("size of list  "+List.getSize());

//add new node  prepend
//declare the class node for the linkedlist node
// class Node {
//    constructor(value) {
//       this.value = value;
//       this.head = null;
//    }
// }

// //linkedlist class
// class LinkedList {
//    constructor(){
//       this.head = null;
//       this.size = 0;
//    }
//    //checking the list is empty
//    isEmpty(){
//       return this.size === 0;
//    }
//    //checking the size
//    getSize(){
//       return this.size;
//    }
//    //adding value to the first in list
//    //O(1)
//    prepend(value){
//       const node = new Node(value);
//       if(this.isEmpty()){
//          this.head = node;
//       }else{
//          node.next = this.head;
//          this.head = node;
//       }
//       this.size++
//    }
//    //adding value in the end
//    //O(n)
//    append(value){
//       const node = new Node(value);
//       if(this.isEmpty()){
//          this.head = node;
//       }else{
//          let prev = this.head;
//          while(prev.next){
//             prev = prev.next;
//          }
//          prev.next = node;
//       }
//       this.size++;
//    }
//    //insert new value to the given index
//    insert(value, index){
//       if(index < 0 || index > this.size){
//          return 
//       }
//       if(index === 0){
//          this.prepend(value)
//       }else{
//          const node = new Node(value);
//          let prev =this.head;
//          for(let i=0;i < index-1; i++){
//             prev = prev.next
//          }
//          node.next = prev.next
//          prev.next = node;
//          this.size++;
//       }
//    }
//    //removing value from the linkedlist by index
//    removeFrom(index){
//       if(index < 0 || index >= this.size){
//          return null;
//       }
//       let removeNode;
//       if(index === 0){
//          removeNode = this.head
//          this.head = this.head.next;
//       }else{
//          let prev = this.head
//          for(let i=0;i< index - 1; i++){
//             prev = prev.next;
//          }
//          removeNode = prev.next;
//          prev.next = removeNode.next;
//       }
//       this.size--;
//       return removeNode.value
//    }
//    //remove value by value
//    removeValue(value){
//       if(this.isEmpty()){
//          return null;
//       }
//       if(this.head.value === value){
//          this.head = this.head.next;
//          this.size--;
//          return value;
//       }else{
//          let prev = this.head;
//          while(prev.next && prev.next.value !== value){
//             prev = prev.next;
//          }
//          if(prev.next){
//             const removeNode = prev.next
//             prev.next = removeNode.next
//             this.size--;
//             return value;
//          }
//          return null;
//       }
//    }
//    //search and find index by value
//    search(value){
//       if(this.isEmpty()){
//          return -1;
//       }
//       let i=0;
//       let curt = this.head;
//       while(curt){
//          if(curt.value === value){
//             return i;
//          }
//          curt = curt.next;
//          i++;
//       }
//       return -1;
//    }
//    //reverse the linkedlist
//    reverse(){
//       let prev = null;
//       let curt = this.head;
//       while(curt){
//          let next = curt.next;
//          curt.next = prev;
//          prev = curt;
//          curt = next;
//       }
//       this.head = prev;
//    }
//    //printing the values in linkedlist
//    print(){
//       if(this.isEmpty()){
//          console.log("list is empty");
//       }else{
//          let curt = this.head;
//          let listvalues = '';
//          while(curt){
//             listvalues += `${curt.value}-->`;
//             curt = curt.next;
//          }
//          console.log(listvalues);
//       }
//    }
// }
// //creating an instance to the class
// const List = new LinkedList();
// console.log("list is empty?  "+List.isEmpty());
// console.log("size of list  "+List.getSize());
// List.print();

// List.insert(10,0)
// List.insert(20,0)
// List.insert(30,1)
// List.insert(40,2)
// List.print()
// List.reverse();
// List.print()


//doubly Linkedlist
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.prev = null;
//         this.next = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }

//     prepend(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             node.next = this.head;
//             this.head.prev = node;
//             this.head = node;
//         }
//         this.size++;
//     }

//     append(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             this.tail.next = node;
//             node.prev = this.tail;
//             this.tail = node;
//         }
//         this.size++;
//     }

//     removeFromFront() {
//         if (this.isEmpty()) {
//             return null;
//         }
//         const value = this.head.value;
//         this.head = this.head.next;
//         this.size--;
//         return value;
//     }

//     removeFromEnd() {
//         if (this.isEmpty()) {
//             return null;
//         }
//         const value = this.tail.value;
//         if (this.size === 1) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             this.tail = this.tail.prev;
//             this.tail.next = null;
//         }
//         this.size--;
//         return value;
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log("List is empty");
//         } else {
//             let curt = this.head;
//             let list = "";
//             while (curt) {
//                 list += `${curt.value}<-->`;
//                 curt = curt.next;
//             }
//             console.log(list);
//         }
//     }

//     printReverse() {
//         if (this.isEmpty()) {
//             console.log("List is empty");
//         } else {
//             let curt = this.tail;
//             let list = "";
//             while (curt) {
//                 list += `${curt.value}<->`;
//                 curt = curt.prev;
//             }
//             console.log(list);
//         }
//     }
// }

// const list = new DoublyLinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.prepend(0);
// list.print();
// list.printReverse();
// list.removeFromEnd();
// list.print();
// list.removeFromFront();
// list.print();


// class Solution {
//    search(arr, X) {
//        for(let i = 0; i < arr.length; i++){
//            if(arr[i] == X) return i
//        }
//        return -1
//    }
// }

// const sol = new Solution()

// console.log(sol.search([1,2,3],2));

// //todo:replace star with repeating charachter , eg:MAL*Y****;

// let str = "MALAYALAM";
// let arr = str.split("")
// console.log(arr);

// for(let i=0;i<arr.length;i++){
//    for(let j=i+1;j<arr.length;j++){
//       if(arr[i] === arr[j]){
//          arr[j] = '*';
//       }
//    }
// }

// console.log(arr);

//todo:count the char

// let obj=[]
// let repeat = []

// for(x = 0, length = str.length; x < length; x++) {
//    var l = str.charAt(x)
//    obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
// }

// console.log(obj)


//todo:array to linkedlist

// function arrayToList(array) {
//    var list = null;
//    for (var i = array.length - 1; i >= 0; i--)
//       list = { value: array[i], rest: list };
//    return list;
// }

// console.log(arrayToList([10, 20,5,8,6,4]));



// class Node {
//    constructor() {
//       var data;
//       var next;
//    }
// }


// // Function to insert node
// function insert(root, item) {
//    var temp = new Node();
//    var ptr;
//    temp.data = item;
//    temp.next = null;

//    if (root == null)
//       root = temp;
//    else {
//       ptr = root;
//       while (ptr.next != null)
//          ptr = ptr.next;
//       ptr.next = temp;
//    }
//    return root;
// }

// function display(root) {
//    while (root != null) {
//       console.log(root.data + " ");
//       root = root.next;
//    }
// }

// function arrayToList(arr, n) {
//    var root = null;
//    for (let i = 0; i < n; i++)
//       root = insert(root, arr[i]);
//    return root;
// }

// // Driver Code
// let arr = [1, 2, 3, 4, 5];
// let n = arr.length;
// var root = arrayToList(arr, n);
// display(root);

//todo:reverse the string

// function reverseString(str){
//    return str.split("").reverse().join("")
// }

// console.log(reverseString("hello"));

//todo:reverse sentence by string

// function reversedStrInSentence(sentence) {
//    let srtArr = sentence.split(" ");
//    let reversedStrInSentenceOutput = [];

//    for (let i = 0; i < srtArr.length; i++) {
//       reversedStrInSentenceOutput = [
//          ...reversedStrInSentenceOutput,
//          " ",
//          srtArr[i].split("").reverse().join(""),
//       ];
//    }
//    return reversedStrInSentenceOutput.join("")
// }

// console.log(reversedStrInSentence("hello world"));

//todo:string palindrome

// function stringPalindrome(str){
//    return str.split("").reverse().join("") === str ? "isPalindrome" : "notPalindrome";
// }

// console.log(stringPalindrome("amma"));

//todo:anagram or not

// function anagram(str1, str2){
//    return str1.split("").sort().join("") === str2.split("").sort().join("") ? "anagram" : "not anagram";
// }

// console.log(anagram("mate" ,"team"));

//todo:binary search

// function binarySearch(arr, val){
//    let start = 0;
//    let end = arr.length - 1;
//    let middle = Math.floor((start + end)/2);

//    while(arr[middle] !== val && start <= end){
//        if(arr[middle] < val) start = middle + 1;
//        else end = middle - 1;
//        middle = Math.floor((start + end)/2);
//    }
//    return arr[middle] === val ? middle : -1;
// }



// console.log(binarySearch([1,3,4,5], 1));

// //todo:
// function fib(n) {
//    if (n <= 2) return 1;
//    return fib(n - 1) + fib(n - 2);
// }

// function printFibonacci(n) {
//    for (let i = 0; i < n; i++) {
//       console.log(fib(i));
//    }
// }

// fib(7)

// printFibonacci()



//todo:array to linked list
// class ListNode {
//     constructor(val, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// function arrayToLinkedList(arr) {
//     if (arr.length === 0) {
//         return null;
//     }

//     let head = new ListNode(arr[0]);
//     let current = head;

//     for (let i = 1; i < arr.length; i++) {
//         current.next = new ListNode(arr[i]);
//         current = current.next;
//     }

//     return head;
// }

// function print() {
//     let current = this.head;
//     let result = '';
//     while (current) {
//         result += current.val + ' -> ';
//         current = current.next;
//     }
//     result += 'null';
//     console.log(result);
// }

// arrayToLinkedList([1, 2, 3, 4, 5]);
// print()



/*
This is a method to find the unique values in the linked list. Here's how it works:

Create a new Map object to store the frequency of each value in the linked list.
Traverse through the linked list starting from the head.
For each node in the linked list:
a. Check if the value of the node already exists in the map. If yes, set its value in the map to false.
b. If the value of the node does not exist in the map, set its value in the map to true.
Create a new array called unique.
Traverse through the map using the forEach() method and for each key-value pair:
a. If the value is true, push the corresponding key to the unique array.
Return the unique array.
So the method essentially creates a Map to keep track of the frequency of each value in the linked list, and then creates a new array containing only the unique values by checking the frequency in the map. */

