// https://apidocs.cheapshark.com/#b9b738bf-2916-2a13-e40d-d05bccdce2ba

const result = document.getElementById('result'),
  filter = document.getElementById('filter'),
  loading = document.getElementById('loading'),
  listItems = []

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
  const res = await fetch(
    'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'
  )
  const data = await res.json()

  result.innerHtml = ''

  data.forEach((sale) => {
    const li = document.createElement('li')

    li.innerHTML = `
    <a href="https://www.cheapshark.com/redirect?dealID=${sale.dealID}" target="_blank" rel="noreferrer noopener">
      <div>
        <img
          src="${sale.thumb}"
          alt="${sale.title}"
        />
      </div>
      <div>
        <p class="game-title">${sale.title}</p>
        <p class="game-pricing">
          <span class="strikethrough">${sale.normalPrice}</span>
          <span class="sale-price">${sale.salePrice}</span> (-90%)
        </p>
      </div>
    </a>
    `

    listItems.push(li)
    result.appendChild(li)
    loading.remove()
  })
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}

getData()
