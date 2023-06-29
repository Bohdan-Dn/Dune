function addPlayerRowRating(player) {
    let row = document.createElement('tr');
    let cells = [
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td')
    ];
    cells[0].innerHTML = '<strong data-modal-target onclick="openModal(event)">' + changeName(player) + '</strong>';
    cells[1].textContent = getSumGames(players[player]);
    cells[2].textContent = getSumVictories(players[player]);
    cells[3].textContent = getSumPoints(players[player]);
    cells[4].textContent = getAveragePoint(getSumPoints(players[player]), getSumGames(players[player]));
    cells.forEach(function (cell) {
        row.appendChild(cell);
    });
    DOM.playerData.appendChild(row);
};

function getAveragePoint(a, b) {
    if (b == 0) {
        return 0
    };

    let average = parseFloat((a / b).toFixed(2));
    if (isNaN(average)) {
        return 0;
    } else {
        return average;
    };
};

function getWinRate(a, b) {
    if (b == 0) {
        return 0 + '%'
    };
    let winRate = parseFloat((b / a).toFixed(2)) * 100;
    if (isNaN(winRate)) {
        return 0 + '%';
    } else {
        return winRate + '%';
    };
}

function addPlayerRowsRanting(obj) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        addPlayerRowRating(keys[i]);
    };
};
function changeName(name) {
    return name.replace(/([A-Z])/g, ' $1').replace(/^./, function (match) {
        return match.toUpperCase();
    });
};
function getSumGames(obj) {
    let sum = 0;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            sum += obj[key].games;
        };
    };
    return sum;
};
function getSumVictories(obj) {
    let sum = 0;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            sum += obj[key].victories;
        };
    };
    return sum;
};
function getSumPoints(obj) {
    let sum = 0;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            sum += obj[key].points;
        };
    };
    return sum;
};
addPlayerRowsRanting(players);


function addStatistic(obj) {
    for (let i = 0; i < obj.length; i++) {
        const element = obj[i].id;
        obj[i].children[1].innerHTML = calculateGamesTotal(players, element);
        obj[i].children[2].innerHTML = calculateVictoriesTotal(players, element);
        obj[i].children[3].innerHTML = calculatePointsTotal(players, element);
        obj[i].children[4].innerHTML = getAveragePoint(calculatePointsTotal(players, element), calculateGamesTotal(players, element));
    };
};

addStatistic(DOM.statistic.children);


function calculateGamesTotal(players, faction) {
    let totalGames = 0;
    for (const player in players) {
        if (players.hasOwnProperty(player)) {
            totalGames += players[player][faction].games;
        }
    };

    return totalGames;
};

function calculateVictoriesTotal(players, faction) {
    let totalVictories = 0;
    for (const player in players) {
        if (players.hasOwnProperty(player)) {
            totalVictories += players[player][faction].victories;
        }
    };

    return totalVictories;
};

function calculatePointsTotal(players, faction) {
    let totalPoints = 0;
    for (const player in players) {
        if (players.hasOwnProperty(player)) {
            totalPoints += players[player][faction].points;
        }
    };

    return totalPoints;
};

function openModal(event) {
    if (DOM.modal == null) return;
    DOM.modal.classList.add('active');
    DOM.overlay.classList.add('active');
    addDataToModal(event);
    document.body.classList.add('modal-open');
};

function closeModal() {
    if (DOM.modal == null) return;
    DOM.modal.classList.remove('active');
    DOM.overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
}

function addDataToModal(event) {
    let playerWithGap = event.target.innerHTML.charAt(0).toLowerCase() + event.target.innerHTML.slice(1);
    let player = playerWithGap.replace(/\s/g, '');
    let elements = DOM.modalBody.children;
    DOM.modalTitle.innerHTML = event.target.innerHTML;
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        let games = players[player][element.id].games;
        let victories = players[player][element.id].victories;
        let points = players[player][element.id].points;
        element.children[1].innerHTML = games;
        element.children[2].innerHTML = victories;
        element.children[3].innerHTML = getWinRate(games, victories);
        element.children[4].innerHTML = points;
        element.children[5].innerHTML = getAveragePoint(points, games);
    };
}