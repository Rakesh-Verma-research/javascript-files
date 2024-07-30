let b = document.getElementById('button');
let d = document.getElementById('box');
b.addEventListener('click', () => {
    console.log('button clicked');
},true)
d.addEventListener('click', () => {
    console.log('div clicked');

},true)
document.body.addEventListener('click', () => {
    console.log('body clicked')
},true)

