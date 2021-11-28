document.addEventListener('DOMContentLoaded', () => {
	// Select
	const displayValue = document.querySelector('#displayValue'),
		selectOptions = document.querySelectorAll('.select-option'),
		selectContainer = document.querySelector('.select-container');

	function toggleOptions() {
		selectContainer.classList.toggle('_active');
	}


	displayValue.addEventListener('click', (e) => {
		e.stopPropagation();
		toggleOptions();
	});

	selectOptions.forEach(selectOption => {
		selectOption.addEventListener('click', () => {
			document.getElementById('valueText').innerHTML = selectOption.innerText;
			document.getElementById('selectedValue').value = selectOption.innerText;
			toggleOptions();
		});
	});

	document.addEventListener('click', (e) => {
		let target = e.target;
		let its_input = target == selectContainer || selectContainer.contains(target);
		let its_icon = target == displayValue;
		let input_is_active = selectContainer.classList.contains('_active');

		if (!its_input && !its_icon && input_is_active) {
			toggleOptions();
		}
	});


	// Поиск toggle
	const searchBtn = document.querySelector('.search img'),
		searchInput = document.querySelector('.search__input');

	const toggleSearch = () => {
		if (document.documentElement.clientWidth < 992) {
			searchInput.classList.toggle('search-toggle');
		}
	}

	searchBtn.addEventListener('click', (e) => {
		e.stopPropagation();
		toggleSearch();
	});

	document.addEventListener('click', (e) => {
		let target = e.target;
		let its_input = target == searchInput || searchInput.contains(target);
		let its_icon = target == searchBtn;
		let input_is_active = searchInput.classList.contains('search-toggle');

		if (!its_input && !its_icon && input_is_active) {
			toggleSearch();
		}
	});

	// Скрыть меню при клике вне меню
	let hamburger = document.querySelector('.icon-menu'),
		menu = document.querySelector('.menu__body');


	const toggleMenu = () => {
		body_lock(500);
		menu.classList.toggle('_active');
		hamburger.classList.toggle('_active');
	};

	hamburger.addEventListener('click', (e) => {
		e.stopPropagation();
	});

	document.addEventListener('click', (e) => {
		let target = e.target;
		let its_menu = target == menu || menu.contains(target);
		let its_hamburger = target == hamburger;
		let menu_is_active = menu.classList.contains('_active');

		if (!its_menu && !its_hamburger && menu_is_active) {
			toggleMenu();
		}
	});

	// Попап - специалисты

	const specItems = document.querySelectorAll('.spec-p__item');

	specItems.forEach(specItem => {
		specItem.addEventListener('click', () => {
			popup_close(specItem.closest('.popup'));
		});
	});
});