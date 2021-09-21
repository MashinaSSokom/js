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