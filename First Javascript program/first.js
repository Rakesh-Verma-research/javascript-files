let x,y,sum,mul,sub,div,rem;
x = prompt("Enter the first number");
y = prompt("Enter the second number");
sum = x + y;
mul = x * y;
sub = x - y;
div = x / y;
rem = x % y;
document.getElementById("sum").innerText += sum;
document.getElementById("mul").innerText += mul;
document.getElementById("sub").innerText += sub;
document.getElementById("div").innerText += div;
document.getElementById("rem").innerText += rem;

