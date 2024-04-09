// scroll из header

let links = document.querySelectorAll('.menu-item > a')
for (let i = 0; i < links.length; i++){
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: 'smooth'})
    }
}


//ссылки из footer

let footerLinks = document.querySelectorAll('.footer-item > a')
for (let i = 0; i < footerLinks.length; i++){
    footerLinks[i].onclick = function () {
        document.getElementById(footerLinks[i].getAttribute("data-link")).scrollIntoView({behavior: 'smooth'})
    }
}



// burger menu

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

// navBtn.onclick = function () {
//     navIcon.classList.toggle('nav-icon--active');
//     nav.classList.toggle('header__top-row--mobile');
//     document.body.classList.toggle('no-scroll');
// }



function toggleCard(card) {
    card.classList.toggle('is-flipped');
}



const questions = [
    {
        question: "Как создать функцию в Python?",
        optionA: "def my_function()",
        optionB: "function my_function()",
        optionC: "create function my_function()",
        optionD: "def function()",
        correctOption: "optionA"
    },

    {
        question: "Что такое lambda-функция в Python?",
        optionA: "Это функция, которая работает только с целыми числами.",
        optionB: "Это анонимная функция, которая может содержать только одно выражение.",
        optionC: "Это функция, которая вызывается только по запросу.",
        optionD: "Это специальный метод для работы с массивами.",
        correctOption: "optionB"
    },

    {
        question: "Что делает оператор yield в Python?",
        optionA: "Он возвращает значение из функции и приостанавливает ее выполнение.",
        optionB: "Он используется для умножения двух чисел.",
        optionC: "Он обозначает начало новой строки кода.",
        optionD: "Он выполняет операцию сравнения двух значений.",
        correctOption: "optionA"
    },

    {
        question: "Что такое рекурсия в Python?",
        optionA: "Это способность функции вызывать саму себя.",
        optionB: "Это способность функции быть вызванной только один раз.",
        optionC: "Это способность функции работать с разными типами данных.",
        optionD: "Это способность функции делать операции с массивами.",
        correctOption: "optionA"
    },

    {
        question: "Какая разница между списком (list) и кортежем (tuple) в Python?",
        optionA: "Список изменяем, а кортеж неизменяем.",
        optionB: "Список может содержать только числа, а кортеж - только строки.",
        optionC: "Список и кортеж идентичны и могут быть использованы взаимозаменяемо.",
        optionD: "Список и кортеж оба изменяемы.",
        correctOption: "optionA"
    },

    {
        question: "Как создать класс в Python?",
        optionA: "create MyClass:",
        optionB: "class MyClass:",
        optionC: "def MyClass():",
        optionD: "class create MyClass():",
        correctOption: "optionB"
    },

    {
        question: "Что такое метод в Python?",
        optionA: "Это переменная, которая хранит значение.",
        optionB: "Это функция, определенная внутри класса.",
        optionC: "Это специальный тип данных.",
        optionD: "Это специальный оператор для работы с массивами.",
        correctOption: "optionB"
    },

    {
        question: "Какой метод используется для перегрузки оператора сложения (+) в Python?",
        optionA: "add()",
        optionB: "plus()",
        optionC: "sum()",
        optionD: "concat()",
        correctOption: "optionA"
    },

    {
        question: "Чему равно выражение 0.1 + 0.1 + 0.1 в Python?",
        optionA: "0.1",
        optionB: "10",
        optionC: "1",
        optionD: "0.3",
        correctOption: "optionD"
    },

    {
        question: `Как преобразовать строку в список символов в Python?`,
        optionA: "list(string)",
        optionB: "string.split()",
        optionC: "[char for char in string]",
        optionD: "string.toCharArray()",
        correctOption: "optionC"
    },

    {
        question: "Что такое генератор в Python?",
        optionA: "Функция, которая генерирует случайные числа.",
        optionB: "Объект, который используется для создания графических изображений.",
        optionC: "Функция, которая возвращает итератор, по которому можно проходить только один раз.",
        optionD: "Функция, которая создает последовательность значений на основе определенного алгоритма.",
        correctOption: "optionD"
    },

    {
        question: "Как создать в Python список, содержащий квадраты чисел от 1 до 10?",
        optionA: "[x * x for x in range(1, 10)]",
        optionB: "[x ** 2 for x in range(1, 11)]",
        optionC: "[pow(x, 2) for x in range(1, 11)]",
        optionD: "[math.square(x) for x in range(1, 11)]",
        correctOption: "optionB"
    },
    {
        question: "Самый лучший сайт, созданный на Python",
        optionA: "Кото книг",
        optionB: "Книга код",
        optionC: "Книга кот",
        optionD: "Кодо книг",
        correctOption: "optionB"
    }
]


const down = document.querySelector('.down-button')
const up = document.querySelector('.up-button')
const container = document.querySelector('.cont')

const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const  slidesCont = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slidesCont - 1) * 100}vh`


let activeSlideIndex = 0



up.addEventListener('click', () =>{
    changeSlide('up')
})

down.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp'){
        changeSlide('up')
    }else if (event.key === 'ArrowDown'){
        changeSlide('down')
    }
})

function changeSlide(direction){
    if (direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex === slidesCont){
            activeSlideIndex = 0
        }
    } else if (direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0 ){
            activeSlideIndex = slidesCont - 1
        }
    }

    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}