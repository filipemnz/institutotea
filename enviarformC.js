document.getElementById('telUser').addEventListener('input', function (e) {
    let telUser = telUser.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (telUser.length === 11) {

      // Formatação para (XX) XXXXX-XXXX
      telUser = telUser.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (telUser.length === 10) {
      // Formatação para (XX) XXXX-XXXX

      telUser = telUser.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    telUser.value = telUser;
});

function enviar() {
    var nameUser = document.getElementById('nameUser');
    var nameUserP = document.getElementById('nameUserP');
    var telUser = document.getElementById('telUser');
    var idadeUser = document.getElementById('idadeUser');
    var messageUser = document.getElementById('messageUser');
    window.open('https://api.whatsapp.com/send/?phone=5579981461514&text=*Formulário%20de%20Pré-Cadastro:*%0A%0A*Nome:*%20' + nameUser.value + '%0A*Nome do Responsável:*%20' + nameUserP.value + '%0A*Telefone:*%20' + telUser.value + '%0A*Idade:*%20' + idadeUser.value + '%0A*Mensagem:*%20' + messageUser.value + '&type=phone_number&app_absent=0');
}
