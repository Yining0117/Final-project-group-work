const DESIGN_H = 800;
const DESIGN_W = 600;

let branches = [];
let apples = [];

class Segment{
  constructor(x1,y1,x2,y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  draw(){
    stroke(0);
    strokeWeight(5)
    // ↑ branches' color(数值的颜色和粗细，之后做动画的时候可以调整)
    line(this.x1,this.y1,this.x2,this.y2);
  }
}

class Apples{
  constructor(x,y,color){
    this.stratX = x;
    this.stratY = y;
    this.x = x;
    this.y = y;
    this.color = color;
    this.state = "falling";

  }
  reset(){
    //back to the tree.
    this.x = this.stratX;
    this.y = this.stratY;
    this.state = "falling";

  }

}

function setup() {
  createCanvas(DESIGN_W, DESIGN_H);   

  branches.push(new Segment(125, 0, 125, 200));
  branches.push(new Segment(175, 200, 125, 200));
  branches.push(new Segment(175, 200, 175, 350));
  branches.push(new Segment(175, 350, 425, 350));
  branches.push(new Segment(425, 350, 425, 150));
  branches.push(new Segment(425, 150, 550, 200));
  branches.push(new Segment(550, 200, 550, 150));
  branches.push(new Segment(225, 275, 350, 275));
  branches.push(new Segment(250, 250, 250, 275));
  branches.push(new Segment(300, 275, 300, 625));
  branches.push(new Segment(0, 650, 125, 650));
  branches.push(new Segment(0, 750, 600, 750));
  branches.push(new Segment(475, 650, 600, 650));
  branches.push(new Segment(125, 700, 475, 700));
  branches.push(new Segment(125, 625, 475, 625));
  branches.push(new Segment(125, 625, 125, 700));
  branches.push(new Segment(475, 625, 475, 700));
}

function draw(){
  background(220);
  for (let branch of branches ){
    branch.draw();
  }
}
