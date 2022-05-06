function sum (numbers) {
    let result = 0
    numbers.forEach(num => numbers.length === 0 ? result = 0 : result = result + num);
    return result;
};

console.log(sum([1, 5.2, 4, 0, -1]))
console.log(sum([]))

//! Solucion de codewars con .reduce

//TODO: return numbers.reduce((a, b) => a + b, 0);

//! esta funcion utiliza como parametro .reduce((valorPrevio, valorActual) => operacion, valorInicial);