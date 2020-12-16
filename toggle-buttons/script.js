const toggles = document.querySelectorAll('.toggle'),
  good = document.getElementById('good'),
  cheap = document.getElementById('cheap'),
  fast = document.getElementById('fast')

for (toggle of toggles) {
  toggle.addEventListener('change', (e) => {
    checkInputs(e.target)
  })
}

function checkInputs(target) {
  if (good.checked && cheap.checked && fast.checked) {
    switch (target) {
      case good: {
        fast.checked = false
        break
      }
      case cheap: {
        good.checked = false
        break
      }
      case fast: {
        cheap.checked = false
        break
      }
    }
  }
}
