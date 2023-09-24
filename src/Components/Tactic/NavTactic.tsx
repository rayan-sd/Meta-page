import React, { useState } from 'react';
import "./../../scss/Tactic/NavTactic.scss"
import TacticComposition from './TacticComposition';

interface Tab {
  label: string;
  content: JSX.Element;
}

const tabs: Tab[] = [
  { label: "Compositions", content: <TacticComposition /> },
  { label: "Individual Instructions", content: <></> },
  { label: "Set Pieces", content: <></> },
  { label: "Captain & Vice", content: <></> },
  { label: "Numbers", content: <></> },
];

const NavTactic: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].label);

  return (
    <section className='NavTactic'>
      <div className='container-NavTactic'>
        <div className="navigation-tactic">
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
        <div className="content-tactic">
          {tabs.find(tab => tab.label === selectedTab)?.content}
        </div>
      </div>
    </section>
  );
};

export default NavTactic;
