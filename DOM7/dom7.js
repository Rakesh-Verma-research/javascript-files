let btn = document.getElementById("button");
btn.addEventListener("click",() => {
    btn.innerHTML = "You wanted to click?"
})
btn.addEventListener("mouseover",() => {
    btn.innerHTML = "What do you want?"
})
btn.addEventListener("mouseout",() => {
    btn.innerHTML = "Please, don't go."
})