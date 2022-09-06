var letras = ['T', 'R', 'W', 'A', 'G', 'M',
    'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
    'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function verificar() {

    let numDni = document.getElementById('num').value;
    let letraDni= (document.getElementById('letra').value).toUpperCase();


    if (99999999 < numDni < 0) {//se comprueba q el num sea valido
        alert('el numero introducido no es valido!');

    }
    else {
        //si es valido
        let posicionLetra = numDni % 23;//calcula letra a través de la posicion en el array obtenida saccando el modulo de numeroDNi/23
        let letraCorrecta = letras[posicionLetra];

        console.log(letraDni);
        console.log(letraCorrecta);

        if (letraCorrecta == letraDni) {//si la letra es correcta
            alert('DNI válido!')//todo ok
        } else {//si no
            alert('DNI NO válido, la letra no es correcta!')
        }
    }
}
