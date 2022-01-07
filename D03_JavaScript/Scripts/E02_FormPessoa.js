function ValidateForm() {

        // 1. Declarar variáveis: valor da textbox
        let pessoa = {
            nome: '', 
            email: '',
            telefone: '',
            nif: ''
        }

        // 2. Ler da textbox e atribuir a variável

        pessoa.nome = document.getElementById("textNome").value;
        pessoa.email = document.getElementById("textEmail").value;
        pessoa.telefone = document.getElementById("textTelefone").value;
        pessoa.nif = document.getElementById("textNif").value;

        // 3. Avaliar o valor da variável da idade e dar a mensagem correta
        if (pessoa.nome == "" || pessoa.email == "" || pessoa.telefone == "" || pessoa.nif == "" ) {
            alert("Formulário incompleto");
        }
        else {
            message = "Formulário ok!";
        }

        // 4. Escrever no ecrã a mensagem
        document.getElementById("pMessage").innerHTML = message;
    }

function ClearForm() {
    document.getElementById("myForm").reset();  // limpar os campos do formulário
    document.getElementById("pMessage").innerHTML = " ";    // apagar mensagem se houver
}
