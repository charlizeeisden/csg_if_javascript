function preload() {
pl = loadImage("../images/sprites/kever.png");
}
function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  textSize(30);
  canvas.parent('processing');
}
 
function draw() {
  image(pl,0,45,50,50);
  text("breedte= "+pl.width,150,40);
}