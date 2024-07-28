let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let btn3 = document.getElementById("button3");
let btn4 = document.getElementById("button4")
btn1.addEventListener('click', () => {
    let x = Number(prompt("Enter a Number."));
    let y = Number(prompt("Enter another number"));
    console.log(x);
    console.log(y)
    let z = x+y;
    console.log(`${x} + ${y} = ${z}`);
});
btn2.addEventListener('click', () => {
    let x = Number(prompt("Enter a Number."));
    let y = Number(prompt("Enter another number"));
    console.log(x);
    console.log(y)
    let z = x-y;
    console.log(`The subtraction of ${x} from ${y} is ${z}`);
});
btn3.addEventListener('click', () => {
    let x = Number(prompt("Enter a Number."));
    let y = Number(prompt("Enter another number"));
    console.log(x);
    console.log(y)
    let z = x*y;
    console.log(`The product of ${x} and ${y} is ${z}`);
});
btn4.addEventListener('click', () => {
    let x = Number(prompt("Enter a Number."));
    let y = Number(prompt("Enter another number"));
    console.log(x);
    console.log(y)
    let z = x/y;
    console.log(`The quotient of ${x} and ${y} is ${z}`);
});



