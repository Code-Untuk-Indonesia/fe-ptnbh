AOS.init()

window.addEventListener('scroll', function () {
	var navbar = document.querySelector('.navbar')
	var navLinks = document.querySelectorAll('.navbar-nav .nav-link')
	if (window.scrollY > 50) {
		navbar.classList.remove('bg-transparent')
		navbar.classList.add('bg-dark', 'navbar-transition')
	} else {
		navbar.classList.remove('bg-dark')
		navbar.classList.add('bg-transparent')
	}
})

const apiUrl = 'https://dev-admin-ptnbh.codeuntukindonesia.my.id/api-berita'

async function fetchData() {
	try {
		const response = await fetch(apiUrl)
		const data = await response.json()
		return data
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

async function displayNews() {
	const newsContainer = document.querySelector('.news-all')
	const newsData = await fetchData()

	newsData.forEach((news) => {
		if (newsContainer.children.length % 3 === 0) {
			const rowElement = document.createElement('div')
			rowElement.classList.add('row', 'mb-3')
			newsContainer.appendChild(rowElement)
		}

		const imageUrl = news.gambar
			? `asset/${news.gambar}`
			: 'https://via.placeholder.com/400x300'

		const createdAt = new Date(news.created_at)

		const maxChar = 250
		const shortContent =
			news.konten.length > maxChar
				? news.konten.slice(0, maxChar) + '...'
				: news.konten

		const newsElement = document.createElement('div')
		newsElement.classList.add('col-md-4')

		newsElement.innerHTML = `
            <div class="card-news-all" data-aos="fade-up" data-aos-duration="2000">
                <div class="img-hover-zoom">
                    <img class="img-news" src="https://via.placeholder.com/350x200" alt="img-news">
                </div>
                <p class="date-news-last mt-2 mb-0">${createdAt.toDateString()}</p>
                <h1 class="title-news-all">${news.judul}</h1>
                <p>${shortContent}</p>
                <a href="detail-berita.html" class="btn-read-more">Selengkapnya</a>
                <div class="full-content" style="display: none;">${news.konten}
            </div>
        `

		const lastRow = newsContainer.lastElementChild
		lastRow.appendChild(newsElement)
	})
}

displayNews()

// leaflet
var map = L.map('leaflet-map').setView([-0.060646, 109.3423133], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map)

var marker = L.marker([-0.060646, 109.3423133]).addTo(map)
marker.bindPopup('<b>Universitas Tanjungpura</b>').openPopup()
