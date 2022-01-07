function LoadForm() {
    document.formPessoa.inputNome.focus();
}

function ValidateForm() {

}

function ValidateNome() {
    let nome = document.getElementById("inputNome");
    if (nome.value == "") {
        nome.focus();
        nome.style.color = 'red';
        return false;
    }
    else {
        nome.style.color = 'black';
        return true;
    }
}

function ValidateEmail() {
    let email = document.getElementById("inputEmail");
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(email.value)) {
        email.focus();
        email.style.color = 'red';
        return false;
    }
    else {
        email.style.color = 'black';
        return true;
    }
}

function ValidateTelefone() {
    let telefone = document.getElementById("inputTelefone");
    let regexTelefone = /^\d{9}$/;
    if (!regexTelefone.test(telefone.value)) {
        telefone.focus();
        telefone.style.color = 'red';
        return false;
    }
    else {
        telefone.style.color = 'black';
        return true;
    }
}

function ValidateNif() {
    let nif = document.getElementById("inputNif");
    let regexNif = /^\d{9}$/;
    if (!regexNif.test(nif.value)) {
        nif.focus();
        nif.style.color = 'red';
        return false;
    }
    else {
        nif.style.color = 'black';
        return true;
    }
}

function WriteMessage() {
    document.getElementById("pMessage").innerHTML = message;
}

function ClearForm() {
    document.getElementById("formPessoa").reset();  // limpar os campos do formulário
    document.getElementById("pMessage").innerHTML = " ";    // apagar mensagem se houver
}