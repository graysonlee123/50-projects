const resultEl = document.getElementById('result'),
  lengthEl = document.getElementById('length'),
  uppercaseEl = document.getElementById('uppercase'),
  lowercaseEl = document.getElementById('lowercase'),
  numbersEl = document.getElementById('numbers'),
  symbolsEl = document.getElementById('symbols'),
  generateEl = document.getElementById('generate'),
  randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  }

const inputs = [lengthEl, uppercaseEl, lowercaseEl, numbersEl, symbolsEl]

for (input of inputs) {
  input.addEventListener('change', function (e) {
    const { values, length } = getInputValues()
    resultEl.innerText = generatePassword(values, length)
  })
}

generateEl.addEventListener('click', () => {
  const { values, length } = getInputValues()
  resultEl.innerText = generatePassword(values, length)
})

function generatePassword(options, length) {
  const types = options.filter((obj) => {
    return obj.active ? obj : false
  })

  let generatedPassword = ''

  for (let i = 0; i < length; i++) {
    const picked = types[Math.floor(Math.random() * types.length)].type

    generatedPassword += randomFunc[picked]()
  }

  return generatedPassword
}

function getInputValues() {
  const length = parseInt(lengthEl.value),
    hasLower = lowercaseEl.checked,
    hasUpper = uppercaseEl.checked,
    hasNumber = numbersEl.checked,
    hasSymbols = symbolsEl.checked

  return {
    values: [
      { type: 'lower', active: hasLower },
      { type: 'upper', active: hasUpper },
      { type: 'number', active: hasNumber },
      { type: 'symbol', active: hasSymbols },
    ],
    length,
  }
}

function getRandomLower() {
  // a: 97 - z: 122
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  // a: 65 - z: 89
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  // 0: 48 - 9: 58
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '{',
    '}',
    '[',
    ']',
    '=',
    '<',
    '>',
    '/',
    ',',
    '.',
    "'",
  ]

  return symbols[Math.floor(Math.random() * symbols.length)]
}

function checkmark() {
  const icon = document.getElementById('icon')

  icon.classList.remove('fa-clipboard')
  icon.classList.add('fa-check')

  setTimeout(() => {
    icon.classList.remove('fa-check')
    icon.classList.add('fa-clipboard')
  }, 400)
}

// Copy to Clipboard

const clipboardEl = document.getElementById('clipboard')

clipboardEl.addEventListener('click', function (e) {
  const textarea = document.createElement('textarea'),
    password = resultEl.innerText

  if (!password) return

  textarea.value = password

  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()

  checkmark()
})

document.addEventListener('DOMContentLoaded', function () {
  const { values, length } = getInputValues()
  resultEl.innerText = generatePassword(values, length)
})
