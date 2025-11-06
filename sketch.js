const DESIGN_H = 800;
const DESIGN_W = 600;

let branches = [];
let apples = [];
let gravity = 1;
let gravityDirection = 1;
let ground = 750;
let topY = 20;

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

class Apple {
  constructor(x,y,color){
    this.stratX = x;
    this.stratY = y;
    this.x = x;
    this.y = y;
    this.color = color;
    this.state = "falling";
    this.dropSpeed = 0;
    this.timer = 0; 
  }
  reset(){
    //back to the tree.
    this.x = this.stratX;
    this.y = this.stratY;
    this.dropSpeed = 0;
    this.state = "falling";
    this.timer = "0";
  }
  update(){
    if (this.state ==="falling"){
    this.dropSpeed +=gravity *gravityDirection;
    this.y += this.dropSpeed;
    
    if(gravityDirection === 1 && this.y >= ground){
      this.y = ground;
      this.state = "landed";
    }else if (gravityDirection === -1 && this.y <=top){
      this.y = top;
      this.state = "landed";
      this.dropSpeed = 0;
      this.timer = 0;
    }
      else if (gravityDirection === -1){
      this.y = top;
      this.dropSpeed = 0;
      this.state = "landed";
      this.timer = 0;
      }  
    }
  }
  draw(){
    stroke(0,225,225);
    fill(225,0,0);
    ellipse(this.x,this.y,40,40);
  }
}

function setup() {
  createCanvas(DESIGN_W, DESIGN_H); 
  frameRate(60);  

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

  const appleSeeds = [
    { x:125, y:200, color:[220, 80, 80] },
    { x:175, y:350, color:[240,140,60] },
    { x:425, y:350, color:[220,120,120] },
    { x:425, y:150, color:[230,90,140] },
    { x:550, y:200, color:[200,90,90] },
    { x:300, y:275, color:[250,120,90] },
    { x:350, y:275, color:[210,100,150] },
  ];

  for (let S of appleSeeds){
    apples.push(new Apple(S.x,S.y,S.color));
  }
}

function draw(){
  background(220);
  for (let branch of branches ){
    branch.draw();
  }

  for (let A of apples){
    A.update();
    A.draw();
  }
  if(gravityDirection === 1){
    text("");
  }else{
    text("");
  }
}

function KeyPressed(){
  if (key === " "){
    gravityDirection *= -1;
    for (let A of apples){
      A.reset();
    } 
  }
}
