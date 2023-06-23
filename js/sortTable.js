function sortTable(n, evt) {
    const tableIndex = [...DOM.ratingTheads].findIndex(thead => thead.contains(evt));
    const table = DOM.ratingTables[tableIndex];
    const thead = DOM.ratingTheads[tableIndex];
    const tbody = DOM.ratingTbodies[tableIndex];

    const bRows = [...tbody.rows];
    const hData = [...thead.querySelectorAll('th')];
    let desc = false;

    hData.map((head) => {
        if (head != evt) {
            head.classList.remove('asc', 'desc');
        }
    });

    desc = evt.classList.contains('asc') ? true : false;
    evt.classList[desc ? 'remove' : 'add']('asc');
    evt.classList[desc ? 'add' : 'remove']('desc');

    bRows.sort((a, b) => {
        let x = parseInt(a.getElementsByTagName('td')[n].innerHTML.toLowerCase()),
            y = parseInt(b.getElementsByTagName('td')[n].innerHTML.toLowerCase());
        return desc ? (x < y ? 1 : -1) : (x < y ? -1 : 1);
    });

    bRows.map((bRow) => {
        tbody.appendChild(bRow);
    });
};




