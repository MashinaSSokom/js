// №1 Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function numberToObject (num) {
    if (num<=999 && num>=0){
        let obj = {'единицы': num%10, 'десятки': parseInt(num/10)%10, 'сотни': parseInt(num/100)}
        return obj
    }
    return console.log('Число не находится в диапазоне [0, 999]')
}
console.log('Задание 1')
console.log(numberToObject(836))

// №2 Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.

// На 3 уроке сразу использовал объекты

console.log('Задание 2')
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

console.log(countBasketPrice(basket))

// №3 * Подумать над глобальными сущностями.
// К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога.
// Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта,
// но в разных местах давал возможность вызывать разные методы.

// Например, для "Продукта" я бы использовал примерно такую модель:
let product = {
    name: '',
    price: 0,
    description: '',
    availableQuantity: 0,
    image: 'url'
}

// Если перенести в класс
class Product {
    constructor(name, price, description, availableQuantity, image) {
        this.name = name
        this.price = price
        this.description = description
        this.availableQuantity = availableQuantity
        this.image = image
    }
}

let product1 = new Product(
    'product 1',
    100,
    'this is just product 1',
    1,
    'imgURL'
)
console.log(product1)