const container = document.getElementById('container'),
  colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'],
  rows = 24,
  columns = 20

container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
container.style.gridTemplateRows = `repeat(${rows}, 1fr)`

for (let i = 0; i < rows * columns; i++) {
  const square = document.createElement('div')

  square.classList.add('square')
  square.addEventListener('mouseover', setColor)
  square.addEventListener('mouseout', removeColor)

  container.appendChild(square)
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

function setColor(e) {
  const color = getRandomColor()

  e.target.style.backgroundColor = color
  e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
  e.target.style.backgroundColor = ''
  e.target.style.boxShadow = ''
}
