// Створіть інтерфейс, який описує структуру об'єкта, що представляє калькулятор. Калькулятор повинен мати методи
// для виконання арифметичних операцій: додавання, віднімання, множення та ділення. Потім створіть функцію calculate,
// яка приймає об'єкт цього типу та виконує операцію і повертає результат.

interface Icalc {
    result? : number,
    sum: (a: number) => void,
    subtract: (a: number) => void,
    multiply: (a: number) => void,
    divide: (a: number) => void,
    getResult: () => number
}

const calculator = (): Icalc => {
    let result = 0

    const sum = (a: number): void => {
        result += a
    }

    const subtract = (a: number): void => {
        result -= a
    }

    const multiply = (a: number): void => {
        result *= a
    }

    const divide = (a: number): void => {
        result /= a
    }

    const getResult = (): number => {
        return result
    }

    return {
        getResult,
        sum,
        subtract,
        multiply,
        divide
    }
}

let calcFunc = calculator()
calcFunc.sum(5) // 5
calcFunc.subtract(2) // 3
calcFunc.multiply(4) // 12
calcFunc.divide(3) // 4

console.log(calcFunc.getResult()) //4



// BookStore

// Уявіть, що ви створюєте інтерфейси для веб-сервісу, який надає інформацію про книги.
// Створіть інтерфейси Book, Author, і BookService, які описують структуру даних книжок, авторів і методи веб-сервісу
// для отримання інформації про книжки та авторів. Потім створіть об'єкт bookService, який імітує роботу веб-сервісу,
// і використовуйте інтерфейси для отримання інформації про книги та авторів.

interface IBook {
    bookId: number
    bookName: string,
    published: number,
    authorFullName: string,
    score: number
    genres: string[],
}

interface IAuthor {
    authorId: number,
    books: IBook[],
    fullName: string,
    birth: number,
}

interface IBookService {
    _books: IBook[],
    _authors: IAuthor[],
    get books(): IBook[],
    get authors(): IAuthor[],
    getAuthorsBook (author: string): IBook[],
    getGenreBooks (genre: string): IBook[],
    getActualBooks (date: Date, range: "newest" | "oldest"): IBook[],
    getRangedBooksByYears (oldest: number, newest: number): IBook[],
    getRangedBooksByScores (lowest: number, highest: number): IBook[]
}

class bookServices implements IBookService{
    _books: IBook[] = []
    _authors: IAuthor[] = []

    get books (): IBook[] {
        return this._books
    }

    get authors (): IAuthor[] {
        return this._authors
    }

    getAuthorsBook (author: string): IBook[] {
        return this._books.filter(book => book.authorFullName === author)
    }

    getGenreBooks (genre: string): IBook[] {
        return this._books.filter(book => book.genres.includes(genre))
    }

    getActualBooks (date: Date, range: "newest" | "oldest"): IBook[] {
        return range === "newest"
        ?
        this._books.sort((cur, next) => cur.published - next.published)
        :
        this._books.sort((cur, next) => next.published - cur.published)
    }

    getRangedBooksByYears (oldest: number, newest: number): IBook[] {
        return this._books
            .filter(book => book.published >= oldest && book.published <= newest)
    }

    getRangedBooksByScores (lowest: number, highest: number): IBook[] {
        return this._books
            .filter(book => book.score >= lowest && book.score <= highest)
    }
}