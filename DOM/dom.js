// *******/selecting elements by Id ******
// let element = document.getElementById("name");
// console.log(element);

//***** */ Selecting elements by class Names ****

// element.innerHTML = "Family Members";
// console.log(element.innerHTML);
// let famMem = document.getElementsByClassName("fam-Mem");
// console.log(famMem);
// console.log(famMem.length);
// for (let i = 0; i < famMem.length; i++) {
//   famMem[i].innerHTML = famMem[i].innerHTML + " " + "Verma";
//   console.log(famMem[i].innerHTML);
  
// }

//*********Selecting elements by Tag name */

let ele = document.getElementById("classes");
let pol = ele.firstElementChild;
let pex = document.getElementById("six");
let tex = pex.parentNode
let sub = document.getElementById("subjects")
let child = sub.parentElement
console.log(sub)
console.log(child)








