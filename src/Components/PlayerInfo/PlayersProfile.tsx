import "./../../scss/PlayerInfo/PlayerProfile.scss"
import "./../../scss/PlayerInfo/StatsPlayers.scss"
import React, { useState, useEffect } from 'react';
import player from './../../Images/bg.jpg'
import mm from './../../Images/Img.png'
import { BsChevronDown } from 'react-icons/bs';
import classNames from 'classnames';
import playerData from './../../Json/0.json'

interface PlayerCareerData {
    priceETH: number;
    priceUSD: number;
    type: string;
    date: string;
    from: string;
    game: number;
    goals: number;
    assists: number;
    rating: number;
}

interface PlayerData {
    Reputation: string;
    Bases: string;
    Nationality: string;
    "Last Name": string;
    "First Name": string;
    Season: string;
    Position: string;
    DNA: string;
    Temper: string;
    "Good Foot": string;
    "Height (cm)": number;
    "Weight (kg)": number;
    Potential: number;
    "Wrong Foot": number;
    "Technical Gestures": number;
    Mentorship: number;
    Stats: {
        Defense: PlayerStats;
        Physque: PlayerStats;
        // Rapidite: PlayerStats;
        Technique: PlayerStats;
        Passe: PlayerStats;
        Tir: PlayerStats;
        Mental: PlayerStats;
        "Moyenne Defense": number;
        "Moyenne Physque": number;
        // "Moyenne Rapidite": number;
        "Moyenne Technique": number;
        "Moyenne Passe": number;
        "Moyenne Tir": number;
        "Moyenne Mental": number;
    }
}

interface PlayerStats {
    [key: string]: number;
}


const PlayerProfile: React.FC = () => {

    const playerCareerData: PlayerCareerData[] = [
        { priceETH: 2, priceUSD: 6000, type: "Transfer", date: "24 Apr 2023", from: "Club A", game: 50, goals: 2, assists: 1, rating: 8 },
        { priceETH: 2, priceUSD: 6000, type: "Transfer", date: "24 Apr 2023", from: "Club B", game: 20, goals: 2, assists: 1, rating: 8 },
    ];

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const data = playerData as PlayerData;

    const toggleTable = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className='player-profile'>
            <div className="stats-container">
                <div className="stats-back">
                    <span>Back</span>
                </div>
                <div className="stats-content">
                    {/* Left div */}
                    <div className="stats-left">
                        {/* Top left div */}
                        <div className="player-info">
                            <div className="player-image">
                                <span>70</span>
                                <img alt="image" src={player}></img>
                            </div>
                            <div className="player-name">
                                <h1>Frederico Holez</h1>
                                <div className="reputation-season">
                                    <div className="rs-flexbox">
                                        <h4>SUPERSTAR</h4>
                                        <h5>Season 0</h5>
                                    </div>
                                    <span>italian</span>
                                </div>
                                <div className="player-history">
                                    <p>Frederico was born in Napoli, an italian city football driven. Those streets are as violent as passionnate for the game. Like a lot of napolitan his idol is Maradona.</p>
                                </div>
                                <div className="player-club">
                                    <div className="current-club">
                                        <p>Current Club</p>
                                        <span> <img alt="img2" src={mm}></img> New York ||</span>
                                    </div>
                                    <div className="player-price">
                                        <p>Price</p>
                                        <span>1 ETH</span>
                                    </div>
                                </div>
                                <div className="but-box">
                                    <button>Instant Buy</button>
                                    <button>Send Offer</button>
                                </div>
                            </div>
                        </div>
                        {/* Middle left div */}
                        <div className="player-properties">
                            <h2>Properties</h2>
                            <div className="stats-properties">
                                <span>Position : ST,CF</span>
                                <span>Strong Foot : Right</span>
                                <span> Height : 184cm</span>
                                <span>Weight : 79kg </span>
                                <span>Mindset : Determined</span>
                                <span>Age : 21</span>
                                <span>DNA : Hunter</span>
                                <span>Role : Poacher</span>

                            </div>
                            <div className="rating-stars">
                                <div>
                                    <p>Weak Foot:</p>
                                    <span>4 étoile</span>
                                </div>
                                <div>
                                    <p>Technical Gestures:</p>
                                    <span>3 étoile</span>
                                </div>
                                <div>
                                    <p>Potential:</p>
                                    <span>5 étoile</span>
                                </div>
                                <div>
                                    <p>Mentorship:</p>
                                    <span>4 étoile</span>
                                </div>
                            </div>
                        </div>
                        <div className="player-career">
                            <div className="box-career">
                                <h2>Career</h2>
                                {/* <button className='box-but' onClick={toggleTable}>
                                    <BsChevronDown className={classNames({ 'rotate-icon': isOpen })} />
                                </button> */}
                            </div>
                            {/* {isOpen && ( */}
                                <div className="table-career">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Price (ETH)</th>
                                                <th>Price (USD)</th>
                                                <th>Type</th>
                                                <th>Date</th>
                                                <th>From</th>
                                                <th>Game</th>
                                                <th>G</th>
                                                <th>A</th>
                                                <th>Rating</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {playerCareerData.map((data, index) => (
                                                <tr key={index}>
                                                    <td className="bold">{data.priceETH}</td>
                                                    <td>{data.priceUSD}</td>
                                                    <td>{data.type}</td>
                                                    <td>{data.date}</td>
                                                    <td className="bold">{data.from}</td>
                                                    <td className="bold">{data.game}</td>
                                                    <td className="bold">{data.goals}</td>
                                                    <td className="bold">{data.assists}</td>
                                                    <td className="bold">{data.rating}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            {/* )} */}
                        </div>
                    </div>

                    {/* Right div */}
                    <div className="stats-right">
                        <div className="container-stats">
                            <div className="player-stats-left">
                                <div className="box-info-stats">
                                    <h3>Mental</h3>
                                    <div className="box-statistic">
                                        {Object.keys(data.Stats.Mental).map((stat, index) => (
                                        <div className="statistic" key={index}>
                                            <span>{stat} </span>
                                            <span>{data.Stats.Mental[stat]}</span>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="box-info-stats">
                                    <h3>Passe</h3>
                                    <div className="box-statistic">
                                        {Object.keys(data.Stats.Passe).map((stat, index) => (
                                        <div className="statistic" key={index}>
                                            <span>{stat} </span>
                                            <span>{data.Stats.Passe[stat]}</span>
                                        </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                            <div className="player-stats-middle">
                                <div className="box-info-stats">
                                    <h3>Defense</h3>
                                    <div className="box-statistic">
                                        {Object.keys(data.Stats.Defense).map((stat, index) => (
                                        <div className="statistic" key={index}>
                                            <span>{stat} </span>
                                            <span>{data.Stats.Defense[stat]}</span>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="box-info-stats">
                                    <h3>Tir</h3>
                                    <div className="box-statistic">
                                        {Object.keys(data.Stats.Tir).map((stat, index) => (
                                        <div className="statistic" key={index}>
                                            <span>{stat} </span>
                                            <span>{data.Stats.Tir[stat]}</span>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="player-stats-right">
                                <div className="box-info-stats">
                                    <h3>Physique</h3>
                                    <div className="box-statistic">
                                        {Object.keys(data.Stats.Physque).map((stat, index) => (
                                        <div className="statistic" key={index}>
                                            <span>{stat} </span>
                                            <span>{data.Stats.Physque[stat]}</span>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="box-info-stats">
                                    <h3>Technique</h3>
                                    <div className="box-statistic">
                                    {Object.keys(data.Stats.Technique).map((stat, index) => (
                                    <div className="statistic" key={index}>
                                        <span>{stat} </span>
                                        <span>{data.Stats.Technique[stat]}</span>
                                    </div>
                                    ))}
                                    </div>
                                </div>
                                {/* <div className="box-info-stats">
                                    <h3>Rapidité</h3>
                                    <div className="box-statistic">
                                        {Object.keys(data.Stats.Rapidite).map((stat, index) => (
                                        <div className="statistic" key={index}>
                                            <span>{stat} </span>
                                            <span>{data.Stats.Rapidite[stat]}</span>
                                        </div>
                                        ))}
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="player-stats-bottom">
                            <div className="season-stats">
                                <h3>Season Stats</h3>
                                {/* <p>No matches played yet</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default PlayerProfile;
