let bigNum ;
let smlNum ;

function enterNums() {
let bigNum = prompt("Enter the Bigger Number");
let smlNum = prompt("Enter the Smaller Number");

document.getElementById("big").innerHTML += bigNum;
document.getElementById("small").innerHTML += smlNum;
const addIt = document.getElementById("add");
addIt.addEventListener("click", sum());

function sum() {
    let sum = bigNum + smlNum;
    document.getElementById("sum").innerHTML += sum;
    }
    
}

function difference() {
    let difference = bigNum - smlNum;
    document.getElementById("difference").innerHTML += difference;
    }

    function product() {
        let product = bigNum * smlNum;
        document.getElementById("product").innerHTML += product;
        }
        function quotient() {
            let quotient = bigNum / smlNum;
            document.getElementById("quotient").innerHTML += quotient;
            }
            function remainder() {
                let remainder = bigNum % smlNum;
                document.getElementById("remainder").innerHTML += remainder;
                }