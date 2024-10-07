/*
2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
a) Imprima no console o array completo
b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista*/

let array = ['lasanha','pizza','macarrão','churrasco','strogonofe']
let i = 0
console.log (`${array}`)
console.log ('Estas são minhas comidas preferidas:')
console.log (array[0])
console.log (array[1])
console.log (array[2])
console.log (array[3])
console.log (array[4])

comidaUsuario = prompt ('Qual sua comida favorita?')
console.log (array[0])
console.log (comidaUsuario)
console.log (array[2])
console.log (array[3])
console.log (array[4])