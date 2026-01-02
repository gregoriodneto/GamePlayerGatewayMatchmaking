const socket = new WebSocket("ws://localhost:3000");

socket.onopen = () => {
  console.log("conectado");
  socket.send("ping");
};

socket.onmessage = (event) => {
  console.log("mensagem:", event.data);
};

socket.onclose = () => {
  console.log("conexão fechada");
};