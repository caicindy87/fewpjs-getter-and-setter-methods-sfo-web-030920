class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return (this.diameter = this.radius * 2);
  }

  get circumference() {
    return (this.circumference = Math.PI * this.radius * 2);
  }

  get area() {
    return (this.area = Math.PI * this.radius ** 2);
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  set circumference(circumference) {
    this.radius = circumference / (2 * Math.PI);
  }

  set area(area) {
    this.radius = Math.sqrt(area / Math.PI);
  }
}

let circle = new Circle(2);
