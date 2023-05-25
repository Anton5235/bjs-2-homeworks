class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

 newState = fix () {
   this.state = this.state * 1.5
  }
}

set state (newState) {
  if (newState < 0 ) {
    newState = 0
  }else if(newState > 100) {
    newState = 100
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
