function sortTable(n, evt) {
    const tableIndex = [...DOM.ratingTheads].findIndex(thead => thead.contains(evt));
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
        let x = a.getElementsByTagName('td')[n].innerHTML,
            y = b.getElementsByTagName('td')[n].innerHTML;

        if (!isNaN(parseFloat(x)) && !isNaN(parseFloat(y))) {
            x = parseFloat(x);
            y = parseFloat(y);
            return desc ? (x < y ? 1 : -1) : (x < y ? -1 : 1);
        } else {
            return desc ? y.localeCompare(x) : x.localeCompare(y);
        }
    });

    bRows.map((bRow) => {
        tbody.appendChild(bRow);
    });
};





