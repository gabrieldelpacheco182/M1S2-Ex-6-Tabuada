let numero = parseInt(document.getElementById("numero").value)
let resultado = document.getElementById("resultado")
let tab = "";

function tabuada() {
    let numero = parseInt(document.getElementById("numero").value)
    let resultado = document.getElementById("resultado")
    let tab = "";
for (let i = 0; i <=10; i++) {
    tab += numero + "X" + i + " = " + numero*i +"<br/>"
    resultado.innerHTML=tab
}
}