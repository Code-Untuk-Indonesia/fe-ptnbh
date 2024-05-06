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
