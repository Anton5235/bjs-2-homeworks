function parseCount (numb) {
    let newNumb = Number.parseFloat(numb)
    if(isNaN(newNumb)) {
      return "Невалидное значение"
    }
    return newNumb
  }
  