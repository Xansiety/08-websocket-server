const socket = io();

//referencias del html
const lblOnline  = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')

socket.on("connect", () => {
    console.log('Conectado');
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
});

socket.on('disconnect', () => {
    console.log('Desconectado');
    lblOnline.style.display = 'none'
    lblOffline.style.display = ''
});
