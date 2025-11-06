const DESIGN_H = 800;
const DESIGN_W = 600;

let branches = [];
let apples = [];
let gravity = 0.2;
let gravityDirection = 1;
let ground = 750;
let topY = 20;
let noisePoints = [];

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
    this.dropSpeed = 0;
    this.color = color;
    this.state = "waiting";
    this.timer = 0; 
  }     
  reset(){
    //back to the tree.
    this.x = this.stratX;
    this.y = this.stratY;
    this.dropSpeed = 0;
    this.state = "waiting";
    this.timer = 0;
  }
  update(){
    if (this.state ==="waiting"){
      this.timer++;
      if(this.timer > 120){
        this.state = "falling";
        this.timer = 0;
      }
    } else if (this.state ==="falling"){
      this.dropSpeed += gravity * gravityDirection;
      this.y += this.dropSpeed;
    
    if(gravityDirection === 1 && this.y >= ground){
      this.y = ground;
      this.state = "landed";
      this.dropSpeed = 0;
      this.timer = 0;
    } else if (gravityDirection === -1 && this.y <=topY){
      this.y = topY;
      this.state = "landed";
      this.dropSpeed = 0;
      this.timer = 0;
    }
  }
      else if (this.state === "landed"){
        this.timer++;
        if(this.timer > 120){
          this.reset();
        }
      }
    }
  
  draw(){
    stroke(225,225,0);
    fill(this.color[0],this.color[1],this.color[2]);
    ellipse(this.x, this.y, 40, 40);
  }
}

function setup() {
  createCanvas(DESIGN_W, DESIGN_H); 
  frameRate(60);  

  for (let i = 0; i < 4000; i++){
    noisePoints.push({
      x: random(0,width),
      y: random(0,650),
      c:[random(100,180), random(150,200), random(200,255), random(80,150)]
    });
  }

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
  branches.push(new Segment(80, 650, 80, 750));
  branches.push(new Segment(190, 700, 190, 750));
  branches.push(new Segment(300, 700, 300, 750));
  branches.push(new Segment(410, 700, 410, 750));
  branches.push(new Segment(520, 650, 520, 750));
  

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
  //base background
  background(60,80,120);
 
  noStroke();
  for (let p of noisePoints){
    fill(p.c[0],p.c[1],p.c[2],p.c[3]);
    rect(p.x, p.y, 2, 2);
  }

  fill(40,140,90);
  rect(0,650,600,100);
  stroke(0);
  strokeWeight(3);
  noFill();
  rect(0,650,600,100);
  noStroke();

  //yellow base
  fill(240,210,60);
  stroke(0);
  strokeWeight(2.5);
  rect(125,625,350,75);
  noStroke();

  //colorfull rects
  const colors = [
    color(240,210,60),
    color(240,70,70),
    color(40,160,100),
    color(240,210,60),
    color(40,160,100),
    color(240,210,60)
  ];
  const startX = 125;
  const startY = 625;
  const boxW = 350 / 6;
  const boxH = 75;

  for (let i = 0; i < 6; i++){
    fill(colors[i]);
    rect(startX + i * boxW, startY, boxW, boxH);
  }
  
  const bottomColors = [
    color(40,160,100),
    color(240,210,60),
    color(240,70,70),
    color(240,70,70),
    color(240,210,60),
    color(40,160,100)
  ];

  for (let i = 0; i < 6; i++){
    let cx = startX + i * boxW + boxW / 2;
    let cy = startY + boxH;
    let r = boxW * 0.9;
    fill(bottomColors[i]);
    arc(cx, cy, r, r, PI, 0);
  }

  const topColors = [
    color(40, 160, 100),
    color(240, 70, 70),
    color(40, 160, 100),
    color(240, 70, 70)
  ];
  const topCenters = [
    startX + boxW * 1.5,
    startX + boxW * 2.5,
    startX + boxW * 3.5,
    startX + boxW * 4.5
  ];
  for (let i = 0; i < 4; i++){
    let cx = topCenters[i];
    let cy = startY;
    let r = (i === 1 || i === 2) ? boxW * 0.7 : boxW * 0.9;
    fill(topColors[i]);
    arc(cx,cy,r,r,0,PI);
  }

  noStroke();
  for (let i = 0; i < 300; i++){
    fill(255,255,255,random(10,40));
    rect(random(125,475),random(625,700), 1, 1);
  }

  for (let branch of branches ){
    branch.draw(); 
  }

  for (let a of apples){
    a.update();
    a.draw();
  }
  
  noStroke();
  fill(255);
  textSize(25);
  if(gravityDirection === 1){
    text("Press SPACE to change gravity (↑↑↑ )",20,785);
  }else{
    text("Press SPACE to change gravity (↓↓↓)",20,785);
  }
}

function keyPressed(){
  if (key === ' '){
    gravityDirection *= -1;
    for (let a of apples){
      a.reset();
    } 
  }
}
