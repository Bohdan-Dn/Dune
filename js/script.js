// SEASON
function addPlayerRowRating(player) {
    let row = document.createElement('tr');
    let cells = [
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
    ];
    cells[0].innerHTML = `<strong data-modal-target onclick ="openModal(event)">${player}</strong>`;
    cells[1].textContent = getPlayerTotalGames(player);
    cells[2].textContent = getPlayerTotalWins(player);
    cells[3].textContent = getWinRate(getPlayerTotalGames(player), getPlayerTotalWins(player));
    cells[4].textContent = getPlayerTotalPoints(player);
    cells[5].textContent = getAveragePoint(getPlayerTotalPoints(player), getPlayerTotalGames(player));
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
    let winRate = parseFloat((b / a)) * 100;
    if (isNaN(winRate)) {
        return 0 + '%';
    } else {
        return winRate.toFixed(2) + '%';
    };
};

function addPlayerRowsRanting(obj) {
    const playersSet = obj.reduce((set, party) => {
        const players = party.players;
        players.forEach((player) => {
            set.add(player.player);
        });
        return set;
    }, new Set());

    const uniquePlayers = Array.from(playersSet);
    uniquePlayers.forEach((player) => {
        addPlayerRowRating(player);
    });
};
addPlayerRowsRanting(parties);

function getPlayerTotalGames(player) {
    let totalGames = 0;
    parties.forEach((party) => {
        party.players.forEach((person) => {
            if (person.player === player) {
                totalGames += 1;
            }
        });
    });
    return totalGames;
}

function getPlayerTotalWins(player) {
    let totalWins = 0;
    parties.forEach((party) => {
        if (party.winners.includes(player)) {
            totalWins += 1;
        }
    });
    return totalWins;
}

function getPlayerTotalPoints(player) {
    let totalPoints = 0;
    parties.forEach((party) => {
        party.players.forEach((person) => {
            if (person.player === player) {
                totalPoints += person.points;
            }
        });
    });
    return totalPoints;
};

// FACTIONS
function addStatistic(obj) {
    for (let i = 0; i < obj.length; i++) {
        const element = obj[i].id;
        obj[i].children[1].innerHTML = getFactionTotalGames(element);
        obj[i].children[2].innerHTML = getFactionTotalWins(element);
        obj[i].children[3].innerHTML = getWinRate(getFactionTotalGames(element), getFactionTotalWins(element));
        obj[i].children[4].innerHTML = getFactionTotalPoints(element);
        obj[i].children[5].innerHTML = getAveragePoint(getFactionTotalPoints(element), getFactionTotalGames(element));
    };
};
addStatistic(DOM.statistic.children);

function getFactionTotalGames(factionName) {
    let totalGames = 0;
    parties.forEach((party) => {
        party.players.forEach((player) => {
            if (player.faction.toLowerCase() === factionName) {
                totalGames++;
            }
        });
    });
    return totalGames;
};

function getFactionTotalWins(factionName) {
    let totalWins = 0;
    parties.forEach((party) => {
        party.winners.forEach((winner) => {
            const player = party.players.find((player) => player.player === winner);
            if (player && player.faction.toLowerCase() === factionName && player.points > 0) {
                totalWins++;
            }
        });
    });
    return totalWins;
};

function getFactionTotalPoints(factionName) {
    let totalPoints = 0;
    parties.forEach((party) => {
        party.players.forEach((player) => {
            if (player.faction.toLowerCase() === factionName) {
                totalPoints += player.points;
            }
        });
    });
    return totalPoints;
}

// MODAL
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
    let player = event.target.innerHTML
    let elements = DOM.modalBody.children;
    DOM.modalTitle.innerHTML = event.target.innerHTML;
    DOM.modalBan.innerHTML = 'Next game ban: ' + getPlayerLastFactions(event.target.innerHTML);
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        let games = countGamesForPlayerAndFaction(player, element.id);
        let victories = countWinsForPlayerAndFaction(player, element.id);
        let points = countPointsForPlayerAndFaction(player, element.id);
        element.children[1].innerHTML = games;
        element.children[2].innerHTML = victories;
        element.children[3].innerHTML = getWinRate(games, victories);
        element.children[4].innerHTML = points;
        element.children[5].innerHTML = getAveragePoint(points, games);
    };
};

function countGamesForPlayerAndFaction(player, faction) {
    let count = 0;
    for (let i = 0; i < parties.length; i++) {
        const party = parties[i];
        const players = party.players;
        for (let j = 0; j < players.length; j++) {
            const currentPlayer = players[j];
            if (currentPlayer.player === player && currentPlayer.faction.toLowerCase() === faction) {
                count++;
            }
        }
    }
    return count;
};

function countWinsForPlayerAndFaction(player, faction) {
    let count = 0;
    for (let i = 0; i < parties.length; i++) {
        const party = parties[i];
        const players = party.players;
        const winners = party.winners;
        for (let j = 0; j < players.length; j++) {
            const currentPlayer = players[j];
            if (currentPlayer.player === player && currentPlayer.faction.toLowerCase() === faction && winners.includes(player)) {
                count++;
            }
        }
    }
    return count;
};

function countPointsForPlayerAndFaction(player, faction) {
    let totalPoints = 0;
    for (let i = 0; i < parties.length; i++) {
        const party = parties[i];
        const players = party.players;
        for (let j = 0; j < players.length; j++) {
            const currentPlayer = players[j];
            if (currentPlayer.player === player && currentPlayer.faction.toLowerCase() === faction) {
                totalPoints += currentPlayer.points;
            }
        }
    }
    return totalPoints;
};

function getPlayerLastFactions(playerName) {
    const playerParties = parties.filter((party) => {
        const playerIndex = party.players.findIndex(
            (player) => player.player === playerName
        );
        return playerIndex !== -1;
    });

    if (playerParties.length >= 2) {
        const lastTwoParties = playerParties.slice(-2);
        const lastTwoFactions = lastTwoParties.map((party) => {
            const player = party.players.find((player) => player.player === playerName);
            return player.faction;
        });
        return lastTwoFactions.join(', ');
    } else if (playerParties.length === 1) {
        const faction = playerParties[0].players.find(
            (player) => player.player === playerName
        ).faction;
        return [faction];
    } else {
        return [];
    }
};
