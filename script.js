const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	  breakpoints: {
			  280: {
      slidesPerView: 1,
      
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    },
		  720: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  },
	// If we need pagination
	pagination: {
		el: '.swiper-pagination'
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar'
	}
})

const imgElements = document.querySelectorAll('.item')
const imgElements2 = document.querySelectorAll('.item-description')

imgElements.forEach(function (imgElement) {
	imgElement.addEventListener('click', function () {
		this.classList.toggle('active')

	})
})

imgElements2.forEach(function (imgElement) {
	imgElement.addEventListener('click', function () {
		this.classList.toggle('active2')
	})
})