// №1 С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
console.log('\nЗадание 1')
let i = 2
let isPrime = true
loop: while (i<100){
    for (let j = 2; j < Math.sqrt(i); j++) {
        if (i%j === 0) {
            i++
            continue loop
        }
    }
    console.log(i)
    i++
}

// №2-3 С этого урока начинаем работать с функционалом интернет-магазина.
// Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Организовать такой массив для хранения товаров в корзине;
// Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let basket = [
    {'name': 'product 1','price': 100},
    {'name': 'product 2','price': 150},
    {'name': 'product 3','price': 215}
]

function countBasketPrice (basket) {
    let count = 0
    for (let i = 0; i < basket.length; i++) {
        count+=basket[i].price
    }
    return count
}

console.log('\nЗадание 2-3')
console.log(countBasketPrice(basket))


// №4* Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
console.log('\nЗадание 4')
for (let i = 0; i < 10; console.log(i++)) {
}

// №5* Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке
console.log('\nЗадание 5')
for (let i = 1; i < 21; i++) {
    console.log('*'.repeat(i))
}