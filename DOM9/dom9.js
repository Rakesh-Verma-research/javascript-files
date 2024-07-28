di = document.getElementById('div');
di.addEventListener('click', () => {
    console.log("Mouse Clicked");
})
di.addEventListener('mousedown', () => {
    console.log("Mouse is down.");
})
di.addEventListener('mouseup', () => {
    console.log('Mouse is up');
})
di.addEventListener('mouseover', () => {
    console.log("Mouse is over Experimental div");
})
di.addEventListener('mouseout', () => {
    console.log('Mouse is out now.')
})
di.addEventListener('dblclick', () => {
    console.log('Mouse is double clicked');
})
di.addEventListener('mouseenter', () => {
    console.log('Mouse is entered in the div.')
})
di.addEventListener('mouseleave', () => {
    console.log('Mouse has left the div box now.')
})
// di.addEventListener('mousemove', () => {
//     console.log('Mouse Moved')
// })
di.addEventListener('contextmenu', () => {
    console.log('Right mouse button was clicked')
})
