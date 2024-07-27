let btn = document.getElementById("button");
let btn1 = document.getElementById("subscribe");
btn.onclick = show;
btn1.onclick = confirm;
function show() {
  let p = document.getElementById("pure");
  p.innerHTML = Date();
}
function confirm() {
  let q = document.getElementById("sub");
  q.innerHTML = Date();
}
function calculateAge() {
  let dob = Number(prompt("Enter Your Year of Birth"));
  let today = new Date();
  yourAge = today.getFullYear() - dob;
  console.log(yourAge);
}
