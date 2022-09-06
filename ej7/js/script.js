function calcula() {
    numero = document.getElementById('num').value;
    res = 1;
    for (let i = 1; i < numero; i++) {
        res *= i + 1;
    }
    console.log(res);
    document.getElementById('resultado').innerHTML =   "factorial = " + res;
}