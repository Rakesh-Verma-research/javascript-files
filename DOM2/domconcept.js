// let newList = document.createElement("li")
// newList.textContent = "New List";
// let lists = document.getElementById("list");

// let pos = lists.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

// lists.insertBefore(newList,pos);

parent = document.getElementById("list");
// cloneFootermenu = footermenu.cloneNode(true);
// document.body.appendChild(cloneFootermenu);
newElm = document.createElement("li");
newElm.textContent = "Exam Papers";
replace = parent.firstElementChild.nextElementSibling.nextElementSibling;
parent.replaceChild(newElm,replace);

