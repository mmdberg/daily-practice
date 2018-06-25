class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1,
    this.side2 = side2,
    this.side3 = side3
  }

  kind() {
    let sideArray = [this.side1, this.side2, this.side3]
    let longSide = Math.max(...sideArray)
    let longSideCount = 0
    let longSideAdded = 0
    sideArray.forEach(side => {
      if(side === longSide) {
        longSideCount++ 
      }
    })
    let sum = 0
    sideArray.forEach(side => {
      if (longSideCount >= 2) {
        if(side <= longSide && longSideAdded <= 1) {
          sum += side
          if(side === longSide) {
            longSideAdded++ 
          }
        }
      } else if (side < longSide) {
        sum += side
      }
      if(side === 0 || side < 0) {
        throw 'wrong'
      } 
    })
    if (sum < longSide) {
      throw 'illegal'
    }

    if(this.side1 === this.side2 && this.side1 === this.side3) {
      return 'equilateral'
    }
    if (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3) {
      return 'isosceles'
    }
    if(this.side1 !== this.side2 && this.side1 !== this.side3 && this.side2 !== this.side3) {
      return 'scalene'
    }

  }

}

module.exports = Triangle