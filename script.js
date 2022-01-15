let inputadultos = document.getElementById ("adultos");
let inputcriancas = document.getElementById ("criancas");
let inputduracao = document.getElementById ("duracao");

let resultado = document.getElementById ("resultado");

function calcular(){
    console.log("calculando ...");

    let adultos = inputadultos.value;
    let criancas = inputcriancas.value;
    let duracao = inputduracao.value;
   

    let qdtTotalcarne = carnepp(duracao) * adultos +(carnepp(duracao) / 2 * criancas);
    console.log(qdtTotalcarne)
    let qdtTotalcerveja = cervejapp(duracao) * adultos;
    console.log(qdtTotalcerveja)
    let qdtTotalbebidas = bebidaspp(duracao) * adultos +(bebidaspp(duracao) / 2 * criancas);
    console.log(qdtTotalbebidas)
    


}

function carnepp (duracao){
    if(duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejapp (duracao){
    if(duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidaspp (duracao){
    if(duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}