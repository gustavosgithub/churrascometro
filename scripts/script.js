//Carne - 400 gr por pessoa + de 6 horas - 650
//Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
//Refrigerante - 1000 ml por pessoa + 6 horas 1500 ml

//crianças valem por 0,5
//Mulheres cerveja 0,8
//Mulheres carne 0,95
//Mulheres bebidas 1,5

let inputHomens = document.getElementById("homens")
let inputMulheres = document.getElementById("mulheres")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

//FUNÇÃO DE CALCULO DO CHURRASCO APLICADA NO BOTÃO CALCULAR

function calcular(){
    console.log("esta funcionando")
    let homens = inputHomens.value
    let mulheres = inputMulheres.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qtdTotalCarne = carnePP(duracao) * homens + (carnePP(duracao) * mulheres) * 0.95 + (criancas * carnePP(duracao)) * 0.5
    let qtdTotalCerveja= cervejaPP(duracao) * homens + (cervejaPP(duracao) * mulheres) * 0.8
    let qtdTotalBebidas = bebidasPP(duracao) * homens + (bebidasPP(duracao) * mulheres) * 1.15 + (criancas * bebidasPP(duracao)) * 0.5

    resultado.innerHTML= `<p>${Math.ceil(qtdTotalCarne/1000)} KG de Carne</p>`
    resultado.innerHTML+= `<p>${Math.ceil(qtdTotalCerveja/ 355)} Latas de Cerveja</p>`
    resultado.innerHTML+= `<p>${Math.ceil(qtdTotalBebidas/ 2000)} Garrafas de Bebidas</p>`
}
 // FUNÇÃO RELAÇÃO ALIMENTOS/DURAÇÃO
function bebidasPP(duracao){
    if(duracao >= 6){ 
        return 1500}
    else {
    return 1000}    
 }

 function carnePP(duracao){
    if(duracao >= 6){
        return 650
    }else{
        return 400
    }
}

 function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000}
    else {
    return 1200}
 }
 // BUTÃO FUNÇÃO
 function onOver(elemento){
     elemento.style.backgroundColor = "#9d1616"

 }
 function onOut(elemento){
    elemento.style.backgroundColor = "#404040"

}
