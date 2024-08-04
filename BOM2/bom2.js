let cel = document.getElementById("cel");
let fah = document.getElementById("fah");
cel.addEventListener("input", celCius);
fah.addEventListener("input", fahRein);
function celCius() {
  let c = this.value;
  let f = (c * 9/5) + 32;
  if(!Number.isInteger(f)){
    f = f.toFixed(3);
  }
  fah.value = f;
}
function fahRein() {
    let f = this.value;
    let c = 5/9*(f-32);
    if(!Number.isInteger(c)){
        c = c.toFixed(3);
    }
    cel.value = c
}