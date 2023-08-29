function somarNumero(){
    let n1 = Number(prompt('Digite o primeiro número:'))
    let n2 = Number(prompt('Digite o segundo numero:'))
    let soma = n1 + n2
    console.log(`A soma dos dois números é: ${soma}`)
}

somarNumero()

function compararNumero(){
    let nu1 = Number(prompt('Digite o primeiro número:'))
    let nu2 = Number(prompt('Digite o segundo número:'))
    let maiorIgual = nu1 >= nu2
    console.log(`O primeiro número é maior ou igual ao segundo? ${maiorIgual}`)
}

compararNumero()

function lerRestoZero(){
    let num1 = Number(prompt('Digite um número:'))
    let par = num1 % 2 === 0
    console.log(`O número digitado é par? ${par}`)
}

lerRestoZero()

const salario = ()=>{
    let salarioBruto = Number(prompt('Digite seu salário bruto:'))
    console.log(salarioBruto)
    const salarioLiquido = (salarioBruto - (salarioBruto * 0.1))
    let resultado = console.log(`O salário líquido é: ${salarioLiquido}`)
    return(resultado)
}

salario()
