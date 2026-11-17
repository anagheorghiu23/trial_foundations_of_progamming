// // Draggable button
// // The button can be clicked and dragged around the canvas
// // The button cannot move outside the canvas
// let x = 150; //button horizontal position
// let y = 100; //button vertical position
// let w = 100; //button width
// let h = 40; //button height
// let mouseH = 0; //horizontal distance from mouse to button's top-left corner
// let mouseV = 0; //vertical distance from mouse to button's top-left corner
// let isDragging = false; //checks if the button is being dragged
// const canvasW = 400; //canvas width
// const canvasH = 400; //canvas height

// function setup() {
//   createCanvas(canvasW, canvasH);
// }

// function draw() {
//   background("white");

//   // canvas

//   fill(isDragging === true ? "beige" : "black");
//   rect(x, y, w, h);
//   // [detailY])
//   fill("red"); //text color
//   textAlign(CENTER, CENTER);
//   // [vertAlign])
//   text("CLICK HERE!!", x + w / 2, y + h / 2);
//   button-- - text(str, x, y, [maxWidth], [maxHeight]);
// }

// function mousePressed() {
//   if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
//     console.log("It works!!");
//     mouseH = mouseX - x;
//     mouseV = mouseY - y;
//     isDragging = true;
//   }
// }
// //moves the button while dragging
// function mouseDragged() {
//   if (isDragging === true) {
//     x = mouseX - mouseH;
//     y = mouseY - mouseV;

//     if (x < 0) {
//       x = 0;
//     }
//     if (x > canvasW - w) {
//       x = canvasW - w;
//     }
//     if (y < 0) {
//       y = 0;
//     }
//     if (y > canvasH - h) {
//       y = canvasH - h;
//     }
//   }
// }
// //stops dragging when mouse is released
// function mouseReleased() {
//   isDragging = false;
// }

function setup() {
  createCanvas(400, 400);
  describe("A 400 by 400 pixel gray canvas.");
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, 50, 50);
  rect(150, 100, 100, 40);
}
