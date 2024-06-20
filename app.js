const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
    /* console.log('Un usuario se ha conectado') */


    /* socket.on('chat', (msg) => {
        console.log('Mensaje: '+msg)
    }) */

        socket.on('chat', (msg) => {
            io.emit('chat', msg)
        })
})

app.get("/", (req, res) => {
  /* res.send(`<h1>Aplicacion de Chat</h1>`) */
  res.sendFile(`${__dirname}/client/index.html`);
});

server.listen(3000, () => {
  console.log(`El servidor esta corriendo por el puerto 3000`);
});
