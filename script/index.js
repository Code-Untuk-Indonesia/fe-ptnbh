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

// leaflet
var map = L.map('leaflet-map').setView([-0.060646, 109.3423133], 15) // Tentukan koordinat dan zoom awal

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map)

var marker = L.marker([-0.060646, 109.3423133]).addTo(map) // Tambahkan penanda
marker.bindPopup('<b>Universitas Tanjungpura</b>').openPopup()
