// №1 Создать функцию, генерирующую шахматную доску.
// Можно использовать любые html-теги. Доска должна быть верно разлинована на черные и белые ячейки.
// Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
function chess_generation() {
    let task_1 = document.createElement('div')
    task_1.className = 'task-1'
    task_1.textContent = 'Задание №1'
    document.body.insertAdjacentElement("afterbegin", task_1)

    let symbols_letters = document.createElement('div')
    symbols_letters.className = 'symbols-letters'
    task_1.appendChild(symbols_letters)
    symbols_letters.style.cssText = `width: 900px; 
    height: 100px; 
    display: flex;`
    let symbol = document.createElement('div')
        symbol.className = 'symbol'
        symbol.style.cssText = `width: 12.5%; 
        display: flex; 
        align-items: center; 
        justify-content: center;`
    symbols_letters.appendChild(symbol)

    for (let i = 0; i < 8; i++) {
        let symbol = document.createElement('div')
        symbol.className = 'symbol'
        symbol.style.cssText = `width: 12.5%; 
        display: flex; 
        align-items: center; 
        justify-content: center;`
        symbols_letters.appendChild(symbol)
        switch (i) {
            case 0:
                symbol.insertAdjacentHTML("afterbegin", '<p align="center">A</p>')
                break
            case 1:
                symbol.insertAdjacentHTML("afterbegin", '<p align="center">B</p>')
                break
            case 2:
                symbol.insertAdjacentHTML("afterbegin", '<p align="center">C</p>')
                break
            case 3:
                symbol.insertAdjacentHTML("afterbegin", '<p align="center">D</p>')
                break
            case 4:
                symbol.insertAdjacentHTML("afterbegin", '<p align="center">E</p>')
                break
            case 5:
                symbol.insertAdjacentHTML("afterbegin", '<p align="center">F</p>')
                break
            case 6:
                symbol.insertAdjacentHTML("afterbegin", '<p align="center">G</p>')
                break
            case 7:
                symbol.insertAdjacentHTML("afterbegin", '<p align="center">H</p>')
                break
        }
        symbols_letters.appendChild(symbol)
    }

    let container = document.createElement('div')
    container.className = 'container'
    container.style.display = 'flex'
    task_1.appendChild(container)


    let symbols_num = document.createElement('div')
    symbols_num.className = 'symbols-numbers'
    symbols_num.style.cssText = `width: 100px; 
    height: 800px; 
    display: flex;
    flex-direction: column;`
    for (let i = 0; i < 8; i++) {
        let symbol = document.createElement('div')
        symbol.className = 'symbol'
        symbol.style.cssText = `height: 12.5%; 
        display: flex; 
        align-items: center; 
        justify-content: center;`
        switch (i) {
            case 0:
                symbol.insertAdjacentHTML("afterbegin", '<p align="center">1</p>')
                break
            case 1:
                symbol.insertAdjacentHTML("afterbegin", '<p align="center">2</p>')
                break
            case 2:
                symbol.insertAdjacentHTML("afterbegin", '<p align="center">3</p>')
                break
            case 3:
                symbol.insertAdjacentHTML("afterbegin", '<p align="center">4</p>')
                break
            case 4:
                symbol.insertAdjacentHTML("afterbegin", '<p align="center">5</p>')
                break
            case 5:
                symbol.insertAdjacentHTML("afterbegin", '<p align="center">6</p>')
                break
            case 6:
                symbol.insertAdjacentHTML("afterbegin", '<p align="center">7</p>')
                break
            case 7:
                symbol.insertAdjacentHTML("afterbegin", '<p align="center">8</p>')
                break
        }
        symbols_num.appendChild(symbol)
    }
    container.appendChild(symbols_num)

    let chess = document.createElement("div")
    chess.className = 'chess'
    chess.style.cssText = `width: 800px;
    height: 800px;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;`
    container.appendChild(chess)
    for (let i = 0; i < 64; i++) {
        let chess_field = document.createElement('div')
        chess_field.className = 'chess_field'
        chess_field.style.cssText = `width: 12.5%;
            height: 12.5%;`
        if ((i%2===0 && parseInt(i/8)%2===1)||(i%2===1 && parseInt(i/8)%2===0)){
            chess_field.style.backgroundColor = 'black'
        }
        chess.appendChild(chess_field)
    }
}
chess_generation()

// №2
// Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
// Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// a. Пустая корзина должна выводить строку «Корзина пуста»;
// b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».


function basket_generation(products) {
    console.log(products)
    let task_2 = document.querySelector('.task-2')
    basket = document.createElement('div')
    basket.className = 'basket'
    task_2.appendChild(basket)
    basket.style.cssText = `display: flex;
    flex-wrap: wrap;
    justify-content: begin;`
    if (products.length > 0) {
        basket.insertAdjacentHTML('beforebegin',
            `<p>В корзине: ${products.length} позиций на сумму 
                    ${products.reduce(function (sum, temp) {
                        return sum + temp.price
            }, 0)}</p>
                  <p style="font-size: large">Товары в корзине:<p/>`)
        for (let i = 0; i < products.length; i++) {
            let basket_item = document.createElement('div')
            basket_item.className = 'basket-item'
            basket_item.style.cssText = ` width: 200px;
            height: 250px;
            border: 1px solid`
            basket_item.insertAdjacentHTML("afterbegin", ` <p style="text-align: center">Название: ${products[i].name}</p> 
                                                                      <p style="text-align: center">Стоимость: ${products[i].price}</p> `)
            basket.appendChild(basket_item)
        }
    } else {
        basket.textContent = 'Корзина пуста!'
    }


}

let basket_ex_1 = [
    {'name': 'product 1','price': 100},
    {'name': 'product 2','price': 150},
    {'name': 'product 2','price': 150},
    {'name': 'product 2','price': 150},
    {'name': 'product 2','price': 150},
    {'name': 'product 2','price': 150},
    {'name': 'product 3','price': 215}]

let basket_ex_2 = []

basket_generation(basket_ex_1)

// p.s. нужно подать массив в функцию
