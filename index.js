// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides
        this.count = this.sides.length
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
        );
    }
}

class Triangle extends Polygon {

    get isValid() {
      if (!Array.isArray(this.sides)) return;
      if (this.count !== 3) return;
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {
  
    get area() {
        return this.sides[0] * this.sides[0]
    }

    get isValid() {
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 4) return;
        let first = this.sides[0]
        let second = this.sides[1]
        let third = this.sides[2]
        let fourth = this.sides[3]
        return ( (first === second) && (first == third) && (first ===fourth) )
    }
}