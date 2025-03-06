// SEASON
function addPlayerRowRating(player, obj) {
    let row = document.createElement('tr');
    let cells = [
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td'),
    ];

    let playerLink = document.createElement('strong');
    playerLink.textContent = player;
    playerLink.setAttribute('data-modal-target', '');
    playerLink.setAttribute('data-obj', JSON.stringify(obj));
    playerLink.addEventListener('click', openModal);

    cells[0].appendChild(playerLink);
    cells[1].textContent = getPlayerTotalGames(player, obj);
    cells[2].textContent = getPlayerTotalWins(player, obj);
    cells[3].textContent = getWinRate(getPlayerTotalGames(player, obj), getPlayerTotalWins(player, obj));
    cells[4].textContent = getPlayerTotalPoints(player, obj);
    cells[5].textContent = getAveragePoint(getPlayerTotalPoints(player, obj), getPlayerTotalGames(player, obj));

    cells.forEach(function (cell) {
        row.appendChild(cell);
    });
    DOM.playerData.appendChild(row);
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
        addPlayerRowRating(player, obj);
    });
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

function getPlayerTotalGames(player, obj) {
    let totalGames = 0;
    obj.forEach((party) => {
        party.players.forEach((person) => {
            if (person.player === player) {
                totalGames += 1;
            }
        });
    });
    return totalGames;
}

function getPlayerTotalWins(player, obj) {
    let totalWins = 0;
    obj.forEach((party) => {
        if (party.winners.includes(player)) {
            totalWins += 1;
        }
    });
    return totalWins;
}

function getPlayerTotalPoints(player, obj) {
    let totalPoints = 0;
    obj.forEach((party) => {
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
    if (DOM.modal === null) return;
    const obj = JSON.parse(event.target.getAttribute('data-obj'));
    DOM.modal.classList.add('active');
    DOM.overlay.classList.add('active');
    addDataToModal(event, obj); //
    document.body.classList.add('modal-open');
}

function closeModal() {
    if (DOM.modal == null) return;
    DOM.modal.classList.remove('active');
    DOM.overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
}

function addDataToModal(event, obj) {
    let player = event.target.innerHTML
    let elements = DOM.modalBody.children;
    DOM.modalTitle.innerHTML = event.target.innerHTML;
    DOM.modalBan.innerHTML = 'Next game ban: ' + getPlayerLastFactions(event.target.innerHTML, obj);
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        let games = countGamesForPlayerAndFaction(player, element.id, obj);
        let victories = countWinsForPlayerAndFaction(player, element.id, obj);
        let points = countPointsForPlayerAndFaction(player, element.id, obj);
        element.children[1].innerHTML = games;
        element.children[2].innerHTML = victories;
        element.children[3].innerHTML = getWinRate(games, victories);
        element.children[4].innerHTML = points;
        element.children[5].innerHTML = getAveragePoint(points, games);
    };
};

function countGamesForPlayerAndFaction(player, faction, obj) {
    let count = 0;
    for (let i = 0; i < obj.length; i++) {
        const party = obj[i];
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

function countWinsForPlayerAndFaction(player, faction, obj) {
    let count = 0;
    for (let i = 0; i < obj.length; i++) {
        const party = obj[i];
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

function countPointsForPlayerAndFaction(player, faction, obj) {
    let totalPoints = 0;
    for (let i = 0; i < obj.length; i++) {
        const party = obj[i];
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

function getPlayerLastFactions(playerName, obj) {
    const playerParties = obj.filter((party) => {
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

// FILTER SEASONS
function getSeason(seasonsList) {
    const filterItems = seasonsList.querySelectorAll('.filter__item');
    filterItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const content = item.textContent;

            switch (content) {
                case 'First season':
                    currentParties = firstSeasonParties;
                    DOM.ratingTitle.innerHTML = 'The first season rating';
                    DOM.ratingSubtitle.innerHTML = 'May 01, 2023 to august 31, 2023';
                    DOM.toggleFilterTitle.innerHTML = 'First season';

                    addWinnersSection(FirstSeasonWinnersNames);
                    break;
                case 'Second season':
                    currentParties = secondSeasonParties;
                    DOM.ratingTitle.innerHTML = 'The second season rating';
                    DOM.ratingSubtitle.innerHTML = 'January 01, 2024 to april 30, 2024';
                    DOM.toggleFilterTitle.innerHTML = 'Second season';

                    addWinnersSection(SecondSeasonWinnersNames);
                    break;
                case 'Third season':
                    currentParties = thirdSeasonParties;
                    DOM.ratingTitle.innerHTML = 'The third season rating';
                    DOM.ratingSubtitle.innerHTML = 'September 01, 2024 to december 31, 2024';
                    DOM.toggleFilterTitle.innerHTML = 'third season';

                    addWinnersSection(ThirdSeasonWinnersNames);
                    break;
                case '4th season':
                    currentParties = fourthSeasonParties;
                    DOM.ratingTitle.innerHTML = 'The 4th season rating';
                    DOM.ratingSubtitle.innerHTML = 'March 01, 2025 to may 31, 2025';
                    DOM.toggleFilterTitle.innerHTML = '4th season';

                    const existingWinnersSection = document.querySelector('.rating__winners');
                    if (existingWinnersSection) {
                        existingWinnersSection.remove();
                    }
                    break;
                default:
                    currentParties = allParties;
                    DOM.ratingTitle.innerHTML = 'All games';
                    DOM.ratingSubtitle.innerHTML = '';
                    DOM.toggleFilterTitle.innerHTML = 'All games';

                    const existingWinnersSectionDefault = document.querySelector('.rating__winners');
                    if (existingWinnersSectionDefault) {
                        existingWinnersSectionDefault.remove();
                    }
            }
            DOM.playerData.innerHTML = '';
            addPlayerRowsRanting(currentParties);
        });
    });
};
addPlayerRowsRanting(fourthSeasonParties);
getSeason(DOM.headerFilterSeason);

// ADD WINNERS SECTION
function addWinnersSection(winnersNames) {
    const existingWinnersSection = document.querySelector('.rating__winners');

    // Видалити існуючу секцію переможців, якщо вона є
    if (existingWinnersSection) {
        existingWinnersSection.remove();
    }

    const ratingHeader = document.querySelector('.rating__header');
    let winnersHTML = `
        <div class="rating__winners winners">
            <h4 class="winners__title">Winners</h4>
            <ul class="winners__list">
    `;
    winnersNames.forEach((name, index) => {
        const place = index + 1;
        const medalImage = `images/${place}-place-medal-svgrepo-com.svg`;

        winnersHTML += `
            <li class="winners__item"><img src="${medalImage}" alt="">${name}</li>
        `;
    });
    winnersHTML += `
            </ul>
        </div>
    `;
    ratingHeader.insertAdjacentHTML('afterend', winnersHTML);
}

const FirstSeasonWinnersNames = ['Bohdan', 'Ivan', 'Igor'];
const SecondSeasonWinnersNames = ['Nazar', 'Mr Yuri', 'Misha'];
const ThirdSeasonWinnersNames = ['Mr Yuri', 'Oleg Old', 'Denis Junior'];
//addWinnersSection(FirstSeasonWinnersNames);








