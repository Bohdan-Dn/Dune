function initializeDropdown(dropdownToggle, dropdownMenu, toggleBtnIcon) {
    dropdownToggle.onclick = function () {
        dropdownMenu.classList.toggle('open');
        const isOpen = dropdownMenu.classList.contains('open');
        toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    };

    dropdownMenu.onclick = function () {
        dropdownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'fa-solid fa-bars';
    };

    function closePopupOutsideClick(event) {
        const targetElement = event.target;
        if (!targetElement.closest('.header__navbar')) {
            dropdownMenu.classList.remove('open');
            toggleBtnIcon.classList = 'fa-solid fa-bars';
        }
    }

    document.addEventListener('click', closePopupOutsideClick);
};

initializeDropdown(DOM.toggleBtn, DOM.dropDownMenu, DOM.toggleBtnIcon);

