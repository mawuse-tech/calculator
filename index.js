let inputEl = document.getElementById("num1");
let inputEl2 = document.getElementById("num2");
let total = document.getElementById("total");
let plus = document.getElementById("plus");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");


plus.addEventListener("click", function(){
    let addNum = Number(inputEl.value);
    let addNum2 = Number(inputEl2.value);
    total.textContent = `${addNum} + ${addNum2} = ${addNum + addNum2}`
})

sub.addEventListener("click", function(){
    let addNum = Number(inputEl.value);
    let addNum2 = Number(inputEl2.value);
    total.textContent = `${addNum} - ${addNum2} = ${addNum - addNum2}`
})

mul.addEventListener("click", function(){
    let addNum = Number(inputEl.value);
    let addNum2 = Number(inputEl2.value);
    total.textContent = `${addNum} * ${addNum2} = ${addNum * addNum2}`
})

div.addEventListener("click", function(){
    let addNum = Number(inputEl.value);
    let addNum2 = Number(inputEl2.value);
    total.textContent = `${addNum} / ${addNum2} = ${addNum / addNum2}`
})


