
const yuGiOhCardHistory = {
    cardDetails: {
        id: 12345,
        name: "Blue-Eyes White Dragon",
        type: "Dragon",
        attribute: "LIGHT",
        level: 8,
        attack: 3000,
        defense: 2500,
        description: "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.",
        imageUrl: "https://example.com/blue-eyes-white-dragon.jpg",
    },
    ownershipHistory: [
        {
            owner: "Player1",
            acquisitionDate: new Date('2020-01-15'),
            status: "Mint",
            transaction: {
                type: "Trade",
                details: "Traded for Dark Magician"
            }
        },
        {
            owner: "Player2",
            acquisitionDate: new Date('2021-06-22'),
            status: "Near Mint",
            transaction: {
                type: "Purchase",
                details: "$500"
            }
        }
    ],
    battleHistory: [
        {
            opponent: "Red-Eyes Black Dragon",
            outcome: "Win", // "Blue-Eyes White Dragon" won this battle
            date: new Date('2021-07-01'),
            duelDetails: {
                turns: 5,
                strategyUsed: "Offensive",
                specialMoves: ["Burst Stream of Destruction"]
            }
        },
        {
            opponent: "Dark Magician",
            outcome: "Loss", // "Blue-Eyes White Dragon" lost this battle
            date: new Date('2021-07-10'),
            duelDetails: {
                turns: 7,
                strategyUsed: "Defensive",
                specialMoves: ["Dragon Revival Rhapsody"]
            }
        }
    ],
    methods: {
        getCurrentOwner: ()=> {
            return this
        },
        addNewOwner: function(owner, status, transaction) {
            this?.ownershipHistory?.push({
                owner: owner,
                acquisitionDate: new Date(),
                status: status,
                transaction: transaction
            });
        },
        recordBattle: function(opponent, outcome, duelDetails) {
            this.battleHistory?.push({
                opponent: opponent,
                outcome: outcome,
                date: new Date(),
                duelDetails: duelDetails
            });
        },
        getBattleHistory: function() {
            return this.battleHistory?.map(battle => {
                return {
                    opponent: battle.opponent,
                    outcome: battle.outcome,
                    date: battle.date.toDateString(),
                    turns: battle.duelDetails.turns,
                    strategyUsed: battle.duelDetails.strategyUsed
                };
            });
        },
        getOwnershipHistory:()=> {
            return this.ownershipHistory ? this.ownershipHistory.map(entry => {
                return {
                    owner: entry.owner,
                    acquisitionDate: entry.acquisitionDate.toDateString(),
                    status: entry.status,
                    transactionType: entry.transaction.type,
                    transactionDetails: entry.transaction.details
                };
            }) : [];
        }
    }
};

// Example usage:
console.log(yuGiOhCardHistory.methods.getOwnershipHistory());