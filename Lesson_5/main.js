// №1 Создать функцию, генерирующую шахматную доску.
// Можно использовать любые html-теги. Доска должна быть верно разлинована на черные и белые ячейки.
// Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
function chess_generation() {
    let chess = document.querySelector(".chess")
    chess.style.cssText = `width: 800px;
    height: 800px;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;`
    let symbols = document.querySelector('.symbols-letters')
    symbols.style.cssText = `width: 900px; 
    height: 100px; 
    display: flex;`
    let symbol = document.createElement('div')
        symbol.className = 'symbol'
        symbol.style.cssText = `width: 12.5%; 
        display: flex; 
        align-items: center; 
        justify-content: center;`
    symbols.appendChild(symbol)

    for (let i = 0; i < 8; i++) {
        let symbol = document.createElement('div')
        symbol.className = 'symbol'
        symbol.style.cssText = `width: 12.5%; 
        display: flex; 
        align-items: center; 
        justify-content: center;`
        symbols.appendChild(symbol)
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
        symbols.appendChild(symbol)

    }
    let symbols_num = document.querySelector('.symbols-numbers')
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