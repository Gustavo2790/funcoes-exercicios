let numero1 = Number(prompt('Digite o primeiro número:'))
let numero2 = Number(prompt('Digite o segundo número:'))

const somarNumero = ()=>{
    let soma = numero1 + numero2
    let resultadoSoma = console.log(`A soma dos dois números é: ${soma}`)
    return(resultadoSoma)
}
somarNumero()

const subtrairNumero = ()=>{
    let subtracao = numero1 - numero2
    let resultadoSubtracao = console.log(`A subtração dos dois números (primeiro - segundo) é: ${subtracao}`)
    return(resultadoSubtracao)
}
subtrairNumero()

const multiplicarNumero = ()=>{
    let multiplicacao = numero1 * numero2
    let resultadoMultiplicacao = console.log(`A multiplicação dos dois números (primeiro * segundo) é: ${multiplicacao}`)
    return(resultadoMultiplicacao)
}
multiplicarNumero()

const dividirNumero = ()=>{
    let divisao = numero1 / numero2
    let resultadoDivisao = console.log(`A divisão dos dois números (primeiro / segundo) é: ${divisao}`)
    return(resultadoDivisao)
}
dividirNumero()