const buttons = document.getElementsByClassName('ripple')

for (button of buttons) {
  button.addEventListener('click', function (e) {
    const x = e.clientX,
      y = e.clientY,
      buttonTop = e.target.offsetTop,
      buttonLeft = e.target.offsetLeft,
      xInside = x - buttonLeft,
      yInside = y - buttonTop,
      circle = createRipple(xInside, yInside)

    this.appendChild(circle)

    setTimeout(() => {
      circle.remove()
    }, 500)
  })
}

function createRipple(x, y) {
  const circle = document.createElement('span')

  circle.classList.add('circle')
  circle.style.top = y + 'px'
  circle.style.left = x + 'px'

  return circle
}
