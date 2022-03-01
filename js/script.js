// Abrir VIDEO
const url = 'https://www.youtube.com/embed/mqqft2x_Aa4?autoplay=1';
const btn = document.getElementById('btn-play');

function openNewTab(url) {
    const win = window.open(url, '_blank');
    win.focus()
}

btn.addEventListener('click', () => {
    openNewTab(url)
})

// Abrir INFORMACOES
const info = 'https://www.adorocinema.com/filmes/filme-211012/';
const btnInf = document.getElementById('btn-info');

function openInfo(info) {
    const winIn = window.open(info, '_blank');
    winIn.focus()
}

btnInf.addEventListener('click', () => {
    openInfo(info)
})




