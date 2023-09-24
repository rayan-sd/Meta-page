import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SingnUp';
import Sidebar from './Components/Sidebar';
import HomePage from './Components/HomePage/HomePage';
import './App.scss';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import UserInformation from './Components/Information-Users/UserInformation';
import Pack from './Components/Pack';
import Marketplace from './Components/Marketplace/Marketplace';
import PlayerProfile from './Components/PlayerInfo/PlayersProfile';
import Setting from './Components/Setting/Setting';
import NavTactic from './Components/Tactic/NavTactic';
// import AllGames from './Components/Games/AllGames';
import NavGames from './Components/Games/NavGames';
import TournamentMatches from './Components/Games/TournamentView';
import NavTournamentResult from './Components/Games/NavTournamentResult';

const App = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Router>
      <div className="app">
        <Sidebar isHovered={isHovered} setIsHovered={setIsHovered} />
        <div className="content">
          <Navbar isSidebarHovered={isHovered} />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/about" element={<SignUp />} />
            <Route path="/userInformation" element={<UserInformation />} />
            <Route path="/pack" element={<Pack />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/playerstats" element={<PlayerProfile />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/games" element={<NavGames />} />
            <Route path="/tactic" element={<NavTactic />} />
            <Route path="/tournamentview" element={<TournamentMatches />} />
            <Route path="/tournamentresult" element={<NavTournamentResult />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
