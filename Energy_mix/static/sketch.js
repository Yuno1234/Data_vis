// load data

fetch('/data', { method: 'GET' })
  .then(response => response.json())
  .then(data => {

    

    console.log(data); // <------

    converted = []

    data.forEach(c => {
      converted.push([ c[0], (parseFloat(c[1]) + parseFloat(c[2]))  ])
    });

    console.log(converted)
  });

const colors = {
  oil: '#9a3426',
  gas: '#375724',
  coal: '#4f5059',
  solar: '#b1aa22',
  hydro: '#1c7897',
  nuclear: '#886119',
  wind: '87449b',
  other: '#812c3b',
  biofuel: '#1b502b'
}

// const centerX = windowWidth/2;
// const centerY = windowHeight/2;

const outerRadius = 95;
const innerRadius = 55;

; /* August */

const conditions = [{
    "name": "rain",
    "days": 6,
    "color": "#38669a"
  },
  {
    "name": "partly cloudy",
    "days": 23,
    "color": "#8EC3E6"
  },

  {
    "name": "clear",
    "days": 2,
    "color": "#fef017"
  }
];

let dayCount= 31

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  fill(0);
  noStroke();
  ellipseMode(RADIUS);
  let angleStart = -HALF_PI; // start at the top
  for (let c = 0; c < conditions.length; c++) {
    let entry = conditions[c];
    fill(entry.color);
    let wedgeSize = map(entry.days, 0, dayCount, 0, TAU);
    let angleStop = angleStart + wedgeSize;
    arc(windowWidth/2, windowHeight/2, outerRadius, outerRadius, angleStart, angleStop);
    angleStart = angleStop;
  }
  // knock a hole out of the middle
  fill(255);
  ellipse(windowWidth/2, windowHeight/2, innerRadius, innerRadius);

  // // draw the legend
  // let legendX = 300;
  // let y = 280;
  // let legendBox = 8;
  // noStroke();
  // textAlign(LEFT);
  // for (let c = 0; c < conditions.length; c++) {
  //   let entry = conditions[c];
  //   fill(entry.color);
  //   rect(legendX, y - legendBox, legendBox, legendBox);
  //   fill(0);
  //   text(entry.name, legendX + legendBox + 5, y);
  //   y += 20;
  // }
}



/* 
function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background('#DDD');

  strokeWeight(0);
  push();
  translate(width/2, height/2);
  fill(colors.oil)
  arc(0, 0, 400, 400, 0, 2*PI*0.4);
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
} */