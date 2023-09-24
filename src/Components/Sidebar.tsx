import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./../scss/Sidebar.scss";
import mm from './../Images/mm.png';
import community from './../Images/community.png'
import ball from './../Images/ball.png'
import market from './../Images/market.png'
import pack from './../Images/pack.png'
import setting from './../Images/setting.png'
import stadium from './../Images/stadium.png'
import team from './../Images/team.png'
import user from './../Images/user.png'
import home from './../Images/name.png'

interface Page {
  name: string;
  path: string;
  image: JSX.Element;
}

const pages: Page[] = [
  { name: 'Home', path: '/home', image: <img src={home} alt="Home" /> },
  { name: 'Games', path: '/games', image: <img src={ball} alt="games" /> },
  { name: 'Profile', path: '/profile', image: <img src={user} alt="Profile" /> },
  { name: 'Tactic', path: '/tactic', image: <img src={stadium} alt="tactic" /> },
  { name: 'Market', path: '/marketplace', image: <img src={market} alt="Marketplace" /> },
  { name: 'Pack', path: '/pack', image: <img src={pack} alt="Pack" /> },
  { name: 'Team', path: '/team', image: <img src={team} alt="Team" /> },
  { name: 'Community', path: '/community', image: <img src={community} alt="Community" /> },
  { name: 'Setting', path: '/setting', image: <img src={setting} alt="Setting" /> },
];

interface SidebarProps {
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isHovered, setIsHovered }: SidebarProps) => {

  const location = useLocation();
  // const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`sidebar ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='container-sidebar-content'>
        <div className="icon-nav">
          <img src={mm} alt="Icon" />
          <h4>BETA</h4>
        </div>
        <div className="image-icons-container">
          {pages.map((page: Page) => (
            <NavLink
              key={page.name}
              to={page.path}
              className={`link ${location.pathname === page.path ? 'active' : ''}`}
            >
              <div className='container-icon-text'>
                <div className="image-icon">
                  <div className='border'></div>
                  {page.image}
                {isHovered && <span className="link-text">{page.name}</span>}
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;