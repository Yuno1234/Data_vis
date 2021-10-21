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
  


  background('#cccccc');
  fill(0);
  noStroke();
  ellipseMode(RADIUS);

  
  let angleStart = -HALF_PI; // start at the top
  const outerRadius = 50;
  const innerRadius = 30;

  for (let c = 19; c > -1; c--) {
    for (let d = 1; d < 10; d++) {
      let entry = parseFloat(data[c][d]);
      fill(colors[d]);
      let wedgeSize = map(entry, 0, totals[c][1], 0, TAU);
      let angleStop = angleStart + wedgeSize;
      arc(windowWidth/2, windowHeight/2, outerRadius+21*c, outerRadius+21*c, angleStart, angleStop);
      angleStart = angleStop;
    }
    // knock a hole out of the middle
    fill(255);
    ellipse(windowWidth/2, windowHeight/2, innerRadius+21*c, innerRadius+21*c);
  }

 
  for (let i = 0; i < 20; i++) {
    textSize(21);
    text(totals[i][0], windowWidth/2, windowHeight/2-33-21*i)
  }
  
  

}







