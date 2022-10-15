const net = require('net');

const handleConnection = socket => {
  console.log('Servidor conectado');
  socket.on('end', () => {
    console.log('Cliente desconectado')
  });
  socket.on('data', data => {
    const str = data.toString()
    if (str === "end") {
      socket.end()
    }
    console.log(str)
  })
}

const server = net.createServer(handleConnection)

server.listen(6000, '127.0.0.1')