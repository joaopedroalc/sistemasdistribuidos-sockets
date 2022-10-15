## Sistemas Distribuidos - Sockets
### João Pedro de Alcântara Lima | Engenharia da Computação

##

Node.js tem um  módulo  'net' que  fornece  uma API de rede assíncrona para criar servidores e clientes TCP/IPC baseados em fluxo.   

Ele pode ser acessado usando: 

``` const net = require('net'); ```

Para criar um servidor baseado em TCP/IPC,  usamos o método createServer que na aplicação criada recebe uma função ```handleConnection``` que fica esperando a conexão entre cliente e servidor:

```const server = net.createServer(handleConnection) ```

Após isso basta invocar o método ```listen(6000,'127.0.0.1')``` na instância ```server``` recém criada informando a porta e o ip ao qual o servidor estará executando para que dessa maneira o cliente se conecte !

O cliente por sua vez sabendo da porta e o ip pode invocar o método ```connect``` que advém da função ```Socket()``` do módulo ```net```, como a seguir :

```
client.connect(6000, '127.0.0.1', () => {
    console.log('Cliente conectado ao server')
})
```
Portanto esse é o funcionamento básico para estabelecer uma conexão cliente servidor utilizando um módulo nativo do NodeJS que permite fazer a conexão de rede/aplicação utilizando sockets. 
