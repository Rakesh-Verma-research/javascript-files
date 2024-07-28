function uppercase(){
    let yourName = document.getElementById("fName");
       yourName.value = yourName.value.toUpperCase();
       
}
function lowercase(){
    let yourName = document.getElementById("vName");
    yourName.value = yourName.value.toLowerCase();
}
function changtoUpperCase(){
    let x = document.getElementById('changeUp');
    x.value = x.value.toUpperCase();
}
function changeText(){
    text = document.getElementById('h3text');
    text.innerText = "To every action, there is equal and opposite reaction.";
}
function onMouseout(){
    text = document.getElementById("h3text");
    text.innerText = "Newton's Third Law of Motion";
    
}