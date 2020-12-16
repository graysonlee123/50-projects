const image = document.querySelector('.dblclick-to-like'),
  times = document.querySelector('.times'),
  listenDuration = 400

let timeout = false
let timesClicked = 0

image.addEventListener('click', function (e) {
  if (timeout) {
    createHeart(e)
    incrementCounter()
  } else {
    timeout = true
    setTimeout(() => {
      timeout = false
    }, listenDuration)
  }
})

const createHeart = (e) => {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  const x = e.clientX,
    y = e.clientY,
    offsetLeft = e.target.offsetLeft,
    topOffset = e.target.offsetTop,
    xInside = x - offsetLeft,
    yInside = y - topOffset

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  image.appendChild(heart)

  setTimeout(() => heart.remove(), 600)
}

const incrementCounter = () => {
  timesClicked++

  document.querySelector('.times').innerHTML = timesClicked
}
