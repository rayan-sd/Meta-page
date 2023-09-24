import "./../../scss/Games/AllGames.scss"
import React, { useState } from 'react';
import FiltersGames from "./FilterGames";
import TournamentModal from "./TournamentModal";
import TournamentMatches from "./TournamentView";

export interface Tournaments {
    name: string;
    city: string;
    reputation: string;
    startDate: string;
    registered: number;
    entryFees: number;
    entryFeesE: number;
    pricePool: number;
    pricePoolE: number;
    participant : number;
    participants: Player[];
    numberRegistered: number;
}

export interface Player {
    id: string;
    name: string;
    // autres champs au besoin
}

 export const players: Player[] = [
    { id: '1', name: 'Player 1' },
    { id: '2', name: 'Player 2' },
    { id: '3', name: 'Player 3' },
    { id: '4', name: 'Player 4' },
    { id: '5', name: 'Player 5' },
    { id: '6', name: 'Player 6' },
    { id: '7', name: 'Player 7' },
    { id: '8', name: 'Player 8' }
];

const AllGames: React.FC = () => {

    const [open, setOpen] = useState(false);
    const [selectedTournament, setSelectedTournament] = useState<Tournaments | null>(null);
    
    const handleOpen = (tournament: Tournaments) => {
        setSelectedTournament(tournament);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    // Create state for tournaments
    const [tournaments, setTournaments] = useState<Tournaments[]>([
        { name: "Tokyo Tournament", city: "Japan", reputation: "Continental", startDate: "Beginning when full", numberRegistered : 3, registered: 4, entryFeesE : 40 , entryFees: 0.0035, pricePoolE : 400, pricePool: 0.15, participant : 4, participants: [players[0], players[1], players[2], players[3]] },
        { name: "Paris Championship", city: "France", reputation: "Continental", startDate: "Beginning when full", numberRegistered : 3, registered: 4, entryFeesE : 40 , entryFees: 0.0040, pricePoolE : 400, pricePool: 0.20, participant : 4, participants: [players[0], players[1], players[2], players[3]] },
        { name: "New York Masters", city: "USA", reputation: "Continental", startDate: "Beginning when full", numberRegistered : 6, registered: 8, entryFeesE : 40 , entryFees: 0.0045, pricePoolE : 400, pricePool: 0.25, participant : 8, participants: [players[0], players[1], players[2], players[3], players[4], players[5], players[6], players[7]] },
        { name: "Beijing Open", city: "China", reputation: "Regional", startDate: "Beginning when full", numberRegistered : 8, registered: 8, entryFeesE : 40 , entryFees: 0.0025, pricePoolE : 400, pricePool: 0.10, participant : 8, participants: [players[0], players[1], players[2], players[3], players[4], players[5], players[6], players[7]] },
        { name: "London Classic", city: "UK", reputation: "Continental", startDate: "Beginning when full", numberRegistered : 1, registered: 2, entryFeesE : 40 , entryFees: 0.0035, pricePoolE : 400, pricePool: 0.15, participant : 2, participants: [players[0], players[1]] },
        { name: "Sydney Invitational", city: "Australia", reputation: "Continational", startDate: "Beginning when full", numberRegistered : 3, registered: 4, entryFeesE : 40 , entryFees: 0.0040, pricePoolE : 400, pricePool: 0.20, participant : 4, participants: [players[0], players[1], players[2], players[3]] },
        { name: "Moscow Blitz", city: "Russia", reputation: "Continental", startDate: "Beginning when full", numberRegistered : 1, registered: 2, entryFeesE : 40 , entryFees: 0.0045, pricePoolE : 400, pricePool: 0.25, participant : 16, participants: [players[0], players[1]] },
        { name: "Rio Carnival", city: "Brazil", reputation: "Regional", startDate: "Beginning when full", numberRegistered : 2, registered: 2, entryFeesE : 40 , entryFees: 0.0030, pricePoolE : 400, pricePool: 0.10, participant : 2, participants: [players[0], players[1]] }
    ]);

    return (
        <section className='AllGames'>
            <TournamentModal tournament={selectedTournament} isOpen={open} onClose={handleClose} />
            <div className='container-AllGames'>
                <FiltersGames />
                <div className="box-player-AllGames">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Reputation</th>
                                <th>Registered</th>
                                <th>Start Date</th>
                                <th>Entry Fee</th>
                                <th>Prize Pool</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tournaments.map((tournament, index) => (
                                <tr key={tournament.name}>
                                    {/* <TournamentMatches key={tournament.name} tournament={tournament} /> */}
                                    <td>
                                        <div>
                                            <h2>{tournament.name}</h2>
                                            <p>{tournament.city}</p>
                                        </div>
                                    </td>
                                    <td>{tournament.reputation}</td>
                                    <td>{tournament.numberRegistered}/{tournament.participant}</td>
                                    <td>{tournament.startDate}</td>
                                    <td>
                                        <div>
                                            <h2>{tournament.entryFees} ETH</h2>
                                            <p>{tournament.entryFees} €</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <h2 className="bold">{tournament.pricePool} ETH</h2>
                                            <p className="bold">{tournament.pricePoolE} €</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button onClick={() => handleOpen(tournament)}>Enter</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </section>
    )
};

export default AllGames;
