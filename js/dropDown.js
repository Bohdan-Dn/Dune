function initializeDropdown(dropdownToggle, dropdownMenu, toggleBtnIcon, closeBtnIconClass, navbarSelector) {
    dropdownToggle.onclick = function () {
        dropdownMenu.classList.toggle('open');
        toggleBtnIcon.classList.toggle(closeBtnIconClass);
    };

    function closeDropdown() {
        dropdownMenu.classList.remove('open');
        toggleBtnIcon.classList.remove(closeBtnIconClass);
    }

    function closePopupOutsideClick(event) {
        const targetElement = event.target;
        if (!targetElement.closest(navbarSelector)) {
            closeDropdown();
        }
    }

    dropdownMenu.onclick = closeDropdown;
    document.addEventListener('click', closePopupOutsideClick);
}

initializeDropdown(
    DOM.toggleBtn,
    DOM.dropDownMenu,
    DOM.toggleBtnIcon,
    'fa-xmark',
    '.header__navbar',
);

initializeDropdown(
    DOM.toggleFilter,
    DOM.filterList,
    DOM.toggleFilterIcon,
    'fa-sort-up',
    '.header__filter',
);

