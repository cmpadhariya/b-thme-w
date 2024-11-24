// This code is to show the sub-menu in the header menu by clicking the header menu on the header section.
function header_menu () {
	// const menuItems = document.querySelectorAll('.header__inner_menu .wp-block-navigation-item.has-child > a, .header__inner_menu .wp-block-navigation-item.has-child > button');
	const mainMenu = document.getElementById('modal-3-content');

	document.querySelectorAll('.wp-block-navigation-submenu__toggle').forEach(function(toggle) {
		toggle.addEventListener('click', function() {
			const parent = this.parentElement;
	
			if (parent.classList.contains('selected')) {
				parent.classList.remove('selected');
			} else {
				parent.classList.add('selected');
			}

			const modalContent = document.getElementById('modal-3-content');
			if (modalContent && modalContent) {
				modalContent.classList.toggle('menu-expand');
			}
		});
	});

	const childToggle   = document.querySelectorAll('.child-toggle');
	const selectedItems = document.querySelectorAll('.has-child');

	childToggle.forEach(function(toggle) {
		toggle.addEventListener('click', function() { 
			selectedItems.forEach(function(item) {
				item.classList.remove('selected');
				mainMenu.classList.remove('menu-expand');
			});
		});
	});
}

header_menu();
document.addEventListener('DOMContentLoaded', function () {
	const sliders = document.querySelectorAll('.activity-slider, #image-slider, #careers-images-slider');

	// Observer to watch for sliders coming into view
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// Lazy load Splide and its CSS when the slider comes into view
				Promise.all([
					import('@splidejs/splide'),
					import('@splidejs/splide/dist/css/splide.min.css')
				]).then(([ SplideModule ]) => {
					const Splide = SplideModule.default;
					const slider = entry.target;

					// Initialize Splide for #image-slider
					if ('image-slider' === slider.id) {
						new Splide(slider, {
							pagination: true,
							arrows: false,
						}).mount();
					}

					// Initialize Splide for #careers-images-slider
					else if ('careers-images-slider' === slider.id) {
						new Splide(slider, {
							type: 'loop',
							perPage: 5,
							focus: 'center',
							gap: '1rem',
							pagination: true,
							resetProgress: true,
							breakpoints: {
								768: {
									perPage: 3,
								},
							},
						}).mount();
					}

					// Initialize Splide for .activity-slider
					else if (slider.classList.contains('activity-slider')) {
						var splide = new Splide(slider, {
							pagination: false,
							arrows: true,
						});

						splide.on('mounted', function () {
							const bar = splide.root.querySelector('.careers-slider-progress-bar');
							if (bar) {
								const updateProgressBar = function () {
									var end             = splide.Components.Controller.getEnd() + 1;
									var currentIndex    = splide.index + 1;
									var widthPercentage = (100 * currentIndex) / end;
									bar.style.width     = widthPercentage + '%';
								};

								updateProgressBar(); // Initialize on load
								splide.on('move', updateProgressBar); // Update on move
							} else {
								console.error('Progress bar element not found');
							}
						});
						splide.mount();
					}

					// Unobserve the slider after it has been initialized
					observer.unobserve(slider);
				}).catch(error => {
					console.error('Error loading Splide:', error);
				});
			}
		});
	});

	// Observe each slider
	sliders.forEach(slider => {
		observer.observe(slider);
	});
});

// Frequently Asked Questions
// This code is used to toggle answers to questions in the Frequently Asked Questions section.
window.onload = function () {
	const accordionParentClass   = '.faq-section__inner_text';
	const accordionQuestionClass = '.faq-section__toggle';
	const accordionContentClass  = '.faq-section__answer';

	// Initialize the FAQs
	document.querySelectorAll(accordionParentClass).forEach(function (element) {
		element.classList.add('close');
		const content = element.querySelector(accordionContentClass);
		if (content) {
			content.style.maxHeight  = '0';
			content.style.overflow   = 'hidden';
			content.style.transition = 'max-height 0.3s ease-in-out';
		}
	});

	// Set up click event listeners for the questions
	document.querySelectorAll(accordionQuestionClass).forEach(function (element) {
		element.addEventListener('click', function () {
			const faqSection = element.closest(accordionParentClass);
			if (faqSection) {
				const faqClass = faqSection.className;

				if (-1 !== faqClass.indexOf('close')) {
					// When the FAQ is closed
					document.querySelectorAll(accordionParentClass).forEach(function (parent) {
						parent.querySelectorAll(accordionContentClass).forEach(function (content) {
							content.style.maxHeight = '0';
						});
						parent.classList.remove('open');
						parent.classList.add('close');
					});

					faqSection.classList.remove('close');
					faqSection.classList.add('open');
					faqSection.querySelector(accordionContentClass).style.maxHeight  = '1000px';
					faqSection.querySelector(accordionContentClass).style.transition = 'max-height 4s ease-in-out';
				} else {
					// When the FAQ is open
					faqSection.classList.add('close');
					faqSection.classList.remove('open');
					faqSection.querySelector(accordionContentClass).style.maxHeight  = '0';
					faqSection.querySelector(accordionContentClass).style.transition = 'max-height 5s ease-in-out';
				}
			}
		});
	});
};

// This code is used for the Header section make sticky.
document.addEventListener('DOMContentLoaded', function () {

	window.addEventListener('scroll', function () {
		const header = document.getElementById('qrolic-header');

		if (51 < window.pageYOffset) {
			if (!document.querySelector('.wp-block-navigation__responsive-container.is-menu-open')) {
				header.classList.add('fixed');
			}
		} else {
			header.classList.remove('fixed');
			document.body.classList.remove('header-sticky-on');
		}
	});

});

// This function is used for the sidebar in Header section.
const openContainers            = document.getElementsByClassName('wp-block-navigation__responsive-container-open');
const navigationContainers      = document.getElementsByClassName('wp-block-navigation__responsive-container');
const closenavigationContainers = document.getElementsByClassName('wp-block-navigation__responsive-container-close');
const closeSidebar              = document.querySelector('.header-close-sidebar');

for (let i = 0; i < openContainers.length; i++) {
	openContainers[ i ].addEventListener('click', function () {
		closeSidebar.style.display = 'block';
	});
}

closeSidebar.addEventListener('click', function () {
	for (let i = 0; i < navigationContainers.length; i++) {
		navigationContainers[ i ].classList.remove('is-menu-open');
	}
	closeSidebar.style.display = 'none';
});

for (let i = 0; i < closenavigationContainers.length; i++) {
	closenavigationContainers[ i ].addEventListener('click', function () {
		closeSidebar.style.display = 'none';
	});
}

// The following code is used to sticky a sidebar in a single blog page.
document.addEventListener('DOMContentLoaded', function () {
	const sidebar = document.querySelector('.single-post__inner_sidebar');
	const body    = document.body;
	function shouldAddScrolledClass () {
		return 767 < window.innerWidth;
	}
	if (sidebar) {
		window.addEventListener('scroll', function () {
			const scroll = window.scrollY;
			const offset = 205;
			if (scroll >= offset && shouldAddScrolledClass()) {
				sidebar.style.position = 'sticky';
				sidebar.style.top      = '70px';
				body.classList.add('scrolled');
			} else {
				sidebar.style.position = 'static';
				body.classList.remove('scrolled');
			}
		});
	}
});

// services faq section JS
document.addEventListener('DOMContentLoaded', function () {
	const faqItems = document.querySelectorAll('.services-faq-v2 .services-rank-math-v2 .rank-math-list-item h3');

	faqItems.forEach((faqItem) => {
		faqItem.addEventListener('click', function () {
			const listItem = this.closest('.rank-math-list-item');
			const faqCard  = listItem.querySelector('.services-answer > p');
			const isActive = listItem.classList.contains('active');

			// Hide all other answers
			document.querySelectorAll('.services-faq-v2 .services-rank-math-v2 .rank-math-list-item').forEach((item) => {
				item.classList.remove('active');
				item.querySelector('.services-answer > p').style.display = 'none';
			});

			if (!isActive) {
				faqCard.style.display = 'block';
				listItem.classList.add('active');
			}
		});
	});
});


document.addEventListener('DOMContentLoaded', function () {
	const lazyImages = document.querySelectorAll('img[data-src], script[data-src], video[data-src]');
	if ('IntersectionObserver' in window) {
		const lazyImageObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const lazyImage = entry.target;
					if (lazyImage.dataset.src) {
						lazyImage.src = lazyImage.dataset.src;
					}
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});

		lazyImages.forEach((lazyImage) => {
			lazyImageObserver.observe(lazyImage);
		});
	} else {
		// Fallback for browsers that don't support IntersectionObserver
		lazyImages.forEach((lazyImage) => {
			if (lazyImage.dataset.src) {
				lazyImage.src = lazyImage.dataset.src;
			}
		});
	}

	setTimeout(function () {
		lazyImages.forEach((lazyImage) => {
			lazyImage.src = lazyImage.dataset.src;
			lazyImage.removeAttribute('data-src');
		});
	}, 7000);
});

/**
 * Careers Single Post Page.
 * Careers Single Sidebar block Share icons.
 * 
 * Copies the URL of the page when a button with the ID share-copy-link is clicked
 */
document.addEventListener('DOMContentLoaded', () => {
	const copyButton = document.getElementById('share-copy-link');

	if (copyButton) {
		copyButton.addEventListener('click', () => {
			const pageUrl = window.location.href;

			// Create a temporary input element
			const tempInput = document.createElement('input');
			document.body.appendChild(tempInput);
			tempInput.value = pageUrl;
			tempInput.select();
			document.execCommand('copy');
			document.body.removeChild(tempInput);

			// Optional: Provide feedback to the user
			copyButton.textContent = 'Copied!';
			setTimeout(() => {
				copyButton.textContent = 'Copy link';
			}, 2000);
		});
	}
});

/**
 * Blog Archive page.
 * Blog Category Section.
 * 
 * This code allows the "Show More" and "Show Less" functionality for blog category.
 */
document.addEventListener('DOMContentLoaded', function () {
	const button           = document.getElementById('blog-category-show-btn');
	const hiddenCategories = document.querySelectorAll('.hidden-category');
	const categoriesList   = document.querySelector('.blogpost-categories__list ul');
	let showAll            = false;

	if (!button || !categoriesList) {
		return;
	}

	button.addEventListener('click', function () {
		showAll = !showAll;

		hiddenCategories.forEach(category => {
			category.style.display = showAll ? 'list-item' : 'none';
		});

		button.textContent = showAll ? 'Show Less' : 'Show More';

		if (showAll) {
			categoriesList.classList.add('blogpost-categories__list_items');
		} else {
			categoriesList.classList.remove('blogpost-categories__list_items');
		}
	});
});


/**
 * Table of Contents
 * Single template sidebar.
 * 
 * This approach ensures that as you scroll, the active section’s TOC link is highlighted, providing users with a clear indication of their current position on the page.
 */
document.addEventListener('DOMContentLoaded', function () {
	const tocLinks = document.querySelectorAll('.qt-table-of-content a');
	const offset   = 70; 
	tocLinks.forEach(link => {
		link.addEventListener('click', function (event) {
			event.preventDefault();

			const targetId      = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
				window.scrollTo({
					top: targetPosition - offset,
					behavior: 'smooth'
				});
			}
		});
	});

	const observerOptions = {
		root: null, 
		rootMargin: `-${offset}px 0px 0px 0px`, 
		threshold: 0.5 
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if ( entry.target.id ) {
				const tocLinks = document.querySelectorAll(`.qt-table-of-content a[href="#${entry.target.id}"]`);
				
				if ( tocLinks ) {
					tocLinks.forEach( tocLink => {
						if (entry.isIntersecting) {
							tocLink.classList.add('toc-active');
						} else {
							tocLink.classList.remove('toc-active');
						}
					} );
				}
			}
		});
	}, observerOptions);

	document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
		observer.observe(heading);
	});
});

/**
 * Services SubMenu
 * Header Section
 * 
 * This way, the submenu will stay visible when hovering over both the main menu item and the submenu itself.
 */
document.addEventListener( 'DOMContentLoaded', function () {
	const serviceMenu    = document.querySelector( 'ul li.services-sub-menu' );
	const serviceSubMenu = document.querySelector( '.services-submenu' );

	const showSubMenu = () => {
		serviceSubMenu.style.display = 'block';
	};

	const hideSubMenu = () => {
		serviceSubMenu.style.display = 'none';
	};

	const addEventListeners = () => {
		serviceMenu.addEventListener( 'mouseover', showSubMenu );
		serviceMenu.addEventListener( 'mouseout', handleMouseOut );
		serviceSubMenu.addEventListener( 'mouseover', showSubMenu );
		serviceSubMenu.addEventListener( 'mouseout', handleMouseOut );
	};

	const removeEventListeners = () => {
		serviceMenu.removeEventListener( 'mouseover', showSubMenu );
		serviceMenu.removeEventListener( 'mouseout', handleMouseOut );
		serviceSubMenu.removeEventListener( 'mouseover', showSubMenu );
		serviceSubMenu.removeEventListener( 'mouseout', handleMouseOut );
	};

	const handleMouseOut = ( event ) => {
		if ( !serviceMenu.contains( event.relatedTarget ) && !serviceSubMenu.contains( event.relatedTarget ) ) {
			hideSubMenu();
		}
	};

	const handleResize = () => {
		if ( 991 > window.innerWidth ) {
			removeEventListeners();
			hideSubMenu();
		} else {
			addEventListeners();
		}
	};

	handleResize();

	window.addEventListener( 'resize', handleResize );
} );


