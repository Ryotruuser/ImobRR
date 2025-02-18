cadastrarEmail = () => {
    let emailInput = document.getElementById("inputEmail");
    let btn = document.getElementById("inputEmailBtn");
    if (emailInput.value != ""){
        emailInput.value = "";
        emailInput.placeholder = "E-mail cadastrado com sucesso.";
        btn.innerHTML = "Cadastrar";
    }else{
        btn.innerHTML = "Cadastrar";
        emailInput.placeholder = "inserir e-mail para continuar.";
    }
}