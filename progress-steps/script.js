const progress = document.getElementById('progress'),
  prev = document.getElementById('prev'),
  next = document.getElementById('next'),
  circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', function (e) {
  currentActive >= circles.length
    ? (currentActive = circles.length)
    : currentActive++

  refreshProgress()
})

prev.addEventListener('click', function (e) {
  currentActive > 1 ? currentActive-- : (currentActive = 1)

  refreshProgress()
})

function refreshProgress() {
  circles.forEach(function (circle, i) {
    if (i < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active'),
    percentage = ((actives.length - 1) / (circles.length - 1)) * 100

  progress.style.width = `${percentage}%`

  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
