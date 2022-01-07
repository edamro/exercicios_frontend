function ValidateAge() {

    // 1. Declarar variáveis: valor da textbox, mensagem

    let age, message;

    // 2. Ler da textbox e atribuir a variável

    // window.document.form.textbox
    age = document.getElementById("textAge").value; // NÃO PODE OMITIR O value

    // 3. Avaliar o valor da variável da idade e dar a mensagem correta
    if (isNaN(age) || age <= 18) {
        message = "Idade errada!"
    }
    else {
        message = "Idade ok!";
    }

    // 4. Escrever no ecrã a mensagem
    document.getElementById("pMessage").innerHTML = message;

}