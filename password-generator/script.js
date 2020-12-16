const resultEl = document.getElementById('result'),
  lengthEl = document.getElementById('length'),
  uppercaseEl = document.getElementById('uppercase'),
  lowercaseEl = document.getElementById('lowercase'),
  numbersEl = document.getElementById('numbers'),
  symbolsEl = document.getElementById('symbols'),
  generateEl = document.getElementById('generate'),
  clipboardEl = document.getElementById('clipboard'),
  randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  }

generateEl.addEventListener('click', () => {
  const length = parseInt(lengthEl.value),
    hasLower = lowercaseEl.checked,
    hasUpper = uppercaseEl.checked,
    hasNumber = numbersEl.checked,
    hasSymbols = symbolsEl.checked

  resultEl.innerText = generatePassword({
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbols,
    length,
  })
})

function generatePassword({
  hasLower: lower,
  hasUpper: upper,
  hasNumber: number,
  hasSymbols: symbol,
  length,
}) {
  let generatedPassword = ''

  const typesCount = lower + upper + number + symbol,
    typesArr = [
      {
        lower,
      },
      {
        upper,
      },
      {
        number,
      },
      {
        symbol,
      },
    ].filter((item) => Object.values(item)[0])

  if (typesCount === 0) return ''

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0]
      generatedPassword += randomFunc[funcName]()
    })
  }

  return generatedPassword.slice(0, length)
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

clipboardEl.addEventListener('click', function (e) {
  const textarea = document.createElement('textarea'),
    password = resultEl.innerText

  if (!password) return

  textarea.value = password

  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()

  alert('Password copied to clipboard')
})
