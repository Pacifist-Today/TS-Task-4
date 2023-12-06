// Створіть інтерфейс, який описує структуру об'єкта, що представляє калькулятор. Калькулятор повинен мати методи
// для виконання арифметичних операцій: додавання, віднімання, множення та ділення. Потім створіть функцію calculate,
// яка приймає об'єкт цього типу та виконує операцію і повертає результат.
var calculator = function () {
    var result = 0;
    var sum = function (a) {
        result += a;
    };
    var subtract = function (a) {
        result -= a;
    };
    var multiply = function (a) {
        result *= a;
    };
    var divide = function (a) {
        result /= a;
    };
    var getResult = function () {
        return result;
    };
    return {
        getResult: getResult,
        sum: sum,
        subtract: subtract,
        multiply: multiply,
        divide: divide
    };
};
var calcFunc = calculator();
calcFunc.sum(5); // 5
calcFunc.subtract(2); // 3
calcFunc.multiply(4); // 12
calcFunc.divide(3); // 4
console.log(calcFunc.getResult()); //4
var bookServices = /** @class */ (function () {
    function bookServices() {
        this._books = [];
        this._authors = [];
    }
    Object.defineProperty(bookServices.prototype, "books", {
        get: function () {
            return this._books;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(bookServices.prototype, "authors", {
        get: function () {
            return this._authors;
        },
        enumerable: false,
        configurable: true
    });
    bookServices.prototype.getAuthorsBook = function (author) {
        return this._books.filter(function (book) { return book.authorFullName === author; });
    };
    bookServices.prototype.getGenreBooks = function (genre) {
        return this._books.filter(function (book) { return book.genres.includes(genre); });
    };
    bookServices.prototype.getActualBooks = function (date, range) {
        return range === "newest"
            ?
                this._books.sort(function (cur, next) { return cur.published - next.published; })
            :
                this._books.sort(function (cur, next) { return next.published - cur.published; });
    };
    bookServices.prototype.getRangedBooksByYears = function (oldest, newest) {
        return this._books
            .filter(function (book) { return book.published >= oldest && book.published <= newest; });
    };
    bookServices.prototype.getRangedBooksByScores = function (lowest, highest) {
        return this._books
            .filter(function (book) { return book.score >= lowest && book.score <= highest; });
    };
    return bookServices;
}());
