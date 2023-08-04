const parties = [
    {
        date: '2023-05-05',
        partyNumber: 1,
        players: [
            { player: 'Oleg Old', faction: 'Tleilaxu', points: 0 },
            { player: 'Mr Yuri', faction: 'Fremen', points: 2 },
            { player: 'Maxim', faction: 'Emperor', points: 0 },
            { player: 'Nazar', faction: 'Harkonnen', points: 0 },
            { player: 'Bohdan', faction: 'Atreides', points: 2 },
            { player: 'Oleg Red', faction: 'Ixian', points: 0 }
        ],
        winners: ['Mr Yuri', 'Bohdan'],
        description: 'Victory of the alliance in round 6'
    },
    {
        date: '2023-05-05',
        partyNumber: 2,
        players: [
            { player: 'Igor', faction: 'Harkonnen', points: 2 },
            { player: 'Maxim', faction: 'Choam', points: 0 },
            { player: 'Mr Yuri', faction: 'Richese', points: 0 },
            { player: 'Nazar', faction: 'Bene', points: 2 },
            { player: 'Ivan', faction: 'Atreides', points: 0 },
            { player: 'Denis Junior', faction: 'Tleilaxu', points: 0 }
        ],
        winners: ['Nazar', 'Igor'],
        description: 'Victory by tie-break',
    },
    {
        date: '2023-05-13',
        partyNumber: 3,
        players: [
            { player: 'Nazar', faction: 'Ixian', points: 2 },
            { player: 'Bohdan', faction: 'Fremen', points: 2 },
            { player: 'Oleg Red', faction: 'Atreides', points: 0 },
            { player: 'Maxim', faction: 'Bene', points: 0 },
            { player: 'Mr Yuri', faction: 'Tleilaxu', points: 0 },
            { player: 'Denis Junior', faction: 'Richese', points: 0 }
        ],
        winners: ['Nazar', 'Bohdan'],
        description: 'Victory of the alliance in round 5',
    },
    {
        date: '2023-05-16',
        partyNumber: 4,
        players: [
            { player: 'Nazar', faction: 'Emperor', points: 0 },
            { player: 'Bohdan', faction: 'Choam', points: 0 },
            { player: 'Oleg Old', faction: 'Fremen', points: 0 },
            { player: 'Maxim', faction: 'Ixian', points: 0 },
            { player: 'Igor', faction: 'Bene', points: 2 },
            { player: 'Denis Junior', faction: 'Atreides', points: 0 }
        ],
        winners: ['Igor'],
        description: 'Victory by prediction. In reality, victory of the Ixian + Fremen alliance in Round 5.',
    },
    {
        date: '2023-05-21',
        partyNumber: 5,
        players: [
            { player: 'Mr Yuri', faction: 'Fremen', points: 0.5 },
            { player: 'Bohdan', faction: 'Ixian', points: 0.5 },
            { player: 'Ivan', faction: 'Emperor', points: 0 },
            { player: 'Maxim', faction: 'Harkonnen', points: 0 },
            { player: 'Igor', faction: 'Tleilaxu', points: 0 },
            { player: 'Denis Junior', faction: 'Bene', points: 0 }
        ],
        winners: ['Bohdan', 'Mr Yuri'],
        description: 'Victory by Fremen ability in 10 round (game without Guild).',
    },
    {
        date: '2023-06-03',
        partyNumber: 6,
        players: [
            { player: 'Maxim', faction: 'Bene', points: 0 },
            { player: 'Bohdan', faction: 'Emperor', points: 0 },
            { player: 'Igor', faction: 'Harkonnen', points: 0 },
            { player: 'Ivan', faction: 'Fremen', points: 2 },
            { player: 'Nazar', faction: 'Ixian', points: 2 },
            { player: 'Denis Junior', faction: 'Guild', points: 0 }
        ],
        winners: ['Nazar', 'Ivan'],
        description: 'Victory of the alliance in round 7.',
    },
    {
        date: '2023-06-08',
        partyNumber: 7,
        players: [
            { player: 'Maxim', faction: 'Fremen', points: 0 },
            { player: 'Bohdan', faction: 'Bene', points: 2 },
            { player: 'Igor', faction: 'Choam', points: 0 },
            { player: 'Oleg Old', faction: 'Guild', points: 2 },
            { player: 'Nazar', faction: 'Harkonnen', points: 0 },
            { player: 'Mr Yuri', faction: 'Atreides', points: 0 }
        ],
        winners: ['Bohdan', 'Oleg Old'],
        description: 'Victory of the alliance in round 7.',
    },
    {
        date: '2023-06-10',
        partyNumber: 8,
        players: [
            { player: 'Maxim', faction: 'Ixian', points: 0 },
            { player: 'Ivan', faction: 'Richese', points: 0 },
            { player: 'Igor', faction: 'Guild', points: 0.5 },
            { player: 'Oleg Old', faction: 'Bene', points: 0.5 },
            { player: 'Nazar', faction: 'Emperor', points: 0 },
            { player: 'Mr Yuri', faction: 'Harkonnen', points: 0 }
        ],
        winners: ['Igor', 'Oleg Old'],
        description: 'Victory by Guild ability.',
    },
    {
        date: '2023-06-14',
        partyNumber: 9,
        players: [
            { player: 'Maxim', faction: 'Guild', points: 0 },
            { player: 'Bohdan', faction: 'Atreides', points: 2 },
            { player: 'Igor', faction: 'Bene', points: 0 },
            { player: 'Oleg Old', faction: 'Harkonnen', points: 0 },
            { player: 'Nazar', faction: 'Fremen', points: 0 },
            { player: 'Mr Yuri', faction: 'Emperor', points: 2 }
        ],
        winners: ['Bohdan', 'Mr Yuri'],
        description: 'Victory of the alliance in round 2.',
    },
    {
        date: '2023-06-18',
        partyNumber: 10,
        players: [
            { player: 'Ivan', faction: 'Harkonnen', points: 0 },
            { player: 'Bohdan', faction: 'Emperor', points: 0 },
            { player: 'Igor', faction: 'Atreides', points: 0 },
            { player: 'Oleg Old', faction: 'Guild', points: 0.5 },
            { player: 'Nazar', faction: 'Ixian', points: 0 },
            { player: 'Mr Yuri', faction: 'Bene', points: 0.5 }
        ],
        winners: ['Oleg Old', 'Mr Yuri'],
        description: 'Victory by Guild ability.',
    },
    {
        date: '2023-06-22',
        partyNumber: 11,
        players: [
            { player: 'Igor', faction: 'Harkonnen', points: 0 },
            { player: 'Misha', faction: 'Emperor', points: 0 },
            { player: 'Nazar', faction: 'Atreides', points: 0 },
            { player: 'Denis Junior', faction: 'Tleilaxu', points: 0 },
            { player: 'Bohdan', faction: 'Fremen', points: 1 },
            { player: 'Mr Yuri', faction: 'Ixian', points: 0 }
        ],
        winners: ['Bohdan'],
        description: 'Solo victory by ability, without Guild.',
    },
    {
        date: '2023-06-23',
        partyNumber: 12,
        players: [
            { player: 'Mr Yuri', faction: 'Atreides', points: 0 },
            { player: 'Maxim', faction: 'Choam', points: 0 },
            { player: 'Igor', faction: 'Tleilaxu', points: 0 },
            { player: 'Ivan', faction: 'Ixian', points: 0 },
            { player: 'Nazar', faction: 'Bene', points: 0 },
            { player: 'Bohdan', faction: 'Harkonnen', points: 3 }
        ],
        winners: ['Bohdan'],
        description: 'Solo victory in round 3.',
    },
    {
        date: '2023-06-23',
        partyNumber: 13,
        players: [
            { player: 'Mr Yuri', faction: 'Tleilaxu', points: 0 },
            { player: 'Maxim', faction: 'Atreides', points: 0 },
            { player: 'Igor', faction: 'Emperor', points: 0 },
            { player: 'Ivan', faction: 'Bene', points: 0 },
            { player: 'Nazar', faction: 'Ixian', points: 3 },
            { player: 'Bohdan', faction: 'Richese', points: 0 }
        ],
        winners: ['Nazar'],
        description: 'Solo victory in round 1.',
    },
    {
        date: '2023-06-23',
        partyNumber: 14,
        players: [
            { player: 'Mr Yuri', faction: 'Bene', points: 0 },
            { player: 'Maxim', faction: 'Guild', points: 0 },
            { player: 'Igor', faction: 'Atreides', points: 0 },
            { player: 'Ivan', faction: 'Tleilaxu', points: 2 },
            { player: 'Oleg Old', faction: 'Fremen', points: 0 },
            { player: 'Bohdan', faction: 'Ixian', points: 2 }
        ],
        winners: ['Bohdan', 'Ivan'],
        description: 'Victory of the alliance in round 4.',
    },
    {
        date: '2023-07-12',
        partyNumber: 15,
        players: [
            { player: 'Mr Yuri', faction: 'Harkonnen', points: 2 },
            { player: 'Denis Junior', faction: 'Bene', points: 0 },
            { player: 'Oleg Old', faction: 'Emperor', points: 0 },
            { player: 'Igor', faction: 'Ixian', points: 2 },
            { player: 'Misha', faction: 'Richese', points: 0 },
            { player: 'Bohdan', faction: 'Atreides', points: 0 }
        ],
        winners: ['Mr Yuri', 'Igor'],
        description: 'Victory of the alliance in round 2.',
    },
    {
        date: '2023-07-15',
        partyNumber: 16,
        players: [
            { player: 'Mr Yuri', faction: 'Ixian', points: 0 },
            { player: 'Denis Junior', faction: 'Fremen', points: 0 },
            { player: 'Oleg Old', faction: 'Tleilaxu', points: 2 },
            { player: 'Artem', faction: 'Guild', points: 0 },
            { player: 'Misha', faction: 'Harkonnen', points: 0 },
            { player: 'Ivan', faction: 'Atreides', points: 2 }
        ],
        winners: ['Oleg Old', 'Ivan'],
        description: 'Victory of the alliance in round 4.',
    },
    {
        date: '2023-07-15',
        partyNumber: 17,
        players: [
            { player: 'Mr Yuri', faction: 'Richese', points: 0 },
            { player: 'Denis Junior', faction: 'Harkonnen', points: 0 },
            { player: 'Oleg Old', faction: 'Guild', points: 2 },
            { player: 'Artem', faction: 'Emperor', points: 0 },
            { player: 'Misha', faction: 'Bene', points: 0 },
            { player: 'Ivan', faction: 'Ixian', points: 2 }
        ],
        winners: ['Oleg Old', 'Ivan'],
        description: 'Victory of the alliance in round 5.',
    },
    {
        date: '2023-07-19',
        partyNumber: 18,
        players: [
            { player: 'Mr Yuri', faction: 'Atreides', points: 0 },
            { player: 'Nazar', faction: 'Emperor', points: 0 },
            { player: 'Oleg Old', faction: 'Bene', points: 0 },
            { player: 'Bohdan', faction: 'Richese', points: 0 },
            { player: 'Igor', faction: 'Choam', points: 2 },
            { player: 'Ivan', faction: 'Harkonnen', points: 2 }
        ],
        winners: ['Igor', 'Ivan'],
        description: 'Victory of the alliance in round 4.',
    },
    {
        date: '2023-07-26',
        partyNumber: 19,
        players: [
            { player: 'Mr Yuri', faction: 'Ixian', points: 2 },
            { player: 'Nazar', faction: 'Richese', points: 0 },
            { player: 'Oleg Old', faction: 'Choam', points: 0 },
            { player: 'Bohdan', faction: 'Guild', points: 2 },
            { player: 'Igor', faction: 'Bene', points: 0 },
            { player: 'Ivan', faction: 'Fremen', points: 0 }
        ],
        winners: ['Bohdan', 'Mr Yuri'],
        description: 'Victory of the alliance in round 4.',
    },
    {
        date: '2023-07-30',
        partyNumber: 20,
        players: [
            { player: 'Mr Yuri', faction: 'Bene', points: 0 },
            { player: 'Slavik', faction: 'Guild', points: 0 },
            { player: 'Oleg Old', faction: 'Tleilaxu', points: 2 },
            { player: 'Bohdan', faction: 'Atreides', points: 2 },
            { player: 'Artem', faction: 'Ixian', points: 0 },
            { player: 'Ivan', faction: 'Richese', points: 0 }
        ],
        winners: ['Bohdan', 'Oleg Old'],
        description: 'Victory of the alliance in round 8.',
    },
    {
        date: '2023-08-01',
        partyNumber: 21,
        players: [
            { player: 'Oleg', faction: 'Fremen', points: 0.5 },
            { player: 'Ivan', faction: 'Harkonnen', points: 0 },
            { player: 'Bohdan', faction: 'Bene', points: 0 },
            { player: 'Igor', faction: 'Guild', points: 0.5 },
            { player: 'Oleg Old', faction: 'Ixian', points: 0 },
            { player: 'Nazar', faction: 'Tleilaxu', points: 0 }
        ],
        winners: ['Oleg', 'Igor'],
        description: 'Victory by Guild ability.',
    },
    {
        date: '2023-08-02',
        partyNumber: 22,
        players: [
            { player: 'Bohdan', faction: 'Fremen', points: 0 },
            { player: 'Ivan', faction: 'Guild', points: 0.5 },
            { player: 'Nazar', faction: 'Bene', points: 0 },
            { player: 'Igor', faction: 'Ixian', points: 0 },
            { player: 'Misha', faction: 'Richese', points: 0 },
            { player: 'Andriy', faction: 'Choam', points: 0.5 }
        ],
        winners: ['Andriy', 'Ivan'],
        description: 'Victory by Guild ability.',
    },
];

