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
  let largura=600/wordSort.length
  for (let i=0;i<wordSort.length;i++){
    drawing.moveTo(350+(largura*i),640)
    drawing.lineTo(300+(largura*i),640)
  }
  drawing.stroke()
  drawing.closePath()
}