const prices: (number | string)[] = [1, 2, 3, '4', '5', '6'];
prices.push(77)
prices.push('77')

// Tuplas

let usuario: [string, number, boolean]

usuario = ['Philip', 42, true]
const [userName, age] = usuario

console.log(userName, age)
