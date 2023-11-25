function copyText() {
    /* Pega o elemento de input de texto */
    var copyText = document.getElementById("myText");

    /* Seleciona o texto no elemento de input de texto */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* Para dispositivos móveis */

    /* Copia o texto para a área de transferência */
    document.execCommand("copy");

    /* Alerta o usuário que o texto foi copiado */
    alert("Texto copiado: " + copyText.value);
  }