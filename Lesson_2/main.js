// №1 Почему код дает именно такие результаты?
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);         // 2 Сначала происходит инкрементирования, т.к. ++ префиксный
// d = b++; alert(d);         // 1 Здесь же наоборот ++ постфиксный, поэтому сначала операция отдает значение, потом увеличивает b на 1
// c = (2+ ++a); alert(c);    // 5 Сначала происходит инкрементирование a (оно становится равно 3), потом сложение с 2
// d = (2+ b++); alert(d);    // 4 Сначала сложение с 2 и вывод результата, потому уже инкрементация b
// alert(a);                  // 3 Очевидно, два раза инкрементировали на 1, получили 3
// alert(b);                  // 3 Очевидно, два раза инкрементировали на 1, получили 3

// №2 Чему будет равен x?
// var a = 2;
// var x = 1 + (a *= 2);
// x равен 5 (2*2+1 = 5)

// №3 Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;

let [a,b] = [11,2]

function comparison(a,b) {
    if (a>=0 && b>=0) {
        console.log(a-b)
    } else if (a<0 && b<0) {
        console.log(a*b)
    } else {
        console.log(a+b)
    }
}

// Запуск функции
console.log('Задание 3:')
comparison(a,b)


// №4 Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.
let x = 0

console.log('Задание 4:')
switch (x) {
    case 0:
        console.log(0)
    case 1:
        console.log(1)
    case 2:
        console.log(2)
    case 3:
        console.log(3)
    case 4:
        console.log(4)
    case 5:
        console.log(5)
    case 6:
        console.log(6)
    case 7:
        console.log(7)
    case 8:
        console.log(8)
    case 9:
        console.log(9)
    case 10:
        console.log(10)
    case 11:
        console.log(11)
    case 12:
        console.log(12)
    case 13:
        console.log(13)
    case 14:
        console.log(14)
    case 15:
        console.log(15)
}


// №5 Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

const add = (a,b) => a+b
const sub = (a,b) => a-b
const mul = (a,b) => a*b
const div = (a,b) => a/b

console.log('Задание 5:')
console.log(add(1,2))
console.log(sub(1,2))
console.log(mul(1,2))
console.log(div(1,2))


// №6 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 — значения аргументов, operation — строка с названием операции.
// В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5)
// и вернуть полученное значение (применить switch).


// Название согласно функция в задание 5 (add, sub, mul, div)
const mathOperation = function (arg1, arg2, operation) {
    switch (operation) {
        case 'add':
            return add(arg1,arg2)
        case 'sub':
            return sub(arg1,arg2)
        case 'mul':
            return mul(arg1,arg2)
        case 'div':
            return div(arg1,arg2)
    }
}
console.log('Задание 6:')
console.log(mathOperation(1,2, 'add'))
console.log(mathOperation(1,2, 'sub'))
console.log(mathOperation(1,2, 'mul'))
console.log(mathOperation(1,2, 'div'))


// №7 * Сравнить null и 0. Объяснить результат.

console.log('Задание 7:')
console.log(null == 0) // false
console.log(null > 0) // false
console.log(null < 0) // false
console.log(null >= 0) // true
console.log(null <= 0) // true

// Такое поведение связано с алгоритмами сравнений JS, описанные в ECMA
// Для оператора == в нашем случае вызывается дефолтный случай, возвращающий false
// Для операторов > и < в результате сравнения преобразует null +0, что не равняется 0 и ,соответсвенно, вернет нам false
// Для >= и <= у JS вообще прикол, потому что, т.к. операция > в нашем случае возвращает false, то оператор <= вернет true,
// аналогично для оператора >= верентся true.  ^_^


// №8 * С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val — заданное число, pow –— степень.
console.log('Задание 8:')




function power(val, pow) {
    if (pow>1) {
        let num = val * power(val, pow - 1)
        return num
    }
    return val
}

console.log(power(2,5))

// Конечно всегда можно использовать оператор ** :)
// console.log(3**3)