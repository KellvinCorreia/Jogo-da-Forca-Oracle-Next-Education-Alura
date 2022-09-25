let newGame = document.querySelector('.newGame');
let menu = document.querySelector('.menu');
let exit = document.querySelector('.exit');
let buttons = document.querySelector('.buttons');
let game = document.querySelector('.game');
let canvas = document.querySelector('.canvas')
let gameToo = document.querySelector('.newGameIn');
let drawing = document.querySelector('.canvas').getContext('2d');
let endGame = document.querySelector('.endGame')
let words = ['JAVASCRIPT','HTML','ALURA','ORACLE','ONE','PYTHON','GIT','GITHUB','VSCODE'];
const wordsNotRepeat = [...new Set(words)]; //adicionar valor no words e usar o new Set para tirar os repetidos.
let wordSort = ''
let errors = 6
let saveKeys = [] // Salvar as teclas digitadas pelo usuário
let regex = /[^a-zA-Z]/g

function clear() {
  errors = 6
  saveKeys = []
}
function playGame() {
  canvas.style.display = 'flex';
  endGame.style.display =  'none';
  clear()
  selectSecretWord()
  drawCanvas()
  drawLines()
  document.onkeydown = function (event) {
    let keyPressedUpperCase =  event.key.toUpperCase().replace(regex," ").normalize("NFD")
    if(checkKey(keyPressedUpperCase) && wordSort.includes(keyPressedUpperCase)) {
      for(let index = 0; index < wordSort.length; index++ ) {
        if (wordSort[index] === keyPressedUpperCase) {
          writeSecretWord(index)
        }
      }
    } else if(errors >= 1) {
      errors--
      writeFailKey(keyPressedUpperCase, errors)
    } else {
      canvas.style.display = 'none';
      endGame.style.display = 'flex';      
    }
  }
  console.log(wordSort);
}
function checkKey(key) {
  let state
  if (key >= 65 && saveKeys.indexOf(key) || key <=90 && saveKeys.indexOf(key)) {
    saveKeys.push(key)
    return state
  } else {
    state = true
    saveKeys.push(key)
    return state
  }
}
function selectSecretWord() {
  wordSort = wordsNotRepeat[Math.floor(Math.random() * wordsNotRepeat.length)];
  return wordSort
}
newGame.addEventListener('click', function () {
  menu.classList.add('hidden');
  buttons.classList.remove('hidden');
  game.classList.remove('hidden');
  playGame()
});
gameToo.addEventListener('click', function () {
  playGame()
});
exit.addEventListener('click', function () {
  menu.classList.remove('hidden');
  buttons.classList.add('hidden');
  game.classList.add('hidden');
});
