import React, { useState } from 'react';
import { Tournaments } from './AllGames';
import { useLocation } from "react-router-dom";
import "./../../scss/Games/TournamentView.scss"
import { Player } from './AllGames';

// Pas besoin de props pour ce component maintenant
const TournamentMatches: React.FC = () => {
    const location = useLocation();

    const [selectedMatch, setSelectedMatch] = useState<Player[] | undefined>();
    const [selectedMatchIndex, setSelectedMatchIndex] = useState<number>(0);

    // Lorsqu'un match est cliqué, mettre à jour l'état selectedMatch
    const handleMatchClick = (index: number) => {
        setSelectedMatchIndex(index);
    }


    // Lorsqu'un match est cliqué, mettre à jour l'état selectedMatch
    // const handleMatchClick = (match: Player[]) => {
    //     setSelectedMatch(match);
    // }

    // Vérifiez si location.state et location.state.tournament existent avant d'essayer d'y accéder
    if (!location.state || !location.state.tournament) {
        return null; // Ou afficher un message d'erreur, ou rediriger l'utilisateur, etc.
    }

    // Maintenant que nous avons vérifié que location.state.tournament existe, nous pouvons l'extraire en toute sécurité
    const thetournament = location.state.tournament;

    function generateMatches(tournament: Tournaments) {
        // Pour un tournoi 1v1, il n'y a qu'un seul match
        if (tournament.participant === 2) {
            return [[tournament.participants[0], tournament.participants[1]]];
        }

        // Pour un tournoi à 4 participants, il y aura 2 tours de matches
        if (tournament.participant === 4) {
            return [
                [tournament.participants[0], tournament.participants[1]],
                [tournament.participants[2], tournament.participants[3]]
            ];
        }

        // Pour un tournoi à 8 participants, il y aura 3 tours de matches
        if (tournament.participant === 8) {
            return [
                [tournament.participants[0], tournament.participants[1]],
                [tournament.participants[2], tournament.participants[3]],
                [tournament.participants[4], tournament.participants[5]],
                [tournament.participants[6], tournament.participants[7]]
            ];
        }

        if (tournament.participant === 16) {
            return [
                [tournament.participants[0], tournament.participants[1]],
                [tournament.participants[0], tournament.participants[1]],
                [tournament.participants[0], tournament.participants[1]],
                [tournament.participants[0], tournament.participants[1]],
                [tournament.participants[0], tournament.participants[1]],
                // [tournament.participants[0], tournament.participants[1]],
                [tournament.participants[0], tournament.participants[1]]
            ];
        }

        return [];
    }

    function getDetailsTournamentClass(totalMatches: number): string {
        if (totalMatches <= 2) {
            return "details-tournament few-matches";
        }

        return "details-tournament";
    }

    function getSvgClass(index: number, totalMatches: number): string {
        if (totalMatches === 1) {
            return "extra-large-svg";
        }

        if (totalMatches === 2) {
            return index === 0 ? "medium-svg" : "extra-large-svg";
        }

        if (totalMatches === 4) {
            switch (index) {
                case 0:
                case 1:
                    return "small-svg";
                case 2:
                    return "medium-svg";
                default:
                    return "extra-large-svg";
            }
        }

        if (totalMatches === 6) {
            switch (index) {
                case 0:
                case 1:
                    return "small-svg";
                case 2:
                case 3:
                    return "medium-svg";
                default:
                    return "extra-large-svg";
            }
        }

        // Ajoutez plus de conditions ici si nécessaire
        return "default-svg";
    }




    const matches = generateMatches(thetournament);
    if (!selectedMatch && matches.length > 0) {
        setSelectedMatch(matches[0]);
    }

    const tab = [
        { name: "Winner", priceeth: "0.3", priceeur: "600", ranking: "100" },
        { name: "Winner", priceeth: "0.3", priceeur: "600", ranking: "100" },
        { name: "Winner", priceeth: "0.3", priceeur: "600", ranking: "100" },
        { name: "Winner", priceeth: "0.3", priceeur: "600", ranking: "100" },
        { name: "Winner", priceeth: "0.3", priceeur: "600", ranking: "100" },
    ]

    return (
        <section className='TournamentView'>
            <div className='container-Tournament'>
                <div className='title-tournament-view'>
                    <h4>25th February 2023 4:00 pm</h4>
                    <h2>{thetournament.name}</h2>
                    <h3>{thetournament.reputation}</h3>
                </div>
                <div className='content-tournament-view'>
                    <div className={getDetailsTournamentClass(matches.length)}>
                        {matches.map((match, index) => (
                            <div key={index} className='match' onClick={() => handleMatchClick(index)}>
                                <div className={`svg-container ${selectedMatchIndex === index ? 'svg-container-active' : ''}`}>
                                    <svg className={getSvgClass(index, matches.length)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151 172" fill="none">
                                        <rect width="150.368" height="172" rx="15.0495" fill="url(#paint0_linear_1267_2732)" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M90.9085 172H139.124C145.358 172 150.411 166.947 150.411 160.713V11.2871C150.411 5.05342 145.358 0 139.124 0H53.0031L90.9085 172Z" fill="url(#paint1_linear_1267_2732)" fill-opacity="0.7" />
                                        <defs>
                                            <linearGradient id="paint0_linear_1267_2732" x1="150.125" y1="1.70634" x2="120.921" y2="189.032" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#F9F9F9" stop-opacity="0" />
                                                <stop offset="1" stop-opacity="0.69" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_1267_2732" x1="118.242" y1="-4.66621e-07" x2="117.539" y2="177.246" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#2ED06E" />
                                                <stop offset="0.963542" stop-color="#363531" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <p>{match[0].name} vs {match[1].name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='result-tournament'>
                        <div className='result-game'>
                            <p>0.3 ETH</p>
                            <p>Congratulations, you won this tournament !</p>
                        </div>
                        <div className='classement-game'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Result</th>
                                        <th>Price (ETH)</th>
                                        <th>Price (€)</th>
                                        <th>Ranking</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tab.map((rank, index) => (
                                        <tr key={rank.name}>
                                            <td>{rank.name}</td>
                                            <td>{rank.priceeth} ETH</td>
                                            <td>{rank.priceeur}</td>
                                            <td>+{rank.ranking}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='result-tournament-view'>
                    {matches[selectedMatchIndex] && (
                        <>
                            <h3>Finale</h3>
                            <p>{matches[selectedMatchIndex][0].name} vs {matches[selectedMatchIndex][1].name}</p>
                            {/* <p>Résultat : {"1 - 0" ? "Match pas encore disputé"} </p> */}
                            <p>Résultat : 1 - 0</p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
};

export default TournamentMatches;
