let newGame = document.querySelector('.newGame');
let menu = document.querySelector('.menu');
let exit = document.querySelector('.exit');
let buttons = document.querySelector('.buttons');
let game = document.querySelector('.game');
let gameToo = document.querySelector('.newGameIn');
let drawing = document.querySelector('.canvas').getContext('2d');
let words = ['JAVASCRIPT','HTML','ALURA','ORACLE','ONE','PYTHON','GIT','GITHUB','VSCODE'];
const wordsNotRepeat = [...new Set(words)]; //adicionar valor no words e usar o new Set para tirar os repetidos.
let wordSort = ''
let errorKeys = []




newGame.addEventListener('click', function () {
  wordSort = wordsNotRepeat[Math.floor(Math.random() * wordsNotRepeat.length)];
  menu.classList.add('hidden');
  buttons.classList.remove('hidden');
  game.classList.remove('hidden');
  drawCanvas()
  drawLines()
});
gameToo.addEventListener('click', function () {
  wordSort = wordsNotRepeat[Math.floor(Math.random() * wordsNotRepeat.length)];
  console.log();
  drawCanvas()
  drawLines()
  console.log(wordSort);
});
exit.addEventListener('click', function () {
  menu.classList.remove('hidden');
  buttons.classList.add('hidden');
  game.classList.add('hidden');
});
