// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))
// one euro is:

// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };
// declaramos una funcion con el mismo nombre "formEuroToDollar"

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
    // tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = (valueInDollar / 1.2) * 127.9;
    // retornamos el valor
    return parseFloat(valueInYen.toFixed(1));
}
const fromYenToPound = function(valueInYen){
    let valueInPound = (valueInYen /127.9) * 0.8;
    return parseFloat(valueInPound.toFixed(1))
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound}
