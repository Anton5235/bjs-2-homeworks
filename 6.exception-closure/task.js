function parseCount (numb) {
    if(isNaN(numb)) {
        throw new Error ("Невалидное значение")
    } else {
        return Number.parseFloat(numb)
    }
  }

  function validateCount (num) {
    try {
      return parseCount(num);
    } catch (error) {
        return error
    } 
}
  