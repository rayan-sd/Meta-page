// import "./../../scss/Games/TournamentResult.scss"
import "./../../scss/Games/TeamStadium.scss"
import React, { useState, useEffect } from 'react';

export interface Team {
    number: number;
    name: string;
    Position: string;
    Eval: number;
    Goal: number;
    Assist: number;
    Passe: number;
    Duel: number;
    rate: number;
}

interface Scorer {
    name: string;
    minute: number;
}

interface Player {
    name: string;
    Position: string;
}

const calculateAverage = (team: Team[]) => {
    let sum = 0;
    team.forEach((player) => {
        sum += player.rate;
    });
    return sum / team.length;
};

const TournamentResult: React.FC = () => {

    const [players, setPlayers] = useState<Team[]>([])
    const [opponent, setOpponent] = useState<Team[]>([])
    const [result, setResult] = useState<string>('');
    const [scoreA, setScoreA] = useState<number>(0);
    const [scoreB, setScoreB] = useState<number>(0);
    const [classG, setClassG] = useState<boolean>(false);
    const [goalScorers, setGoalScorers] = useState<Scorer[]>([]);

    const [teamA, setTeamA] = useState<Team[]>([
        { number: 1, name: "kiki", Position: "GK", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 85 },
        { number: 2, name: "bruno fer", Position: "LB", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 85 },
        { number: 3, name: "popi", Position: "RB", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 85 },
        { number: 4, name: "alz", Position: "CM", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 85 },
        { number: 5, name: "ninho", Position: "CM", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 85 },
        { number: 6, name: "kaka", Position: "CM", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 85 },
        { number: 7, name: "prilo", Position: "RW", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 85 },
        { number: 8, name: "prudo", Position: "LW", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 85 },
        { number: 9, name: "filipe", Position: "ST", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 85 },
        { number: 10, name: "lopez", Position: "CB", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 85 },
        { number: 11, name: "soued", Position: "CB", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 85 },
    ]);

    const [teamB, setTeamB] = useState<Team[]>([
        { number: 1, name: "Ney", Position: "GK", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 83 },
        { number: 2, name: "rayan soued", Position: "LB", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 83 },
        { number: 3, name: "greuute", Position: "RB", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 83 },
        { number: 4, name: "nathane", Position: "CM", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 83 },
        { number: 5, name: "guambino", Position: "CM", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 83 },
        { number: 6, name: "rgs", Position: "CM", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 83 },
        { number: 7, name: "fraek", Position: "RW", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 83 },
        { number: 8, name: "pipi", Position: "LW", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 83 },
        { number: 9, name: "benze", Position: "ST", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 83 },
        { number: 10, name: "leao", Position: "CB", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 83 },
        { number: 11, name: "ugarte", Position: "CB", Eval: 6, Goal: 0, Assist: 0, Passe: 60, Duel: 30, rate: 83 },
    ]);

    const positions = ['GK', 'CB', 'RB', 'LB', 'CM', 'MD', 'LD', 'CAM', 'RW', 'LW', 'BU', 'ST'];

    // Fonction pour filtrer les joueurs par position
    const filterByPosition = (team: Player[], position: string) => team.filter(player => player.Position === position);

    useEffect(() => {
        const simulateMatch = (teamA: Team[], teamB: Team[]) => {
            var scoreAbefore = 0;
            var scoreBbefore = 0;
            var goalScorersbefore: Scorer[] = [];
            const avgA = calculateAverage(teamA);
            const avgB = calculateAverage(teamB);

            while (scoreAbefore + scoreBbefore < (1 + Math.floor(Math.random() * 4))) {
                let minute = Math.floor(Math.random() * 90) + 1; // generates a minute between 1 and 90
                if (avgA > avgB && scoreA < 3) {
                    const randomIndex = Math.floor(Math.random() * teamA.length);
                    scoreAbefore += 1;
                    goalScorersbefore.push({ name: teamA[randomIndex].name, minute: minute });
                } else if (avgB > avgA && scoreB < 3) {
                    const randomIndex = Math.floor(Math.random() * teamB.length);
                    scoreBbefore += 1;
                    goalScorersbefore.push({ name: teamB[randomIndex].name, minute: minute });
                }
            }
            setScoreA(scoreAbefore);
            setGoalScorers(goalScorersbefore)
            setScoreB(scoreBbefore);
            if (scoreAbefore > scoreBbefore) {
                setResult(`${goalScorersbefore.join(', ')}`);
            } else if (scoreBbefore > scoreAbefore) {
                setClassG(true);
                setResult(`${goalScorersbefore.join(', ')}`);
            } else {
                setResult(`Match nul entre les deux équipes avec un score de ${scoreAbefore} à ${scoreBbefore}`);
            }
        };
        setPlayers(teamA);
        setOpponent(teamB);
        simulateMatch(teamA, teamB);
    }, []);

    return (
        // <section className='TournamentResult'>
        //     <div className="container-tournament-flexcol">
        //         <div className="result-title">
        //             <h2>Type de tournoi - Nom du tournoi</h2>
        //             <h3>Etape du tournoi - Nom du stade</h3>
        //         </div>
                <div className="result-content">
                    <div className="first-team">
                        <h4>N.Y City</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Name</th>
                                    <th>Pos</th>
                                    <th>Eval</th>
                                    <th>G</th>
                                    <th>A</th>
                                    <th>%Passes</th>
                                    <th>Duels</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamA.map((team, index) => {
                                    const goalScorerNames = goalScorers.map(scorer => scorer.name);

                                    if (goalScorerNames.includes(team.name)) {
                                        team.Goal = goalScorers.filter(scorer => scorer.name === team.name).length;
                                    }
                                    return (
                                        <tr key={team.name}>
                                            <td>{team.number}</td>
                                            <td>{team.name}</td>
                                            <td>{team.Position}</td>
                                            <td>{team.Eval}</td>
                                            <td>{team.Goal}</td>
                                            <td>{team.Assist}</td>
                                            <td>{team.Passe}</td>
                                            <td>{team.Duel}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="stadium-play">
                        {/* <div className="stadium-name">
                            <p>Etape du tournoi</p>
                            <p>Nom du stade</p>
                        </div> */}
                        <div className="score-game">
                            <h3>Finish</h3>
                            <div className="score-finish">
                                <h3>N.Y City</h3>
                                <h3>{scoreA} - {scoreB}</h3>
                                <h3>State United</h3>
                            </div>
                            <div className={classG ? 'box-goals-active' : 'box-goals'}>
                                {goalScorers.map((scorer, index) => (
                                    <span key={index}>{scorer.name} ({scorer.minute}')<br /></span>
                                ))}
                            </div>
                        </div>
                        <div className="team-stadium">
                            <div className="team-A">
                                {positions.map((position, i) =>
                                    <div className={`player position-${position}`} key={i}>
                                        {filterByPosition(teamA, position).map((player: Player, j) =>
                                            <div className="player-details" key={j}>
                                                <p>{player.name}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div className="team-B">
                                {positions.map((position, i) =>
                                    <div className={`player position-${position}`} key={i}>
                                        {filterByPosition(teamB, position).map((player: Player, j) =>
                                            <div className="player-details" key={j}>
                                                <p>{player.name}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="second-team">
                        <h4>State United</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Name</th>
                                    <th>Pos</th>
                                    <th>Eval</th>
                                    <th>G</th>
                                    <th>A</th>
                                    <th>%Passes</th>
                                    <th>Duels</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamB.map((team, index) => {
                                    const goalScorerNames = goalScorers.map(scorer => scorer.name);

                                    if (goalScorerNames.includes(team.name)) {
                                        team.Goal = goalScorers.filter(scorer => scorer.name === team.name).length;
                                    }
                                    return (
                                        <tr key={team.name}>
                                            <td>{team.number}</td>
                                            <td>{team.name}</td>
                                            <td>{team.Position}</td>
                                            <td>{team.Eval}</td>
                                            <td>{team.Goal}</td>
                                            <td>{team.Assist}</td>
                                            <td>{team.Passe}</td>
                                            <td>{team.Duel}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
        //     </div>
        // </section>
    )
};

export default TournamentResult;
