const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static(__dirname + '/public'));
// express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
// helpers

app.get('/', (req, res) => {
    res.render('home', {
        nombre: "guStavo raMón chainTiou"
    });
});
app.get('/about', (req, res) => {
    res.render('about', {})
});
// app.get('/data', (req, res) => {
//     res.send('Hola Data');
// })
app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});