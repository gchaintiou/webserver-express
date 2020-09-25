const http = require('http');
const { url } = require('inspector');

http.createServer((req, res) => {
        res.writeHead(200, { 'content-type': 'application/json' });
        //res.write("Hola Mundo");
        let salida = {
            nombre: 'Gustavo',
            edad: '45',
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log("Escuchando el puerto 8080");