let oil = '#9a3426'
let gas = '#375724'
let coal = '#4f5059'
let solar = '#b1aa22'
let hydropower = '#1c7897'
let nuclear = '#886119'
let wind = '87449b'
let biofuel = '#1b502b'
let other = '#812c3b'
 
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function piChart() {

}

function getAngle() {

}

function draw() {
  background('#DDD');

  strokeWeight(0);
  push();
  translate(width/2, height/2);
  fill(oil)
  arc(0, 0, 400, 400, 0, 2*PI*0.4)
  angle = angle + 2*PI*0.4
  fill(gas)
  arc(0, 0, 400, 400, 2*PI*0.4, angle+2*PI*0.03)
  pop();
}

function pieChart(diameter, data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    let gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(
      width / 2,
      height / 2,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    lastAngle += radians(angles[i]);
  }
}