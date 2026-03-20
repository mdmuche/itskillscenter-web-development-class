class BookServices {
    constructor() {
        // Load books from localStorage
        this.books = JSON.parse(localStorage.getItem('books')) || []

        // DOM elements
        this.title = document.getElementById('title')
        this.author = document.getElementById('author')
        this.year = document.getElementById('year')
        this.cards = document.getElementById('cards')

        this.getBooks() // render saved books on page load
    }

    addBook() {
        const newBook = {
            id: Date.now().toString(),
            title: this.title.value,
            author: this.author.value,
            year: this.year.value
        }

        this.books.push(newBook)
        this.saveBooks()
        this.getBooks()
        this.clearInputs()
    }

    getBooks() {
        this.cards.innerHTML = ''

        this.books.forEach(book => {
            const li = document.createElement('li')
            li.dataset.id = book.id
            li.innerHTML = `
                <h2>${book.title}</h2>
                <h3>${book.author}</h3>
                <h5>${book.year}</h5>
                <button class="delete-btn">Delete</button>
            `

            // Attach event listener
            li.querySelector('button').addEventListener('click', () => {
                this.deleteBook(book.id)
            })

            this.cards.appendChild(li)
        })
    }

    deleteBook(id) {
        const exists = this.books.some(book => book.id === id)
        if (!exists) return console.log('Book not found')

        this.books = this.books.filter(book => book.id !== id)
        this.saveBooks()
        this.getBooks()
    }

    saveBooks() {
        localStorage.setItem('books', JSON.stringify(this.books))
    }

    clearInputs() {
        this.title.value = ''
        this.author.value = ''
        this.year.value = ''
    }
}

// Initialize service
const bookService = new BookServices()

// Add book button
document.getElementById('add-btn').addEventListener('click', (e) => {
    e.preventDefault()
    bookService.addBook()
})