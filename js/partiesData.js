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
    {
        date: '2023-08-07',
        partyNumber: 23,
        players: [
            { player: 'Mr Yuri', faction: 'Emperor', points: 0 },
            { player: 'Ivan', faction: 'Ixian', points: 0 },
            { player: 'Nazar', faction: 'Guild', points: 0 },
            { player: 'Igor', faction: 'Harkonnen', points: 2 },
            { player: 'Murloc', faction: 'Fremen', points: 0 },
            { player: 'Andriy', faction: 'Bene', points: 2 }
        ],
        winners: ['Andriy', 'Igor'],
        description: 'Victory of the alliance in round 10.',
    },
    {
        date: '2023-08-13',
        partyNumber: 24,
        players: [
            { player: 'Mr Yuri', faction: 'Fremen', points: 0.5 },
            { player: 'Ivan', faction: 'Atreides', points: 0 },
            { player: 'Sasha', faction: 'Choam', points: 0 },
            { player: 'Scytale', faction: 'Emperor', points: 0 },
            { player: 'Bohdan', faction: 'Ixian', points: 0.5 },
            { player: 'Oleg Red', faction: 'Bene', points: 0 }
        ],
        winners: ['Bohdan', 'Mr Yuri'],
        description: 'Victory by Fremen ability in round 10.',
    },
    {
        date: '2023-08-14',
        partyNumber: 25,
        players: [
            { player: 'Andriy', faction: 'Richese', points: 0 },
            { player: 'Ivan', faction: 'Bene', points: 3 },
            { player: 'Denis Junior', faction: 'Emperor', points: 0 },
            { player: 'Scytale', faction: 'Harkonnen', points: 0 },
            { player: 'Nazar', faction: 'Ixian', points: 0 },
            { player: 'Misha', faction: 'Tleilaxu', points: 0 }
        ],
        winners: ['Ivan'],
        description: 'Solo victory in round 1.',
    },
    {
        date: '2023-08-14',
        partyNumber: 26,
        players: [
            { player: 'Andriy', faction: 'Harkonnen', points: 0 },
            { player: 'Ivan', faction: 'Richese', points: 0 },
            { player: 'Denis Junior', faction: 'Bene', points: 2 },
            { player: 'Scytale', faction: 'Tleilaxu', points: 2 },
            { player: 'Nazar', faction: 'Atreides', points: 0 },
            { player: 'Misha', faction: 'Emperor', points: 0 }
        ],
        winners: ['Scytale', 'Denis Junior'],
        description: 'Victory by tie-breake.',
    },
    {
        date: '2023-08-16',
        partyNumber: 27,
        players: [
            { player: 'Andriy', faction: 'Tleilaxu', points: 0 },
            { player: 'Ivan', faction: 'Emperor', points: 2 },
            { player: 'Oleg Old', faction: 'Harkonnen', points: 0 },
            { player: 'Murloc', faction: 'Ixian', points: 0 },
            { player: 'Mr Yuri', faction: 'Bene', points: 2 },
            { player: 'Igor', faction: 'Fremen', points: 0 }
        ],
        winners: ['Ivan', 'Mr Yuri'],
        description: 'Victory of the alliance in round 3.',
    },
    {
        date: '2023-08-16',
        partyNumber: 28,
        players: [
            { player: 'Andriy', faction: 'Emperor', points: 2 },
            { player: 'Ivan', faction: 'Bene', points: 2 },
            { player: 'Denis Junior', faction: 'Harkonnen', points: 0 },
            { player: 'Murloc', faction: 'Choam', points: 0 },
            { player: 'Mr Yuri', faction: 'Atreides', points: 0 },
            { player: 'Igor', faction: 'Ixian', points: 0 }
        ],
        winners: ['Ivan', 'Andriy'],
        description: 'Victory of the alliance in round 5.',
    },
    {
        date: '2023-08-23',
        partyNumber: 29,
        players: [
            { player: 'Bohdan', faction: 'Tleilaxu', points: 0 },
            { player: 'Ivan', faction: 'Harkonnen', points: 2 },
            { player: 'Denis Junior', faction: 'Giuld', points: 0 },
            { player: 'Nazar', faction: 'Bene', points: 0 },
            { player: 'Mr Yuri', faction: 'Ixian', points: 2 },
            { player: 'Oleg Old', faction: 'Atreides', points: 0 }
        ],
        winners: ['Ivan', 'Mr Yuri'],
        description: 'Victory of the alliance in round 6.',
    },
    {
        date: '2023-08-29',
        partyNumber: 30,
        players: [
            { player: 'Bohdan', faction: 'Harkonnen', points: 0 },
            { player: 'Ivan', faction: 'Ixian', points: 0 },
            { player: 'Denis Junior', faction: 'Bene', points: 2 },
            { player: 'Nazar', faction: 'Choam', points: 0 },
            { player: 'Mr Yuri', faction: 'Fremen', points: 0 },
            { player: 'Igor', faction: 'Guild', points: 2 }
        ],
        winners: ['Igor', 'Denis Junior'],
        description: 'Victory of the alliance in round 5.',
    },
    {
        date: '2024-01-03',
        partyNumber: 31,
        players: [
            { player: 'Oleg Old', faction: 'Harkonnen', points: 0 },
            { player: 'Oleg', faction: 'Guild', points: 0 },
            { player: 'Sasha', faction: 'Atreides', points: 2 },
            { player: 'Nazar', faction: 'Bene', points: 2 },
            { player: 'Mr Yuri', faction: 'Ecaz', points: 0 },
            { player: 'Misha', faction: 'Tleilaxu', points: 0 }
        ],
        winners: ['Nazar', 'Sasha'],
        description: 'Victory of the alliance in round 6.',
    },
    {
        date: '2024-01-06',
        partyNumber: 32,
        players: [
            { player: 'Oleg Old', faction: 'Emperor', points: 0 },
            { player: 'Denis Junior', faction: 'Tleilaxu', points: 0 },
            { player: 'Andriy', faction: 'Harkonnen', points: 0 },
            { player: 'Nazar', faction: 'Ixian', points: 2 },
            { player: 'Mr Yuri', faction: 'Atreides', points: 2 },
            { player: 'Misha', faction: 'Moritani', points: 0 }
        ],
        winners: ['Nazar', 'Mr Yuri'],
        description: 'Victory of the alliance in round 3.',
    },
    {
        date: '2024-01-06',
        partyNumber: 33,
        players: [
            { player: 'Oleg Old', faction: 'Ixian', points: 2 },
            { player: 'Denis Junior', faction: 'Guild', points: 0 },
            { player: 'Andriy', faction: 'Emperor', points: 2 },
            { player: 'Nazar', faction: 'Moritani', points: 0 },
            { player: 'Mr Yuri', faction: 'Harkonnen', points: 0 },
            { player: 'Misha', faction: 'Bene', points: 0 }
        ],
        winners: ['Oleg Old', 'Andriy'],
        description: 'Victory of the alliance in round 3.',
    },
    {
        date: '2024-01-11',
        partyNumber: 34,
        players: [
            { player: 'Oleg Old', faction: 'Guild', points: 0 },
            { player: 'Sasha', faction: 'Ixian', points: 0 },
            { player: 'Ivan', faction: 'Emperor', points: 0 },
            { player: 'Nazar', faction: 'Fremen', points: 3 },
            { player: 'Mr Yuri', faction: 'Moritani', points: 0 },
            { player: 'Artem S.', faction: 'Bene', points: 0 }
        ],
        winners: ['Nazar'],
        description: 'Solo victory in round 5.',
    },
    {
        date: '2024-01-20',
        partyNumber: 35,
        players: [
            { player: 'Oleg Old', faction: 'Atreides', points: 0 },
            { player: 'Misha', faction: 'Harkonnen', points: 2 },
            { player: 'Denis Junior', faction: 'Fremen', points: 0 },
            { player: 'Igor', faction: 'Guild', points: 0 },
            { player: 'Mr Yuri', faction: 'Ecaz', points: 2 },
            { player: 'Artem S.', faction: 'Tleilaxu', points: 0 }
        ],
        winners: ['Mr Yuri', 'Misha'],
        description: 'Victory of the alliance in round 7.',
    },
    {
        date: '2024-01-24',
        partyNumber: 36,
        players: [
            { player: 'Oleg Old', faction: 'Choam', points: 0 },
            { player: 'Andriy', faction: 'Ixian', points: 3 },
            { player: 'Denis Junior', faction: 'Ecaz', points: 0 },
            { player: 'Nazar', faction: 'Emperor', points: 0 },
            { player: 'Mr Yuri', faction: 'Bene', points: 0 },
            { player: 'Artem S.', faction: 'Fremen', points: 0 }
        ],
        winners: ['Andriy'],
        description: 'Solo victory in round 3.',
    },
    {
        date: '2024-01-31',
        partyNumber: 37,
        players: [
            { player: 'Misha', faction: 'Ecaz', points: 2 },
            { player: 'Andriy', faction: 'Guild', points: 0 },
            { player: 'Denis Junior', faction: 'Moritani', points: 0 },
            { player: 'Nazar', faction: 'Ixian', points: 2 },
            { player: 'Mr Yuri', faction: 'Atreides', points: 0 },
            { player: 'Artem S.', faction: 'Fremen', points: 0 }
        ],
        winners: ['Misha', 'Nazar'],
        description: 'Victory of the alliance in round 9.',
    },
    {
        date: '2024-02-29',
        partyNumber: 38,
        players: [
            { player: 'Oleg Old', faction: 'Fremem', points: 0 },
            { player: 'Andriy', faction: 'Emperor', points: 0 },
            { player: 'Denis Junior', faction: 'Atreides', points: 0 },
            { player: 'Nazar', faction: 'Guild', points: 0 },
            { player: 'Mr Yuri', faction: 'Ixian', points: 2 },
            { player: 'Artem S.', faction: 'Moritani', points: 2 }
        ],
        winners: ['Artem S.', 'Mr Yuri'],
        description: 'Victory of the alliance in round 8.',
    },
    {
        date: '2024-03-07',
        partyNumber: 39,
        players: [
            { player: 'Oleg Old', faction: 'Moritani', points: 0 },
            { player: 'Igor', faction: 'Atreides', points: 0.5 },
            { player: 'Oleg', faction: 'Fremen', points: 0.5 },
            { player: 'Nazar', faction: 'Richese', points: 0 },
            { player: 'Mr Yuri', faction: 'Bene', points: 0 },
            { player: 'Artem S.', faction: 'Tleilaxu', points: 0 }
        ],
        winners: ['Oleg', 'Igor'],
        description: 'Victory by Fremen ability in round 10.',
    },
    {
        date: '2024-03-13',
        partyNumber: 40,
        players: [
            { player: 'Oleg Old', faction: 'Ecaz', points: 0 },
            { player: 'Igor', faction: 'Tleilaxu', points: 0 },
            { player: 'Ivan', faction: 'Harkonnen', points: 0 },
            { player: 'Nazar', faction: 'Atreides', points: 0 },
            { player: 'Mr Yuri', faction: 'Fremen', points: 2 },
            { player: 'Artem S.', faction: 'Choam', points: 2 }
        ],
        winners: ['Mr Yuri', 'Artem S.'],
        description: 'Victory of the alliance in round 9.',
    },
    {
        date: '2024-04-13',
        partyNumber: 41,
        players: [
            { player: 'Oleg Old', faction: 'Fremen', points: 2 },
            { player: 'Igor', faction: 'Emperor', points: 0 },
            { player: 'Denis Junior', faction: 'Guild', points: 0 },
            { player: 'Nazar', faction: 'Bene', points: 2 },
            { player: 'Misha', faction: 'Moritani', points: 0 },
            { player: 'Volodymyr', faction: 'Harkonnen', points: 0 }
        ],
        winners: ['Oleg Old', 'Nazar'],
        description: 'Victory of the alliance in round 4.',
    },
    {
        date: '2024-04-27',
        partyNumber: 42,
        players: [
            { player: 'Oleg Old', faction: 'Harkonnen', points: 0 },
            { player: 'Igor', faction: 'Guild', points: 0 },
            { player: 'Denis Junior', faction: 'Bene', points: 0 },
            { player: 'Nazar', faction: 'Richese', points: 2 },
            { player: 'Misha', faction: 'Tleilaxu', points: 3 },
            { player: 'Volodymyr', faction: 'Ecaz', points: 2 }
        ],
        winners: ['Misha', 'Nazar', 'Volodymyr'],
        description: 'Victory of the alliance(Ecaz+Richese) and solo(Tleilaxu) in round 9.',
    },
    {
        date: '2024-09-07',
        partyNumber: 43,
        players: [
            { player: 'Oleg Old', faction: 'Moritani', points: 2 },
            { player: 'Igor', faction: 'Choam', points: 0 },
            { player: 'Mr Yuri', faction: 'Harkonnen', points: 0 },
            { player: 'IgorN', faction: 'Tlailaxu', points: 0 },
            { player: 'Sasha', faction: 'Atreides', points: 2 },
            { player: 'Yura', faction: 'Fremen', points: 0 }
        ],
        winners: ['Oleg Old', 'Sasha'],
        description: 'Victory of the alliance in round 3.',
    },
    {
        date: '2024-09-18',
        partyNumber: 44,
        players: [
            { player: 'Denis Junior', faction: 'Harkonnen', points: 2 },
            { player: 'Max', faction: 'Ixian', points: 0 },
            { player: 'Mr Yuri', faction: 'Bene', points: 2 },
            { player: 'IgorN', faction: 'Choam', points: 0 },
            { player: 'Artem S.', faction: 'Atreides', points: 0 },
            { player: 'Yura', faction: 'Guild', points: 0 }
        ],
        winners: ['Denis Junior', 'Mr Yuri'],
        description: 'Victory of the alliance in round 5.',
    },
    {
        date: '2024-09-21',
        partyNumber: 45,
        players: [
            { player: 'Denis Junior', faction: 'Richese', points: 2 },
            { player: 'Max', faction: 'Moritani', points: 2 },
            { player: 'Mr Yuri', faction: 'Fremen', points: 0 },
            { player: 'Volodymyr', faction: 'Tleilaxu', points: 0 },
            { player: 'Oleg Old', faction: 'Choam', points: 0 },
            { player: 'Yura', faction: 'Ixian', points: 0 }
        ],
        winners: ['Denis Junior', 'Max'],
        description: 'Victory of the alliance in round 5.',
    },
    {
        date: '2024-09-25',
        partyNumber: 46,
        players: [
            { player: 'Denis Junior', faction: 'Emperor', points: 0.5 },
            { player: 'Artem S.', faction: 'Ixian', points: 0 },
            { player: 'Mr Yuri', faction: 'Atreides', points: 0 },
            { player: 'Igor', faction: 'Harkonnen', points: 0 },
            { player: 'Oleg Old', faction: 'Guild', points: 0.5 },
            { player: 'Yura', faction: 'Bene', points: 0 }
        ],
        winners: ['Denis Junior', 'Oleg Old'],
        description: 'Victory by Guild ability.',
    },
    {
        date: '2024-10-10',
        partyNumber: 47,
        players: [
            { player: 'Denis Junior', faction: 'Fremen', points: 0 },
            { player: 'Artem S.', faction: 'Harkonnen', points: 0 },
            { player: 'Mr Yuri', faction: 'Emperor', points: 2 },
            { player: 'Igor', faction: 'Guild', points: 2 },
            { player: 'Oleg Old', faction: 'Bene', points: 0 },
            { player: 'Max', faction: 'Atreides', points: 0 }
        ],
        winners: ['Igor', 'Mr Yuri'],
        description: 'Victory of the alliance in round 3.',
    },
    {
        date: '2024-10-16',
        partyNumber: 48,
        players: [
            { player: 'Denis Junior', faction: 'Atreides', points: 0 },
            { player: 'Artem S.', faction: 'Emperor', points: 0 },
            { player: 'Mr Yuri', faction: 'Tleilaxu', points: 2 },
            { player: 'Yura', faction: 'Ixian', points: 0 },
            { player: 'Oleg Old', faction: 'Harkonnen', points: 2 },
            { player: 'Max', faction: 'Richese', points: 0 }
        ],
        winners: ['Oleg Old', 'Mr Yuri'],
        description: 'Victory of the alliance in round 6.',
    },
    {
        date: '2024-10-23',
        partyNumber: 49,
        players: [
            { player: 'Denis Junior', faction: 'Harkonnen', points: 0 },
            { player: 'Artem S.', faction: 'Atreides', points: 0 },
            { player: 'Mr Yuri', faction: 'Ixian', points: 3 },
            { player: 'Yura', faction: 'Guild', points: 0 },
            { player: 'Igor', faction: 'Choam', points: 0 },
            { player: 'Max', faction: 'Fremen', points: 0 }
        ],
        winners: ['Mr Yuri'],
        description: 'Solo victory in round 7.',
    },
    {
        date: '2024-10-26',
        partyNumber: 50,
        players: [
            { player: 'Sasha', faction: 'Ixian', points: 0 },
            { player: 'Volodymyr', faction: 'Harkonnen', points: 0 },
            { player: 'Mr Yuri', faction: 'Emperor', points: 2 },
            { player: 'Misha', faction: 'Richese', points: 0 },
            { player: 'Igor', faction: 'Tleilaxu', points: 2 },
            { player: 'Max', faction: 'Ecaz', points: 0 }
        ],
        winners: ['Mr Yuri', 'Igor'],
        description: 'Victory of the alliance in round 4.',
    },

    {
        date: '2024-10-26',
        partyNumber: 51,
        players: [
            { player: 'Sasha', faction: 'Ecaz', points: 0 },
            { player: 'Volodymyr', faction: 'Bene', points: 0 },
            { player: 'Mr Yuri', faction: 'Tleilaxu', points: 0 },
            { player: 'Misha', faction: 'Choam', points: 0 },
            { player: 'Igor', faction: 'Atreides', points: 0 },
            { player: 'Max', faction: 'Ixian', points: 3 }
        ],
        winners: ['Max'],
        description: 'Solo victory in round 2.',
    },

    {
        date: '2024-11-06',
        partyNumber: 52,
        players: [
            { player: 'Yura', faction: 'Harkonnen', points: 0 },
            { player: 'R_ember', faction: 'Ecaz', points: 0 },
            { player: 'Mr Yuri', faction: 'Bene', points: 2 },
            { player: 'Artem S.', faction: 'Ixian', points: 0 },
            { player: 'Oleg Old', faction: 'Guild', points: 2 },
            { player: 'Max', faction: 'Fremen', points: 0 }
        ],
        winners: ['Oleg Old', 'Mr Yuri'],
        description: 'Victory of the alliance in round 6.',
    },

    {
        date: '2024-11-13',
        partyNumber: 53,
        players: [
            { player: 'Yura', faction: 'Bene', points: 2 },
            { player: 'R_ember', faction: 'Guild', points: 0 },
            { player: 'Igor', faction: 'Fremen', points: 2 },
            { player: 'Artem S.', faction: 'Harkonnen', points: 0 },
            { player: 'Oleg Old', faction: 'Emperor', points: 0 },
            { player: 'Max', faction: 'Moritani', points: 0 }
        ],
        winners: ['Yura', 'Igor'],
        description: 'Victory of the alliance in round 6.',
    },

    {
        date: '2024-12-04',
        partyNumber: 54,
        players: [
            { player: 'Yura', faction: 'Fremen', points: 2 },
            { player: 'Mr Yuri', faction: 'Harkonnen', points: 0 },
            { player: 'Denis Junior', faction: 'Guild', points: 2 },
            { player: 'Artem S.', faction: 'Moritani', points: 0 },
            { player: 'Oleg Old', faction: 'Ixian', points: 0 },
            { player: 'Max', faction: 'Choam', points: 0 }
        ],
        winners: ['Denis Junior', 'Yura'],
        description: 'Victory of the alliance in round 3.',
    },

    {
        date: '2024-12-07',
        partyNumber: 55,
        players: [
            { player: 'Yura', faction: 'Tleilaxu', points: 0 },
            { player: 'Mr Yuri', faction: 'Ixian', points: 2 },
            { player: 'Denis Junior', faction: 'Choam', points: 0 },
            { player: 'Volodymyr', faction: 'Moritani', points: 0 },
            { player: 'Oleg Old', faction: 'Bene', points: 2 },
            { player: 'IgorN', faction: 'Fremen', points: 0 }
        ],
        winners: ['Oleg Old', 'Mr Yuri'],
        description: 'Victory of the alliance in round 2.',
    },

    {
        date: '2024-12-07',
        partyNumber: 56,
        players: [
            { player: 'Yura', faction: 'Guild', points: 2 },
            { player: 'Mr Yuri', faction: 'Moritani', points: 2 },
            { player: 'Denis Junior', faction: 'Atreides', points: 0 },
            { player: 'Volodymyr', faction: 'Harkonnen', points: 0 },
            { player: 'Max', faction: 'Emperor', points: 0 },
            { player: 'IgorN', faction: 'Ecaz', points: 0 }
        ],
        winners: ['Yura', 'Mr Yuri'],
        description: 'Victory of the alliance in round 10.',
    },

    {
        date: '2024-12-12',
        partyNumber: 57,
        players: [
            { player: 'Yura', faction: 'Harkonnen', points: 0 },
            { player: 'Mr Yuri', faction: 'Atreides', points: 2 },
            { player: 'Oleg Old', faction: 'Moritani', points: 2 },
            { player: 'Max', faction: 'Guild', points: 0 },
            { player: 'Artem S.', faction: 'Bene', points: 0 },
            { player: 'R_ember', faction: 'Emperor', points: 0 }
        ],
        winners: ['Oleg Old', 'Mr Yuri'],
        description: 'Victory of the alliance in round 5.',
    },

    {
        date: '2024-12-14',
        partyNumber: 58,
        players: [
            { player: 'Igor', faction: 'Guild', points: 1 },
            { player: 'Mr Yuri', faction: 'Harkonnen', points: 0 },
            { player: 'Oleg Old', faction: 'Fremen', points: 0 },
            { player: 'Max', faction: 'Ixian', points: 0 },
            { player: 'Volodymyr', faction: 'Choam', points: 0 },
            { player: 'Denis Junior', faction: 'Bene', points: 0 }
        ],
        winners: ['Igor'],
        description: 'Victory by Guild ability.',
    },

    {
        date: '2024-12-18',
        partyNumber: 59,
        players: [
            { player: 'Igor', faction: 'Ixian', points: 0 },
            { player: 'Mr Yuri', faction: 'Bene', points: 2 },
            { player: 'Artem S.', faction: 'Atreides', points: 0 },
            { player: 'Artem', faction: 'Choam', points: 0 },
            { player: 'Max', faction: 'Moritani', points: 0 },
            { player: 'Yura', faction: 'Emperor', points: 0 }
        ],
        winners: ['Mr Yuri'],
        description: 'Victory by Bene ability in raund 4.',
    },

    {
        date: '2024-12-28',
        partyNumber: 60,
        players: [
            { player: 'Volodymyr', faction: 'Fremen', points: 0.5 },
            { player: 'Mr Yuri', faction: 'Moritani', points: 0 },
            { player: 'Artem S.', faction: 'Tleilaxu', points: 0 },
            { player: 'Sasha', faction: 'Emperor', points: 0.5 },
            { player: 'Max', faction: 'Atreides', points: 0 },
            { player: 'Yura', faction: 'Bene', points: 0 }
        ],
        winners: ['Volodymyr', 'Sasha'],
        description: 'Victory by Fremen ability in raund 10.',
    },

    {
        date: '2025-03-05',
        partyNumber: 61,
        players: [
            { player: 'Denis Junior', faction: 'Guild', points: 0 },
            { player: 'Mr Yuri', faction: 'Ixian', points: 2 },
            { player: 'Artem S.', faction: 'Tleilaxu', points: 0 },
            { player: 'Artur', faction: 'Bene', points: 0 },
            { player: 'Max', faction: 'Moritani', points: 2 },
            { player: 'Yura', faction: 'Fremen', points: 0 }
        ],
        winners: ['Mr Yuri', 'Max'],
        description: 'Victory of the alliance in round 3.',
    },

    {
        date: '2025-03-05',
        partyNumber: 62,
        players: [
            { player: 'Denis Junior', faction: 'Tleilaxu', points: 0 },
            { player: 'Mr Yuri', faction: 'Guild', points: 1 },
            { player: 'Artem S.', faction: 'Moritani', points: 0 },
            { player: 'Artur', faction: 'Richese', points: 0 },
            { player: 'Max', faction: 'Fremen', points: 0 },
            { player: 'Yura', faction: 'Ixian', points: 0 }
        ],
        winners: ['Mr Yuri'],
        description: 'Victory by Guild ability.',
    },

    {
        date: '2025-03-08',
        partyNumber: 63,
        players: [
            { player: 'Oleg Old', faction: 'Fremen', points: 2 },
            { player: 'Mr Yuri', faction: 'Emperor', points: 2 },
            { player: 'Artem S.', faction: 'Ixian', points: 0 },
            { player: 'Volodymyr', faction: 'Ecaz', points: 0 },
            { player: 'Max', faction: 'Harkonnen', points: 0 },
            { player: 'Yura', faction: 'Moritani', points: 0 }
        ],
        winners: ['Mr Yuri', 'Oleg Old'],
        description: 'Victory of the alliance in round 5.',
    },

    {
        date: '2025-03-19',
        partyNumber: 64,
        players: [
            { player: 'Denis Junior', faction: 'Fremen', points: 0 },
            { player: 'Mr Yuri', faction: 'Harkonnen', points: 2 },
            { player: 'Artem S.', faction: 'Ixian', points: 2 },
            { player: 'Artur', faction: 'Guild', points: 0 },
            { player: 'Max', faction: 'Tleilaxu', points: 0 },
            { player: 'Yura', faction: 'Bene', points: 0 }
        ],
        winners: ['Mr Yuri', 'Artem S.'],
        description: 'Victory of the alliance in round 6.',
    },






    {
        date: '2025-04-09',
        partyNumber: 65,
        players: [
            { player: 'Oleg Old', faction: 'Tleilaxu', points: 2 },
            { player: 'Mr Yuri', faction: 'Bene', points: 0 },
            { player: 'Artem S.', faction: 'Atreides', points: 0 },
            { player: 'Igor', faction: 'Fremen', points: 0 },
            { player: 'Max', faction: 'Moritani', points: 0 },
            { player: 'Yura', faction: 'Harkonnen', points: 2 }
        ],
        winners: ['Oleg Old', 'Yura'],
        description: 'Victory of the alliance in round 4.',
    },

    {
        date: '2025-04-12',
        partyNumber: 66,
        players: [
            { player: 'Denis Junior', faction: 'Bene', points: 0 },
            { player: 'Mr Yuri', faction: 'Fremen', points: 0 },
            { player: 'Volodymyr', faction: 'Harkonnen', points: 0 },
            { player: 'Halytskyi', faction: 'Ixixan', points: 0.5 },
            { player: 'Igor', faction: 'Tleilaxu', points: 0 },
            { player: 'Yura', faction: 'Guild', points: 0.5 }
        ],
        winners: ['Halytskyi', 'Yura'],
        description: 'Victory by Guild ability.',
    },




];







//SEASONS
const seasons = [
    { start: '2023-05-01', end: '2023-08-31' },
    { start: '2024-01-01', end: '2024-04-30' },
    { start: '2024-09-01', end: '2024-12-31' },
    { start: '2025-03-01', end: '2025-05-31' },
];

function filteredSeasonParties(parties, seasonIndex) {
    const start = new Date(seasons[seasonIndex].start);
    const end = new Date(seasons[seasonIndex].end);

    const filteredParties = parties.filter((party) => {
        const partyDate = new Date(party.date);
        return partyDate >= start && partyDate <= end;
    });

    return filteredParties;
}

const allParties = parties;
const firstSeasonParties = filteredSeasonParties(parties, 0);
const secondSeasonParties = filteredSeasonParties(parties, 1);
const thirdSeasonParties = filteredSeasonParties(parties, 2);
const fourthSeasonParties = filteredSeasonParties(parties, 3);