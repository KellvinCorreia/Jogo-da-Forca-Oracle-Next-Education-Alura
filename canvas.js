function drawCanvas() {
  drawing.lineWidth=8
  drawing.lineCap="round"
  drawing.lineJoin="round"
  drawing.fillStyle= "#F3F5FC"
  drawing.strokeStyle = "#0A3871"
  drawing.fillRect(0,0,1200,800)
  drawing.beginPath();
  drawing.moveTo(450,400)
  drawing.lineTo(750,400)
  drawing.stroke()
  drawing.closePath()
}

function drawLines() {
  drawing.lineWidth=6
  drawing.lineCap="round"
  drawing.lineJoin="round"
  drawing.strokeStyle = "#0A3871"
  drawing.beginPath()
  let width=600/wordSort.length
  for (let i=0;i<wordSort.length;i++){
    drawing.moveTo(350+(width*i),640)
    drawing.lineTo(300+(width*i),640)
  }
  drawing.stroke()
  drawing.closePath()
}
function writeSecretWord(index) {
  drawing.font = "bold 5rem Inter"
  drawing.lineCap = "round"
  drawing.fillStyle = "#0A3871"
  drawing.lineWidth = 20
  let width=600/wordSort.length
  drawing.fillText(wordSort[index],308+(width * index), 630)
}

function writeFailKey(index, errors) {
  drawing.font = "bold 4rem Inter"
  drawing.lineCap = "round"
  drawing.fillStyle = "#0A3871"
  drawing.lineWidth = 10
  drawing.fillText(index, 200 + (40 * (10 - errors)),700,40)
} 
