let numero = parseInt(prompt('INGRESAR numero'));

if (numero >=1 || numero <=4) {
    switch (numero) {
        case 1:
            console.log("Elegiste a Homero");
            break;
        case 2:
            console.log("Elegiste a Marge");
            break;
        case 3:
            console.log("Elegiste a Bart");
            break;
        case 4:
            console.log("Elegiste a Lisa");
            break;

    }
} else console.log("ingresa otro numero"); 