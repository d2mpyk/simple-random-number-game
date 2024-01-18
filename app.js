// simple random number game in javascript
let nombre = prompt('Hola, por favor escribe tu nombre: ');
alert(`Bienvenido ${nombre.trim().replace(/^\w/, (c) => c.toUpperCase())}, al juego del numero aleatorio. `);
let numeroLimite = 100;
let numeroAleatorio = Math.floor(Math.random() * numeroLimite) + 1;
let intentos = 5;

while (intentos > 0) {
    let numeroUsuario = prompt(`Adivina el numero aleatorio, del 0 al ${numeroLimite}, tienes ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    if (numeroUsuario == numeroAleatorio) {
        Alert(`Acertaste el numero aleatorio en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        break;
    } else {
        if (numeroUsuario > numeroAleatorio) {
            alert('El numero es menor!');
        } else alert('El numero es mayor!');
        intentos--;
        if (intentos == 0) {
            alert(`Que pena, se agotaron los intentos, el numero es: ${numeroAleatorio}`)
        }
    }
}