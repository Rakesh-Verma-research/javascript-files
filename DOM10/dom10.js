window.addEventListener('keydown', createE);
function createE(e) {
if (e.key === 'f' || e.key === 'm' || e.key === 'n'){
    console.log("The letter 'f' was pressed.");
}else {
    console.log("Wrong key was pressed.")
}
}
window.addEventListener('keyup', noteit);
function noteit(alpha){
    console.log(alpha.key);
}

window.addEventListener('keypress', keyEvent);
function keyEvent(e) {
    console.log(e.key)
}
window.addEventListener("scroll", () => {
    console.log(scrollY)
    if(scrollY>300){
        alert("We have reached 300px.");
    }

});
