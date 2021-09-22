class Book {
    isbn;
    name;
    authors;
    publicationDate;

    constructor(isbn, name, authors, publicationDate) {
        this.isbn = isbn;
        this.name = name;
        this.authors = authors;
        this.publicationDate = publicationDate;
    }

    compare(target) {
        return this.isbn === target.getIsbn();
    }

    toString() {
        return `(${this.isbn}) ${this.name} by ${this.authors} 
                [published: ${this.publicationDate}]`;
    }

    getAuthors() {
        return this.authors;
    }

    setAuthors(authors) {
        if (authors !== "") {
            this.authors = authors;
        }
    }

    getIsbn() {
        return this.isbn;
    }

    setIsbn(isbn) {
        this.isbn = isbn;
    }
}

window.addEventListener("load", () => {
    const aPointInTime = Date.now();
    let book1 = new Book(321, "book-1", "mti", aPointInTime);
    let book2 = new Book(123, "book-2", "mti", aPointInTime);
    let book3 = new Book(123, "book-2", "mti", aPointInTime);

    showResult(book1, "task5-result-div");
    showResult(book2, "task5-result-div");
    showResult(book3, "task5-result-div");

    showResult(`Comparing books 1 and 2 by isbn: ${book1.compare(book2)}`, 
               "task5-result-div");
    
    showResult(`Comparing books 2 and 3 by isbn: ${book2.compare(book3)}`, 
               "task5-result-div");
    
    showResult(`Comparing books 2 and 3 with built-in loose comparison: 
                ${book2 == book3}`, 
               "task5-result-div");
    
    showResult(`Comparing books 2 and 3 with built-in strict comparison: 
                ${book2 === book3}`, 
               "task5-result-div");
    
    showResult(`Comparing books 2 and 3 with built-in .is comparison: 
                ${Object.is(book2, book3)}`, 
               "task5-result-div");
});
