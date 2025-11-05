const DESIGN_H = 800;
const DESIGN_W = 600;

let branches = [];

const rawPoints = [
  {x:125, y:0},   {x:125, y:200}, {x:175, y:200}, {x:175, y:350},
  {x:425, y:350}, {x:425, y:150}, {x:550, y:150}, {x:550, y:200},
  {x:300, y:275}, {x:225, y:275}, {x:225, y:275}, {x:250, y:250},
  {x:250, y:275}, {x:350, y:275}, {x:300, y:625}, {x:125, y:625},
  {x:475, y:625}, {x:475, y:650}, {x:600, y:650}, {x:0,   y:650},
  {x:125, y:650}, {x:125, y:700}, {x:475, y:700}, {x:0,   y:750},
  {x:600, y:750}
];

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
