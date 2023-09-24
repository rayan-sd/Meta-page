import React, { useState } from 'react';
// import "./../../scss/Games/NavTournamentResult.scss"
// import AllGames from './AllGames';
import TournamentResult from './TournamentPageResult';
import "./../../scss/Games/TournamentResult.scss"

interface Tab {
    label: string;
    content: JSX.Element;
}

const tabs: Tab[] = [
    { label: "Game", content: <TournamentResult /> },
    { label: "Team Stats", content: <></> }
];

const NavTournamentResult: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0].label);

    return (
        <section className='TournamentResult'>
            <div className="container-tournament-flexcol">
                <div className="result-title">
                    <div className='nav-tournament'>
                        <h3>Type de tournoi - Nom du tournoi</h3>
                        <div className='flex-row'>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.label}
                                    onClick={() => setSelectedTab(tab.label)}
                                    className={selectedTab === tab.label ? 'active' : ''}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='flex-col'>
                        <h2>Quarter Final</h2>
                        <span>Nom du stade</span>
                    </div>
                    <div className='nav-next'>
                        <button>Next</button>
                    </div>
                </div>
                <div className="result-content">
                    {tabs.find(tab => tab.label === selectedTab)?.content}
                </div>
            </div>
        </section>
    );
};

export default NavTournamentResult;
