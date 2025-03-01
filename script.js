window.onload = function() {
    const musicas = JSON.parse(localStorage.getItem('musicasFavoritas')) || [];
    const tabela = document.getElementById('tabelaMusicas').getElementsByTagName('tbody')[0];

    musicas.forEach(musica => {
        const novaLinha = tabela.insertRow();
        musica.forEach((nomeMusica, index) => {
            novaLinha.insertCell(index).textContent = nomeMusica;
        });
    });
};

document.getElementById('musicaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const musica1 = document.getElementById('musica1').value;
    const musica2 = document.getElementById('musica2').value;
    const musica3 = document.getElementById('musica3').value;
    const musica4 = document.getElementById('musica4').value;
    const musica5 = document.getElementById('musica5').value;

    if (!musica1 || !musica2 || !musica3 || !musica4 || !musica5) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const musicaData = [musica1, musica2, musica3, musica4, musica5];
    const musicas = JSON.parse(localStorage.getItem('musicasFavoritas')) || [];
    musicas.push(musicaData);

    localStorage.setItem('musicasFavoritas', JSON.stringify(musicas));

    const tabela = document.getElementById('tabelaMusicas').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();
    musicaData.forEach((musica, index) => {
        novaLinha.insertCell(index).textContent = musica;
    });

    document.getElementById('musicaForm').reset();
});