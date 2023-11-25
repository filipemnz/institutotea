function enviar() {
    var nameUser = document.getElementById('nameUser');
    var nameUserP = document.getElementById('nameUserP');
    var telUser = document.getElementById('telUser');
    var idadeUser = document.getElementById('idadeUser');
    var messageUser = document.getElementById('messageUser');
    window.open('https://api.whatsapp.com/send/?phone=5579981461514&text=*Formulário%20de%20Pré-Cadastro:*%0A%0A*Nome:*%20' + nameUser.value + '%0A*Idade:*%20' + idadeUser.value + '%0A*Nome do Responsável:*%20' + nameUserP.value + '%0A*Número para Contato:*%20' + telUser.value + '%0A*Mensagem:*%20' + messageUser.value + '&type=phone_number&app_absent=0');
}