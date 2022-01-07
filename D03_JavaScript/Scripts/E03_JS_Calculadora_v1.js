function LoadForm() {
    document.formValores.inputNome.focus();
}

function somarValores() {
    var n1 = document.getElementById("inputValor1").value;
    var n2 = document.getElementById("inputValor2").value;
    var n3 = parseInt(n1) + parseInt(n2);
    document.getElementById("res").innerHTML = n3;
}

function multiplicarValores() {
    var n1 = document.getElementById("inputValor1").value;
    var n2 = document.getElementById("inputValor2").value;
    var n3 = parseInt(n1) * parseInt(n2);
    document.getElementById("res").innerHTML = n3;
}

function dividirValores() {
    var n1 = document.getElementById("inputValor1").value;
    var n2 = document.getElementById("inputValor2").value;
    var n3 = parseInt(n1) / parseInt(n2);
    document.getElementById("res").innerHTML = n3;
}

function subtrairValores() {
    var n1 = document.getElementById("inputValor1").value;
    var n2 = document.getElementById("inputValor2").value;
    var n3 = parseInt(n1) - parseInt(n2);
    document.getElementById("res").innerHTML = n3;
}


/*function ClearForm() {
    document.getElementById("formValores").reset();  // limpar os campos do formulário
    document.getElementById("pMessage").innerHTML = " ";    // apagar mensagem se houver
}*/