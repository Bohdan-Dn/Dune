function changeHeaderBg() {
    let scrollValue = window.scrollY;
    if (scrollValue < 100) {
        DOM.header.classList.remove('headerBgColor');
    } else {
        DOM.header.classList.add('headerBgColor');
    }
};
window.addEventListener('scroll', changeHeaderBg);

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





