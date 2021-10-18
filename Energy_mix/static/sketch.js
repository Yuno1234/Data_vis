// load data
totals = []

fetch('/data', { method: 'GET' })
  .then(response => response.json())
  .then(data => {
    data.forEach(c => {
      totals.push([c[0], (parseFloat(c[1]) + parseFloat(c[2]) + parseFloat(c[3]) + parseFloat(c[4]) + parseFloat(c[5]) + parseFloat(c[6]) + parseFloat(c[7]) + parseFloat(c[8]) + parseFloat(c[9]))])
    });
    


  });

let data;
  function preload() {
    data = loadJSON('/data');
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  /*
  for (const [key, value] of Object.entries(data)) {
    console.log(value[1]);
  }
  */
  console.log(totals)
  console.log(totals[0][1])
}

function draw() {
  const total = ['Argentina', 961.8811268200002]
    
  const colors = [
    '#000',
    '#5e638c',
    '#a971c7',
    '#666666',
    '#e8d64d',
    '#aae1e3',
    '#bd2f34',
    '#92d692',
    '#d1b579',
    '#50d4aa'
  ]

  //const argentina = ['Argentina', '329.3280383', '474.9063305', '6.347707313', '1.980226741', '91.78546271', '20.90398373', '12.37110432', '5.936273206', '18.322']
  
  /*
  data.forEach(c => {
    converted.push([c[0], (parseFloat(c[1]) + parseFloat(c[2]) + parseFloat(c[3]) + parseFloat(c[4]) + parseFloat(c[5]) + parseFloat(c[6]) + parseFloat(c[7]) + parseFloat(c[8]) + parseFloat(c[9]))])
  });
  */
  


  background('#ffffff');
  fill(0);
  noStroke();
  ellipseMode(RADIUS);

  
  let angleStart = -HALF_PI; // start at the top
  const outerRadius = 100;
  const innerRadius = 50;
  for (let d = 1; d < 10; d++) {
    let entry = parseFloat(data[4][d]);
    fill(colors[d]);
    let wedgeSize = map(entry, 0, totals[4][1], 0, TAU);
    let angleStop = angleStart + wedgeSize;
    arc(windowWidth / 2, windowHeight / 2, outerRadius, outerRadius, angleStart, angleStop);
    angleStart = angleStop;
  }
  // knock a hole out of the middle
  fill(255);
  ellipse(windowWidth / 2, windowHeight / 2, innerRadius, innerRadius);

}





////////////////////////////////////////////////////////////////////////////////////
/* const centerX = windowWidth/2;
const centerY = windowHeight/2;

const outerRadius = 95;
const innerRadius = 55;

//August

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



  // draw the legend
  let legendX = 300;
  let y = 280;
  let legendBox = 8;
  noStroke();
  textAlign(LEFT);
  for (let c = 0; c < conditions.length; c++) {
    let entry = conditions[c];
    fill(entry.color);
    rect(legendX, y - legendBox, legendBox, legendBox);
    fill(0);
    text(entry.name, legendX + legendBox + 5, y);
    y += 20;
  }
} */


