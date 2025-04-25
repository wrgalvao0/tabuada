let botao = document.getElementById("botao-calcular")
let resultados = document.getElementById("container-resultados")
botao.addEventListener('click', function () {
    resultados.textContent = ""
    let tabuadaNumero = document.getElementById("tabuada-numero");
    let maximoMultiplicacao = document.getElementById("maximo-multiplicacao");
    for(let i=1; i<parseInt(maximoMultiplicacao.value) + 1; i++){
        let result = tabuadaNumero.value * i
        let resultado = document.createElement('p')
        resultado.textContent = `${tabuadaNumero.value} X ${i} = ${result}`
        console.log(result)
        resultados.appendChild(resultado)   
    }
})
