function init() {
    console.log('Init game!')
    window.gameId = -1
    window.fieldSize = document.querySelector('#field-size').value
    window.snakeSpeed = document.querySelector('#snake-speed').value
    window.direction = 'up'
    window.wallCoords = null
    window.foodCoords = null

    addEventListener('keydown', changeDirection)
    if (fieldSize && snakeSpeed) {
        if (fieldSize < 3) {
            alert('Слишком маленький размер поля')
        } else if (snakeSpeed < 1) {
            alert('Некорректная скорость змейки')
        } else {
            startGame()
        }
    } else {
        alert('Введите стартовые значения!')
    }
}

function startGame() {
    console.log('Start game!')
    renderField(fieldSize)
    let startSnakeCoords = computeStartSnakeCoords(fieldSize)
    renderSnake(startSnakeCoords)
    window.coords = [...startSnakeCoords]
    spawnFood()
    window.gameId = setInterval(move, 1000/snakeSpeed)
    setTimeout(spawnWall, 5000)
    //    Проверка победы
}

function spawnFood() {
    let spawned = false
    while (!spawned) {
        window.foodCoords = {
            x: Math.floor(Math.random()*fieldSize),
            y: Math.floor(Math.random()*fieldSize)
        }
        if (!coords.includes(foodCoords)) {
            spawned = true
            let foodCell = document.querySelector(`.cell-${foodCoords.x}-${foodCoords.y}`)
            foodCell.classList.add('food')
        }
    }
}

function spawnWall() {
    let spawned = false
    while (!spawned) {
        window.wallCoords = {
            x: Math.floor(Math.random()*fieldSize),
            y: Math.floor(Math.random()*fieldSize)
        }
        if (!coords.includes(wallCoords)) {
            spawned = true
            let foodCell = document.querySelector(`.cell-${wallCoords.x}-${wallCoords.y}`)
            foodCell.classList.add('wall')
        }
    }
}

function move() {
    let newSnakeHeadCoords
    switch (direction) {
        case 'up':
            newSnakeHeadCoords = {
                x: coords[0].x - 1,
                y: coords[0].y
            }
            break
        case 'down':
            newSnakeHeadCoords = {
                x: coords[0].x + 1,
                y: coords[0].y
            }
            break
        case 'left':
            newSnakeHeadCoords = {
                x: coords[0].x,
                y: coords[0].y - 1
            }
            break
        case 'right':
            newSnakeHeadCoords = {
                x: coords[0].x,
                y: coords[0].y + 1
            }
            break
    }
    let oldLastSnakeUnit = coords.pop()
    deleteTail(oldLastSnakeUnit)
    coords.unshift(newSnakeHeadCoords)



    if ((coords[0].x == -1 || coords[0].y == -1 || coords[0].x == fieldSize || coords[0].y == fieldSize) || checkIntersection(coords) || JSON.stringify(coords[0]) == JSON.stringify(wallCoords)) {
        alert('Вы проиграли!')
        clearInterval(gameId)
        return
    } else if (foodCoords){
        if (JSON.stringify(coords[0]) == JSON.stringify(foodCoords)) {
            addSnakeUnit()
            let foodCell = document.querySelector(`.cell-${foodCoords.x}-${foodCoords.y}`)
            foodCell.classList.remove('food')
            renderSnake(coords)
            setTimeout(spawnFood, 3000)
        }
    }
    renderSnake(coords)
}

function checkIntersection(coords) {
    for (let i = 1; i < coords.length; i++) {
        if (JSON.stringify(coords[0]) == JSON.stringify(coords[i])) {
            return true
        }
    }
    return false
}

function addSnakeUnit() {
    switch (direction) {
        case "up":
            coords.push({
                x: coords[coords.length-1].x-1,
                y:coords[coords.length-1].y
            })
            break
        case "down":
            coords.push({
                x: coords[coords.length-1].x+1,
                y:coords[coords.length-1].y
            })
            break
        case "left":
            coords.push({
                x: coords[coords.length-1].x,
                y:coords[coords.length-1].y -1
            })
            break
        case "right":
            coords.push({
                x: coords[coords.length-1].x,
                y:coords[coords.length-1].y + 1
            })
            break
    }
    let score = document.querySelector('#score')
    score.textContent = `Счет: ${coords.length - 2}`
}

function renderField() {
    console.log('Render Field!')
    let gameField = document.querySelector('#game-field')
    gameField.innerHTML = ''
    gameField.border = '1';
    for (let i = 0; i < fieldSize; i++) {
        let fieldRow = document.createElement('tr')
        fieldRow.classList.add(`row-${i}`)
        for (let j = 0; j < fieldSize; j++) {
            let fieldCell = document.createElement('td')
            fieldCell.classList.add(`cell-${i}-${j}`)
            fieldCell.style.width = `30px`
            fieldCell.style.height = `30px`
            fieldCell.style.backgroundColor = `green`
            fieldRow.append(fieldCell)
        }
        gameField.append(fieldRow)
    }
}

function deleteTail(coords) {
    let tail = document.querySelector(`.cell-${coords.x}-${coords.y}`)
    tail.classList.remove('snake')
}

function computeStartSnakeCoords() {
    return [
        {
            x: Math.floor(fieldSize / 2),
            y: Math.floor(fieldSize / 2)
        },
        {
            x: Math.floor(fieldSize / 2) + 1,
            y: Math.floor(fieldSize / 2)
        }
    ]
}

function renderSnake(coords) {
    for (let i = 0; i < coords.length; i++) {
        let snakeUnit = document.querySelector(`.cell-${coords[i].x}-${coords[i].y}`)
        snakeUnit.classList.add('snake')
    }
}

function changeDirection(e) {
    switch (e.keyCode) {
        case 37:
            if (direction !='right') {
                window.direction = 'left'
            }
            break
        case 38:
            if (direction !='down') {
                window.direction = 'up'
            }
            break
        case 39:
            if (direction !='left') {
                window.direction = 'right'
            }
            break
        case 40:
            if (direction !='up') {
                window.direction = 'down'
            }
            break
        case 82:
            console.log('Перезапуск!')
            stopGame(gameId)
            init()
            break
    }
}

function stopGame(gameID) {
    clearInterval(gameID)
}


document.onload = alert('Для управления используюте стрелочки! Чтобы перезапустить игру нажмите клавижу R')