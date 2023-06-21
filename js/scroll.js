function changeNavBg() {
    let scrollValue = window.scrollY;
    if (scrollValue < 100) {
        DOM.navBar.classList.remove('navBarBgColor');
    } else {
        DOM.navBar.classList.add('navBarBgColor');
    }
};
window.addEventListener('scroll', changeNavBg);

function addNavLinkColor() {
    DOM.sections.forEach(sec => {
        let top = window.scrollY + 50;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            DOM.navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header__link-' + id).classList.add('active');
            });
        }
    });
};
window.onscroll = () => addNavLinkColor();





