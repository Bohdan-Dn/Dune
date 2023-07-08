function createNewBlock(obj, index) {
    const party = obj[index];
    const newBlock = `
        <div class="parties__slide swiper-slide">
            <h5 class="parties__table-title">
                <span class="parties__table-title-game"><strong>Game: </strong>${party.partyNumber}</span>
                <span class="parties__table-title-date"><strong>Date: </strong>${party.date}</span>
            </h5>
            <table class="parties__table">
                <tr>
                    <th><strong>Name</strong></th>
                    <th>Faction</th>
                    <th>Points</th>
                </tr>
                ${addPartiesRows(party.players)}
                <tr>
                    <td class="parties__table-description" colspan="3">
                        <strong>Description: </strong>${party.description}
                    </td>
                </tr>
            </table>
        </div>
    `;
    return newBlock;
}

function addPartiesRow(player) {
    let row = document.createElement('tr');
    let cells = [
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
    ];
    cells[0].innerHTML = `<strong class="parties__player" onclick="openModal(event)">${player.player}</strong>`;
    cells[1].textContent = player.faction;
    cells[2].textContent = player.points;
    cells.forEach(function (cell) {
        row.appendChild(cell);
    });
    return row;
}

function addPartiesRows(players) {
    let rows = '';
    players.forEach(function (player) {
        rows += addPartiesRow(player).outerHTML;
    });
    return rows;
}


parties.forEach(function (party, index) {
    const newBlock = createNewBlock(parties, index);
    DOM.partiesSlider.insertAdjacentHTML('afterbegin', newBlock);
});