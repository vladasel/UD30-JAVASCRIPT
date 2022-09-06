function info(n) {
    maj = n.toUpperCase();
    min = n.toLowerCase();
    if (n == maj) {
        document.getElementById('resultado').innerHTML = "palabra solo con mayusculas";
    } else if (n == min) {
        document.getElementById('resultado').innerHTML = "palabra solo con minusculas";
    } else {
        document.getElementById('resultado').innerHTML = "palabra mixta";
    }
}