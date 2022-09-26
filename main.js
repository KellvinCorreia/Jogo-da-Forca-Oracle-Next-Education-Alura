let newGame = document.querySelector('.newGame');
let newWord = document.querySelector('.newWord')
let gameToo = document.querySelector('.newGameIn');
let exit = document.querySelector('.exit');
let registerButton = document.querySelector('.registerButton')
let exitRegister = document.querySelector('.exitRegister')

let menu = document.querySelector('.menu');
let game = document.querySelector('.game');
let buttons = document.querySelector('.buttons');

let canvas = document.querySelector('.canvas')
let drawing = document.querySelector('.canvas').getContext('2d');

let endGame = document.querySelector('.endGame')
let newWordTextSection = document.querySelector('.registration')

let newWordText = document.querySelector('#textArea')
let words = ['JAVASCRIPT','HTML','ALURA','ORACLE','ONE','PYTHON','GIT','GITHUB','VSCODE'];
let wordsNotRepeat = [...new Set(words)];
let wordSort = ''
let errors = 6
let hitKeys = 0
let saveKeys = []

let regex = /[^a-zA-Z]/g


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
          hitKeys++
          if (hitKeys == wordSort.length) { // WORKING
            console.log('Voce venceu!');
            console.log(`Acertou ${hitKeys} letras.`);
          }
        }
      }
    } else if(errors >= 1) {
      errors--
      drawingChar(errors)
      writeFailKey(keyPressedUpperCase, errors)
    } else {
      canvas.style.display = 'none';
      endGame.style.display = 'flex';      
    }
  }
  console.log(wordSort);
}
function checkKey(key) {
  let state = false
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
function clear() {
  errors = 6
  hitKeys = 0
  saveKeys = []
  drawing.clearRect(0, 0, canvas.width, canvas.height);
}

newGame.addEventListener('click', () => {
  menu.style.display = 'none'
  buttons.classList.remove('hidden');
  game.classList.remove('hidden');
  playGame()
});
gameToo.addEventListener('click', () => {
  playGame()
});
exit.addEventListener('click', () => {
  menu.style.display = 'flex'
  buttons.classList.add('hidden');
  game.classList.add('hidden');
});
newWord.addEventListener('click', () => {
  menu.style.display = 'none'
  newWordTextSection.style.display = 'flex'
})
registerButton.addEventListener('click', () => { // working
  let wordText = newWordText.value.toUpperCase()
  if (wordsNotRepeat.includes(wordText)) {
    console.log('Erro palavra ja adicionada');
  }else if (wordText == '' ) {
    console.log("Erro palavra vazia");
  }else if (checkKey(wordText)) {
    wordsNotRepeat.push(wordText)
    console.log('Adicionou a palavra');
  }
  console.log(wordsNotRepeat);
})
exitRegister.addEventListener('click', () => {
  menu.style.display = 'flex'
  newWordTextSection.style.display = 'none'
})
