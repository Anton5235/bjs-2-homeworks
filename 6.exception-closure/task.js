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
  
class Triangle {
  constructor(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
   
    if(a + b < c || a + c < b || b + c < a ){
      throw new Error ("Треугольник с такими сторонами не существует")
    }

  }

  
  get perimeter () {
      return this.a + this.b + this.c
  }

  get area () {
    let s = 0.5 * this.perimeter;
    return Number((Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))).toFixed(3))
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c)
  } catch (error) {
     return obj = {
      get perimeter () {
      return 'Ошибка! Треугольник не существует'},
      get area () {
        return 'Ошибка! Треугольник не существует'}
      }
    }
  }
  
