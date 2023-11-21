function toggleDevs() {
    var devsList = document.getElementById('devs-list');
    var button = document.getElementById('devs-button');

    if (devsList.style.display === 'none' || devsList.style.display === '') {
        devsList.style.display = 'block';
        button.innerText = 'Esconder Devs';
    } else {
        devsList.style.display = 'none';
        button.innerText = 'Mostrar Devs';
    }
}