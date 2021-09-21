function task_1() {
    let task_1 = document.querySelector('#task_1')
    task_1.style.cssText = `
        display: flex;
        justify-content: space-evenly;
    `
    task_1.insertAdjacentHTML('afterend', `<div class='big-picture' style="margin-top:25px; text-align: center;"></div>`)


    for (let i = 1; i < 4; i++) {
        let img = document.createElement('img')
        img.id = i.toString()
        img.src = `small/${i}.png`
        task_1.appendChild(img)
        img.onclick = function (e) {

            let b_picture = document.querySelector('.big-picture')
            b_picture.innerHTML = ''
            let b_img = document.createElement('img')
            b_img.src = `big/${e.target.id}.png`
            b_picture.append(b_img)
            b_img.onerror = function (e) {
                alert('Большая версия картинки не найдена!')
                b_picture.innerHTML = ''
            }
        }
    }
}

function task_2() {
    let basket_list = []
    let products_list = [
        {name: 'computer', description: 'This is just computer...', price: '500', img: 'computer.png'},
        {name: 'headphones', description: 'This is just headphones...', price: '150', img: 'headphones.png'},
        {name: 'keyboard', description: 'This is just keyboard...', price: '250', img: 'keyboard.png'},
        {name: 'playstation', description: 'This is just playstation...', price: '399', img: 'playstation.png'},
        {name: 'smartphone', description: 'This is just smartphone...', price: '350', img: 'smartphone.png'},
    ]
    let task_2 = document.querySelector('#task_2')
    task_2.insertAdjacentHTML('beforeend', `<div class='basket' style="margin:15px; padding: 10px;"></div>`)
    task_2.insertAdjacentHTML('beforeend', `<div class='products' style="margin:15px; padding: 10px;"></div>`)
    let basket = document.querySelector('.basket')
    let basket_tittle = document.createElement('h1')
    basket_tittle.textContent = 'Корзина'
    basket.before(basket_tittle)
    let total_price = document.createElement('h3')
    total_price.className = 'total-price'
    total_price.textContent = 'К оплате: 0 руб'
    basket.append(total_price)
    let basket_products_list = document.createElement('h4')
    basket_products_list.className = 'basket-products-list'
    basket_products_list.textContent = 'Список покупок:'
    basket.append(basket_products_list)

    // for (let i = 0; i < products_list.length; i++)


    let products = document.querySelector('.products')
    products.style.cssText = `
        display: flex;
        flex-wrap: wrap;
    `
    let products_tittle = document.createElement('h1')
    products_tittle.textContent = 'Каталог'
    products.before(products_tittle)
    for (let i = 0; i < products_list.length; i++) {
        let product = document.createElement('div')
        product.className = 'product'
        product.style.cssText = `padding: 5px;
            width: 300px;
            height: 400px;
            border: 1px solid black;
            display: flex;
            flex-direction: column;
            justify-content: center;
        `
        let tittle = document.createElement('h3')
        tittle.textContent = `Название: ${products_list[i].name}`

        let description = document.createElement('p')
        description.textContent = `Описание: ${products_list[i].description}`

        let price = document.createElement('p')
        price.textContent = `Цена: ${products_list[i].price} руб.`

        let img = document.createElement('img')
        img.src = `products/${products_list[i].img}`
        img.style.cssText = `width:200px;
            height: 200px
        `

        let btn_buy = document.createElement('button')
        btn_buy.textContent = 'Купить'
        btn_buy.style.alignSelf = 'flex-end'
        btn_buy.onclick = function () {

            let products_in_basket = document.querySelectorAll('.product-in-basket')
            products_in_basket.forEach(e=>e.remove())
            basket_list.push(products_list[i])
            let count = 0
            for (let i = 0; i < basket_list.length; i++) {
                count += +basket_list[i].price
            }
            total_price = document.querySelector('.total-price')
            total_price.textContent = `К оплате: ${count} руб.`

            renderBasket(basket_list)
        }


        product.append(tittle, description, price, img, btn_buy)
        products.append(product)
    }

    let renderBasket = function (basket_list){
        let basket_list_to_render = []
        basket_list.forEach((el, i, arr) => {
            if ( basket_list_to_render.indexOf(el)!== -1 ){
                let idx = basket_list_to_render.findIndex(e => e===el)
                basket_list_to_render[idx]['count'] += 1
            } else {
                el['count'] = 1
                basket_list_to_render.push(el)
            }
        })
        basket_list_to_render.forEach((el, i, arr) => {
            let product_in_basket = document.createElement('div')
            product_in_basket.className = 'product-in-basket'
            product_in_basket.style.cssText = `padding: 5px;
            width: 400px;
            margin: 3px;
            border: 1px solid black;
            display: flex;
            flex-direction: column;
            justify-content: left;
        `
            let tittle = document.createElement('p')
            tittle.textContent = `Название: ${el.name}`
            tittle.style.margin = '0'
            let count = document.createElement('p')
            count.textContent = `Количество: ${el.count}`
            count.style.margin = '0'
            let price = document.createElement('p')
            price.textContent = `Стоимость: ${+el.price * el.count}`
            price.style.margin = '0'

            product_in_basket.append(tittle, count, price)
            basket.append(product_in_basket)
        })
    }
}