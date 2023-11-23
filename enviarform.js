function enviar() {
    var nameUser = document.getElementById('nameUser');
    var telUser = document.getElementById('telUser');
    var emailUser = document.getElementById('emailUser');
    var questionUser = document.getElementById('questionUser');
    var messageUser = document.getElementById('messageUser');
    window.open('https://api.whatsapp.com/send/?phone=5579981461514&text=*Nome:*%20' + nameUser.value + '%0ATelefone:%20' + telUser.value + '%0AE-mail:%20' + emailUser.value + '%0AAssunto:%20' + questionUser.value + '%0AMensagem:%20' + messageUser.value + '&type=phone_number&app_absent=0');
}