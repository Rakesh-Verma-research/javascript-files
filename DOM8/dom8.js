let btn = document.getElementById("button");
btn.addEventListener('click', votcond);
btn.addEventListener('click', subtract);

function votcond() {
    let x = Number(prompt("Enter Your Age"))
    if (x>=18){ 
        console.log("You can vote.")

    }else {
        console.log("You can not vote.")
    }
}