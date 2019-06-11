// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw " + radius);
    }
  };
}
const circle = createCircle(1);
const circleTwo = createCircle(5);
circle.draw();
circleTwo.draw();

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw " + radius);
  };
}

const circleThree = new Circle(7);
circleThree.draw();
