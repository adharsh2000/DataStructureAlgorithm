
// let arr = [2,3,4,5,7,8,9,12,43,77]

// // looping from lowerNumber to higherNumber
// for (let i = 0; i <= arr.length; i++) {
//     let flag = 0;

//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

// function example() {
//     var x = 1;
//     if (true) {
//         if (true) {
//             if (true) {
//                 if (true) {
//                     if (true) {
//        if (true) {
//         var f = 50;
//                     }
//                 }
//             }
//         }
//     }
//     console.log(f); // Output: 2
//   }
// }
//   example();


// function* fibonacci() {
//     let a = 0, b = 1;
//     while (true) {
//       yield a;
//       [a, b] = [b, a + b];
//     }
//   }


//   const fib = fibonacci();
//   for (let i = 0; i < 10; i++) {
//     console.log(fib.next().value);
//   }

// function doSomethingAsync(callback) {
//     // Perform some asynchronous task

//     setTimeout(()=>{
//         const result = 42;
//         callback(result);
//     },1000)
//   }

//   function callbackFunction(result) {
//     console.log(`The result is ${result}`);
//   }

//   doSomethingAsync(callbackFunction);


// let obj1 = {
//     a: 1,
//     b: {
//       c: 2
//     }
//   };

//   let obj2 = obj1;
//   console.log(obj2); // {a: 1, b: {c: 2}}

//   obj1.b.c = 5;
//   console.log(obj2); // {a: 1, b: {c: 3}}


// let obj1 = {
//     a: 1,
//     b: {
//       c: 2
//     }
//   };

//   let obj2 = {...obj1};
//   console.log(obj2); // {a: 1, b: {c: 2}}

//   obj1.a = 3;
//   console.log(obj2); // {a: 1, b: {c: 2}}


// function greet() {
//     console.log(`Hello, ${this.name}!`);
//   }

//   const person = { name: 'John' };
//   const person2 = { name: 'Johnny' };
//   greet.call(person); // Output: Hello, John!
//   greet.call(person2); // Output: Hello, John!


// const arr = [1,2,3,4,2,3,3,1,5]
// const set = new Set(arr)
// console.log(set);

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("foo");
//     }, 300);
//   });

// myPromise.then(()=>{
//     console.log("success");
// }).catch(()=> {
//     console.log("failed");
// })

// function addNumbers(num1, num2) {
//     return new Promise((resolve, reject) => {
//       if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         reject('Both arguments must be numbers');
//       }
//       const sum = num1 + num2;
//       resolve(sum);
//     });
//   }

//   addNumbers(2, 3)
//     .then(result => console.log(result)) // Output: 5
//     .catch(error => console.error(error)); // This won't be called

//   addNumbers(2, '3')
//     .then(result => console.log(result)) // This won't be called
//     .catch(error => console.error(error)); // Output: 'Both arguments must be numbers'


// #include<stdio.h>

// int main()
// {
//     int num;

//     scanf("%d",&num);

//     while(num > 0) //do till num greater than  0
//     {
//         int mod = num % 10;  //split last digit from number
//         printf("%d\n",mod); //print the digit. 

//         num = num / 10;    //divide num by 10. num /= 10 also a valid one 
//     }

//     return 0;
// }

const arr = [1,2,3]

const result = arr.map((val, index) => {
    if (index > 0) {
        arr.push(5)
    }
    return val;
})

console.log(result, arr);