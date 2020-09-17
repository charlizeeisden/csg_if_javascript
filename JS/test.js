var bol = {
x: 225,
y: 225,
diameter: 100,

beweeg() {
        if (keyIsDown(LEFT_ARROW)) {
        this.x--;
        }
        if (keyIsDown(RIGHT_ARROW)) {
        this.x++;
        }
        if (keyIsDown(UP_ARROW)) {
        this.y--;
        }
        if (keyIsDown(DOWN_ARROW)) {
        this.y++;
        } 
    },
    teken() {
        fill('red');
        noStroke();
        ellipse(this.x,this.y,this.diameter);
    }
}

var eiland = {
x: 450,
y: 450,
diameter: 100,
kleur: 'yellow',
    teken() {
        
        noStroke();
        fill(this.kleur); 
        ellipse(this.x,this.y,this.diameter);
    },


wordtBezocht(bezoeker) {
    if (dist(this.x,this.y,bezoeker.x,bezoeker.y) <= (this.diameter + bezoeker.diameter)/2){
        this.kleur = 'pink';
    }
    else {
        this.kleur='yellow';
    }
 

}
}
function setup() {
  canvas = createCanvas(450,450,);
 
}
 
function draw() {
 background('blue');
 bol.teken();
 eiland.wordtBezocht(bol);
 eiland.teken();
 bol.beweeg();
 
}
 