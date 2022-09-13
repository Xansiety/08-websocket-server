const socket = io();

//referencias del html
const btnEnviar = document.querySelector('#btnEnviar')
const lblOffline = document.querySelector('#lblOffline')
const lblOnline  = document.querySelector('#lblOnline')
const txtMensaje = document.querySelector('#txtMensaje')

socket.on("connect", () => {
    // console.log('Conectado');
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
});

socket.on('disconnect', () => {
    // console.log('Desconectado');
    lblOnline.style.display = 'none'
    lblOffline.style.display = ''
});

socket.on('mensaje-servidor', (payload)=> {
    console.log('mensaje-servidor',payload);
})


btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value 

    const payload = {
        mensaje,
        id: 'sdnnlka',
        fecha: new Date().getTime()
    }

    socket.emit("mensaje-cliente", payload, (id) => {
        console.log('Desde el server', id);
    })
}) 
