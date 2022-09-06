function esPalindromo(n) {
    alReves = "";
    stringSinEspacios = n.split(" ").join("").toUpperCase();
    alReves = stringSinEspacios.split("").reverse().join("");

    if (stringSinEspacios == alReves) {
        document.getElementById('resultado').innerHTML = "es palindromo";
    } else {
        document.getElementById('resultado').innerHTML = "NO es palindromo";
    }
}