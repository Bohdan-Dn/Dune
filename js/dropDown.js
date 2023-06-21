DOM.toggleBtn.onclick = function () {
    DOM.dropDownMenu.classList.toggle('open');
    const isOpen = DOM.dropDownMenu.classList.contains('open');
    DOM.toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

DOM.dropDownMenu.onclick = function () {
    DOM.dropDownMenu.classList.remove('open');
    DOM.toggleBtnIcon.classList = 'fa-solid fa-bars';
};

function closePopupOutsideClick(event) {
    const targetElement = event.target;
    if (!targetElement.closest('.header__navbar')) {
        DOM.dropDownMenu.classList.remove('open');
        DOM.toggleBtnIcon.classList = 'fa-solid fa-bars';
    };
};


document.addEventListener('click', closePopupOutsideClick);

