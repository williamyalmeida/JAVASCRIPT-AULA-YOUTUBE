
//ARRAYS
//PRIMEIRA FORMA DE COMO CRIAR UM ARRAY
// var nomes = [
//     'Antonio',
//     'Adriano',
//     'Michelle',
//     'Elaine',
//     'Deise',

// ];

// for(let i = 0; i < nomes.length; i++){
//     console.log(nomes[i])
// }


// //SEGUNDA FORMA DE COMO CRIAR UM ARRAY

// var frutas = new Array(
//     'Banana', 'Goiaba', 'Laranja'
// )


// for(let f = 0; f < frutas.length; f++){
//     console.log(frutas[f])
// }


// Alterando valor de uma posição
// var frutas = new Array(
//     'Banana', 'Goiaba', 'Laranja'
// )

// //Trocando de 'Goiaba para Abacaxi
// // frutas[2] = 'Abacaxi';
// // console.log(frutas)


// //push -- adciona um item no final do array

// frutas.push('Tangerina')
// console.log(frutas)

// //unshift == adiciona um item no inicio do array
// frutas.unshift('Beterraba')
// console.log(frutas)

// //pop -- remove o ultimo item
// frutas.pop()
// console.log(frutas)

// //shift - remove o primeiro elemento
// frutas.shift()
// console.log(frutas)


//splice - deleta elementos a partir da posição do argumento

var frutas = new Array(
    'Banana', 'Goiaba', 'Laranja', 'Abacate', 'Melencia', 'Morango'
)

// frutas.splice(3,1)
// //começa a remover apartir do 3 segundo parametro apenas apague 1
// console.log(frutas)


frutas.splice(3,2)
//começa a remover apartir do 3 segundo parametro apenas apague 2
console.log(frutas)
