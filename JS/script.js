// Capturando elementos do HTML

const medCat1 = document.getElementById("medCat1");
const medCat2 = document.getElementById("medCat2");

const btnCalc1 = document.getElementById("btnCalc1");
const resultCalc1 = document.getElementById("resultCalc1");

const medHip = document.getElementById("medHip");
const medCat3 = document.getElementById("medCat3");

const btnCalc2 = document.getElementById("btnCalc2");
const resultCalc2 = document.getElementById("resultCalc2");


// Criando as funções

function calcHipotenusa(a, b) {

    const firstStep = (a ** 2) + (b ** 2);

    const result1 = Math.sqrt(firstStep).toFixed(1);

    return result1;
}


function calcCateto(a, b) {

    const firstStep = (a ** 2) - (b ** 2);

    const result2 = Math.sqrt(firstStep).toFixed(1);

    return result2;
}

function clean() {

}

// Botão chamando a função

btnCalc1.addEventListener("click", function () {

    const valueCat1 = parseFloat(medCat1.value);
    const valueCat2 = parseFloat(medCat2.value);

    if (valueCat1 < valueCat2) {
        resultCalc1.value = "0"
        resultCalc1.style.color = "red";
    }
    else {
        resultCalc1.value = calcHipotenusa(valueCat1, valueCat2);
        resultCalc1.style.color = "";
    }

});


btnCalc2.addEventListener("click", function () {

    const valueHip = parseFloat(medHip.value);
    const valueCat3 = parseFloat(medCat3.value);

    if (valueHip <= valueCat3) {
        resultCalc2.value = "0"
        resultCalc2.style.color = "red";
    }
    else {
        resultCalc2.value = calcCateto(valueHip, valueCat3);
        resultCalc2.style.color = "";
    }
});