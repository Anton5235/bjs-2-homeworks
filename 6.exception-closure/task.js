function parseCount (numb) {
    if(isNaN(numb)) {
        throw new Error ("Невалидное значение")
    } else {
        return Number.parseFloat(numb)
    }
  }

  function validateCount (num) {
    try {
      console.log(parseCount(num))
    } catch (error) {
      console.log(error)  
    }
  }
  console.log(validateCount (NaN))
  
  