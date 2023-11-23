function enviar() {
    var nameUser = document.getElementById('nameUser');
    var telUser = document.getElementById('telUser');
    var emailUser = document.getElementById('emailUser');
    var questionUser = document.getElementById('questionUser');
    var messageUser = document.getElementById('messageUser');
    window.open('https://api.whatsapp.com/send/?phone=5579981461514&text=*Formulário%20de%20Inscrição:*%0A%0A*Nome:*%20' + nameUser.value + '%0A*Telefone:*%20' + telUser.value + '%0A*E-mail:*%20' + emailUser.value + '%0A*Assunto:*%20' + questionUser.value + '%0A*Mensagem:*%20' + messageUser.value + '&type=phone_number&app_absent=0');
}