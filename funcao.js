function nome() {
}

nome();

function somaDoisNumeros() {
    let n1 = 10;
    let n2 = 20;

    let resultado = n1 + n2;

    return resultado;
}

console.log(somaDoisNumeros());

function somaDoisNumerosComParametros(n1, n2) {
    let resultado = n1 + n2;

    return resultado;
}

console.log(somaDoisNumerosComParametros(10, 50));

function somaMedia(n1, n2, n3) {
    let soma = n1 + n2 + n3;
    let media = soma / 3;
    return `A soma dos números é: ${soma} e a média é: ${media}`;
}

console.log(somaMedia(10, 20, 30));

function adicao(n1, n2, n3) {
    let result = n1 + n2 + n3;
    return result;
}

function media(n1, n2, n3) {
    let sum = soma(n1, n2, n3);
    let resultado = sum / 3;
    
    return "a soma eh: " + sum + " e a media eh: " + media;
}

console.log(media);