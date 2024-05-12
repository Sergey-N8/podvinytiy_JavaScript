// Задание 1
// Необходимо создать класс Library. Конструктор класса, должен принимать начальный  список книг (массив) 
// в качестве аргумента. Убедитесь, что предоставленный массив 
// не содержит дубликатов; в противном случае необходимо выбросить ошибку.
// 1. Класс должен содержать приватное свойство #books, которое должно хранить книги, переданные при создании объекта.
// 2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
// 3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием 
// уже существует в списке, выбросьте ошибку с 
// соответствующим сообщением.
// 4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким 
// названием нет в списке, выбросьте ошибку с 
// соответствующим сообщением.
// 5. Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или 
// false в зависимости от того, есть ли такая 
// книга в списке или нет.


// class Library {
//     #books = [];
//     constructor(initialBooks) {
//         if (!Array.isArray(initialBooks)) {
//             throw new Error('Начальный список книг должен быть предоставлен в виде массива.');
//         }

//         const uniqueBooks = new Set(initialBooks);
//         if (uniqueBooks.size !== initialBooks.length) {
//             throw new Error('Начальный список книг не может содержать дубликатов.');
//         }

//         this.#books = initialBooks;
//     }

//     get allBooks() {
//         return this.#books;
//     }

//     addBook(title) {
//         if (this.#books.includes(title)) {
//             throw new Error('Эта книга уже существует в библиотеке.');
//         }

//         this.#books.push(title);
//     }

//     removeBook(title) {
//         const index = this.#books.indexOf(title);
//         if (index === -1) {
//             throw new Error('Такой книги нет в библиотеке.');
//         }

//         this.#books.splice(index, 1);
//     }

//     hasBook(title) {
//         return this.#books.includes(title);
//     }
// }

// const myLibrary = new Library(['Книга 1', 'Книга 2', 'Книга 3']);

// console.log(myLibrary.allBooks);

// myLibrary.addBook('Книга 4');
// console.log(myLibrary.allBooks);


// myLibrary.removeBook('Книга 2');
// console.log(myLibrary.allBooks);
// myLibrary.removeBook('Книга 5');
// console.log(myLibrary.allBooks);

// console.log(myLibrary.hasBook('Книга 1'));
// console.log(myLibrary.hasBook('Книга 2'));



// Задание 2.
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить 
// слишком короткие 
// или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться 
// отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или 
// более 500 символов, 
// функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.


const initialData = [
    {
        product: "Xiaomi 13 Lite",
        reviews: [
            {
                id: "1",
                text: "Точно отражает уровень оставшегося заряда батареи. Быстрая зарядка, быстродействие хорошее.",
            },
            {
                id: "2",
                text: "Телефоном очень доволен ребенок. Оригинальный. Можем советовать данного продавца как очень надежного",
            },
        ],
    },
    {
        product: "Google Pixel 8",
        reviews: [
            {
                id: "3",
                text: "Все отлично. Немного смутили озоновские пломбы на коробке, но заводские отрывные пломбы тоже были на месте, так что все в порядке",
            },
        ],
    },
    {
        product: "Apple iPhone 14",
        reviews: [
            {
                id: "4",
                text: "Классный телефон, пришел быстрее чем это было указано при отправлении, продавцу большая благодарность",
            },
        ],
    },
];

const userInput = document.querySelector('.user_input');
const sendBtn = document.querySelector('.send_btn');
const reviews = document.querySelector('.reviews');
const divError = document.querySelector('.error_msg');

initialData.forEach(element => {
    const productName = document.createElement('h3');
    productName.textContent = element.product;
    reviews.appendChild(productName);
    element.reviews.forEach(review => {
        const defaultReview = document.createElement('p');
        defaultReview.textContent = review.text;
        reviews.appendChild(defaultReview);
    });
});


sendBtn.addEventListener('click', function () {
    try {
        if (userInput.value.trim().length < 50 || userInput.value.trim().length > 500) {
            throw new Error('Длина введенного отзыва менее 50 или более 500 символов')
        }
        const reviewElem = document.createElement('p');
        reviewElem.textContent = (userInput.value);
        reviews.appendChild(reviewElem);
        divError.textContent = '';
    } catch (error) {
        divError.textContent = error.message;
    }
});