let btn = document.getElementById('button');
let btn1 = document.getElementById('yahoo');
let btn2 = document.getElementById('close');
let win;
let features = "height = 400,width = 500"
btn.addEventListener('click', () => {
    win = window.open("https://www.google.com",'google',features)
})
btn1.addEventListener('click', () => {
    window.open('https://www.yahoo.com','yahoo',features);
})

btn2.addEventListener('click', () => {
    win.close('google');
})
