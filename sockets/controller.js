export const socketController = (socket) => {
  console.log("Cliente conectado", socket.id);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado", socket.id);
  });
  // receive a message from the client
  socket.on("mensaje-cliente", (payload, callback) => {
    // enviar mensaje a los clientes
    const id = 123456;
    callback({ id, fecha: new Date().getTime() });

    socket.broadcast.emit("mensaje-servidor", payload);
  });
};
