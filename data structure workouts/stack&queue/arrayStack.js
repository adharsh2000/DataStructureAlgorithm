let arr = [];
let top = arr.length;

function arrayStackPush(val, n) {
    if (top === n) {
        return console.log("stack overflow");; // Return an error message when stack is full
    } else {
        arr.push(val);
        top++;
    }
    return arr;
}

function arrayStackPop() {
    if (top == -1) {
        return console.log("stack underflow");
    } else {
        arr.pop();
        top--;
    }
}

arrayStackPush(1, 5);
arrayStackPush(2, 5);
arrayStackPush(3, 5);
arrayStackPush(4, 5);
arrayStackPush(5, 5);
arrayStackPush(6, 5);
arrayStackPush(7, 5); // Overflow Error

arrayStackPop();
arrayStackPop();
arrayStackPop();
arrayStackPop();
arrayStackPop();
arrayStackPop();
console.log(arr);
