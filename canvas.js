function drawCanvas() {
  drawing.lineWidth = 8;
  drawing.lineCap = 'round';
  drawing.lineJoin = 'round';
  drawing.fillStyle = '#F3F5FC';
  drawing.strokeStyle = '#0A3871';
  drawing.fillRect(0, 0, 1200, 800);

  drawing.beginPath();
  drawing.moveTo(720, 400);
  drawing.lineTo(420, 400);
  drawing.stroke();
  drawing.closePath();

  drawing.beginPath();
  drawing.moveTo(500, 400);
  drawing.lineTo(500, 50);
  drawing.stroke();
  drawing.closePath();

  drawing.beginPath();
  drawing.moveTo(500, 50);
  drawing.lineTo(635, 50);
  drawing.lineTo(635, 100);
  drawing.stroke();
  drawing.closePath();
}

function drawLines() {
  drawing.lineWidth = 6;
  drawing.lineCap = 'round';
  drawing.lineJoin = 'round';
  drawing.strokeStyle = '#0A3871';
  drawing.beginPath();
  let width = 600 / wordSort.length;
  for (let i = 0; i < wordSort.length; i++) {
    drawing.moveTo(350 + width * i, 640);
    drawing.lineTo(300 + width * i, 640);
  }
  drawing.stroke();
  drawing.closePath();
}
function writeSecretWord(index) {
  drawing.font = 'bold 5rem Inter';
  drawing.lineCap = 'round';
  drawing.fillStyle = '#0A3871';
  drawing.lineWidth = 20;
  let width = 600 / wordSort.length;
  drawing.fillText(wordSort[index], 308 + width * index, 630);
}

function writeFailKey(index, errors) {
  drawing.font = 'bold 4rem Inter';
  drawing.lineCap = 'round';
  drawing.fillStyle = '#0A3871';
  drawing.lineWidth = 10;
  drawing.fillText(index, 200 + 40 * (10 - errors), 700, 40);
}
function drawingChar() {
  // Pieces of body: 1o 2| 3/4\  5/6\
  switch (errors) {
    case 5:
      drawing.beginPath();
      drawing.arc(635, 130, 30, 0, 2 * Math.PI);
      drawing.stroke();
      drawing.closePath();
      break;

    case 4:
      drawing.beginPath();
      drawing.moveTo(635, 162);
      drawing.lineTo(635, 255);
      drawing.stroke();
      drawing.closePath();
      break;

    case 3:
      drawing.beginPath();
      drawing.moveTo(635, 180);
      drawing.lineTo(590, 230);
      drawing.stroke();
      drawing.closePath();
      break;

    case 2:
      drawing.beginPath();
      drawing.moveTo(635, 180);
      drawing.lineTo(680, 230);
      drawing.stroke();
      drawing.closePath();
      break;

    case 1:
      drawing.beginPath();
      drawing.moveTo(635, 255);
      drawing.lineTo(590, 300);
      drawing.stroke();
      drawing.closePath();
      break;

    case 0:
      drawing.beginPath();
      drawing.moveTo(635, 255);
      drawing.lineTo(680, 300);
      drawing.stroke();
      drawing.closePath();
  }
}
