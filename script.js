let n1 = Math.floor(Math.random() * 23 + 2);
let n2 = Math.floor(Math.random() * 23 + 2);

document.getElementById("num1").value = n1;
document.getElementById("num2").value = n2;

let product = n1 * n2;

function game() {
    let userAnswer = document.getElementById("intext2").value;
    if (userAnswer == product) {
        document.getElementById("ans").innerHTML = "Bagus Sekali, Jawabanmu Joss!";
    } else {
        document.getElementById("ans").innerHTML = "Jawaban opo kui Salah, yang benar adalah " + product + ". Ulangi.";
    }

    document.getElementById("intext2").value = "";

    n1 = Math.floor(Math.random() * 23 + 2);
    n2 = Math.floor(Math.random() * 23 + 2);

    document.getElementById("num1").value = n1;
    document.getElementById("num2").value = n2;
    product = n1 * n2;
}
