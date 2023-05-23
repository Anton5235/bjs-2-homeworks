class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix () {
    this.state * 1.5
  }

set state (state) {
  if (state < 0 ) {
    this.state = 0
  }else if(state > 100) {
    this.state = 100
  }
}

  get state () {
	  return this.state
  }
}


class Magazine extends PrintEditionItem{
	constructor(name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem{
	constructor(author, name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount);
    this.author = author;
		this.type = "book";
    
	}
}

class NovelBook extends Book{
	constructor(author, name, releaseDate, pagesCount, ){
		super(name, releaseDate, pagesCount);
    this.author = author;
		this.type = "novel";
    
	}
}

class FantasticBook extends Book{
	constructor(author, name, releaseDate, pagesCount, ){
		super(name, releaseDate, pagesCount);
    this.author = author;
		this.type = "fantastic";
    
	}
}

class DetectiveBook extends Book{
	constructor(author, name, releaseDate, pagesCount, ){
		super(name, releaseDate, pagesCount);
    this.author = author;
		this.type = "detective";
    
	}
}


class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if(state > 30) {
      this.books.push(book)
    }
  }

  findBookBy(type, value) {
    if(type || value) {
      return this.books
    }
    return null
  }
  giveBookByName(bookName) {
    if(!bookName) {
      return null
    }
    return bookName
  }

}
