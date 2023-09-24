import React, { useState } from 'react';
import "./../../scss/Games/NavGames.scss"
import AllGames from './AllGames';

interface Tab {
  label: string;
  content: JSX.Element;
}

const tabs: Tab[] = [
  { label: "All", content: <AllGames /> },
  { label: "World", content: <></> },
  { label: "Continent", content: <></> },
  { label: "Country", content: <></> },
  { label: "State", content: <></> },
  { label: "Town", content: <></> },
];

const NavGames: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].label);

  return (
    <section className='NavGames'>
      <div className='container-NavGames'>
      <div className='title-games'>
        <h1>Tournaments</h1>
      </div>
        <div className="navigation-Games">
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
        <div className="content-Games">
          {tabs.find(tab => tab.label === selectedTab)?.content}
        </div>
      </div>
    </section>
  );
};

export default NavGames;
