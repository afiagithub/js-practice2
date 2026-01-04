function add(num1, num2){
    let res = num1 + num2
    return res;
}

let addRes = add(20, -30)
console.log(addRes);

// IIFE (Immediately Invokable Function Expression)
(function disMsg(msg){
    console.log(msg);    
})("Hello")