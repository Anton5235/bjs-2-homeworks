class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
   fix() {
    this.state = this.state * 1.5;
  }
  get () {
    return this.state
  } 

  set (PrintEditionItem.state) {
    if(state)
  }
}

  class Book extends PrintEditionItem{
	constructor(name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}

