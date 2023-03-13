function parseCount (numb) {
    let newNumb = Number.parseFloat(numb)
    if(newNumb === NaN) {
      console.log("Невалидное значение")
    }
    return newNumb
  }
  