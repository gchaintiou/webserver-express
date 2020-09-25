const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(" ");
    palabras.forEach((plabra, idx) => {
        palabras[idx] = plabra.charAt(0).toUpperCase() + plabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});