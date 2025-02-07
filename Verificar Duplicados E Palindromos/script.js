//Verificar se é palindromo.


document.getElementById("palindromeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    verificarPalindromo();
});

function verificarPalindromo() {
    var palavra = document.getElementById("word").value;
    var palavraLimpa = palavra.replace(/\s/g, '').toLowerCase();
    var palavraInvertida = palavraLimpa.split('').reverse().join('');

    if (palavraLimpa === palavraInvertida) {
        document.getElementById("palindrome-result").innerHTML = "É um palíndromo!";
    } else {
        document.getElementById("palindrome-result").innerHTML = "Não é um palíndromo!";
    }
}

//Remover Duplicata 

function removerDuplicados(array){
    conjuntoUnico = new Set(array);

    arraySemDuplicados = [...conjuntoUnico];

    return arraySemDuplicados;

}

function obterArrayDoUsuario(){
    input = prompt ("Digite os elementos do Array, separados por virgula.(Ex: 1, 2, 3, ...");
    array = input.split(',').map(Number);
    return array;
}

arrayOriginal = obterArrayDoUsuario();
arraySemDuplicados = removerDuplicados(arrayOriginal);
alert("Array original: " +JSON.stringify(arrayOriginal));
alert("Array sem os duplicados: " +JSON.stringify(arraySemDuplicados));


