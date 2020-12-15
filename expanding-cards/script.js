const panels = document.getElementsByClassName('panel')

for (panel of panels) {
  panel.addEventListener('click', function (e) {
    removeActiveClass()
    addActiveClass(e.target)
  })
}

function removeActiveClass() {
  for (panel of panels) {
    panel.classList.remove('active')
  }
}

function addActiveClass(el) {
  el.classList.add('active')
}
