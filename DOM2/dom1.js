container = document.getElementById("healthy");
let h2 = document.createElement('h2');
h2.textContent = "This is new h2 tag"
// text = document.createTextNode("This is h2 tag.");
// h2.appendChild(text);
h2.className = "super pi mi";
h2.id = "class";
container.appendChild(h2);

let p = document.createElement('p');
// let text1 = document.createTextNode("I am happy to learn JS")
// p.appendChild(text1);
p.textContent = "I am happy to learn JS."

document.body.appendChild(p);
let list1 = document.getElementById("list");
let newList = document.createElement("li");
newList.textContent = "Rakesh";
list1.appendChild(newList)

