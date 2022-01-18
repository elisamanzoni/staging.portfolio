var myEye;

var pupil_x;
var pupil_y;

var angolo;
var angolo_x;
var angolo_y;
var r;

function preload() {
  // put preload code here
}

function setup() {

  createCanvas(windowWidth,windowHeight);


  var contact = select('#contact');
  contact.mouseClicked(contact_open);

  var exit = select('#exit');
  exit.mouseClicked(contact_close);


}

function draw() {
    background("white");


   myEye = new Eye(880, 120);
     myEye.display();

  // put drawing code here
}

function Eye(_x, _y) {
  this.x = _x;
  this.y = _y;

  this.display = function() {
  ellipseMode(CENTER);
  noStroke();

  fill(0, 255, 0);
	ellipse(this.x, this.y, 110);

	fill('white');
	ellipse(this.x, this.y, 90);

  angolo = atan2(mouseY - this.y, mouseX - this.x);
  r = 20;

  angolo_x = this.x + cos(angolo)*r;
  angolo_y = this.y + sin(angolo)*r;

if (mouseX > this.x + r || mouseY > this.y + r || mouseY < this.y - r || mouseX < this.x - r ){
  pupil_x = angolo_x;
  pupil_y = angolo_y;
  fill('black');
	ellipse(pupil_x, pupil_y, 40);
}
else{
  pupil_x = mouseX;
  pupil_y = mouseY;
  fill('black');
	ellipse(pupil_x, pupil_y, 40, 30);

  angleMode(DEGREES);

  fill(0, 255, 0);
  textAlign(CENTER, CENTER);

  textSize(50);
  translate(950, 70);
  rotate(45);
  text("ouch!",0,0);

}




  // fill('black');
	// ellipse(pupil_x, pupil_y, 40);
  }

}

function contact_open() {
  var contact = select('#contact');
  var contact_container = select ('#contact_container');
  if (contact.hasClass("green_background")){
    contact.removeClass("green_background");
    contact_container.removeClass('contact_container');
    contact_container.addClass('contact_container_sparito');

  } else{
    contact.addClass("green_background");
    contact_container.removeClass('contact_container_sparito');
    contact_container.removeClass('display_none');
    contact_container.addClass('contact_container');
  }
}

function contact_close() {
  var contact = select('#contact');
  var contact_container = select ('#contact_container');
  if (contact.hasClass("green_background")){
    contact.removeClass("green_background");
    contact_container.removeClass('contact_container');
    contact_container.addClass('contact_container_sparito');
  } else{
    contact.addClass("green_background");
    contact_container.removeClass('contact_container_sparito');
    contact_container.removeClass('display_none');
    contact_container.addClass('contact_container');
  }
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
