// import React from 'react';
// import './../scss/Navbar.scss';
// import {RiSearchLine} from "react-icons/ri";
// import {BsBell} from "react-icons/bs";
// import {FiMail} from "react-icons/fi";
// import {TfiWallet} from "react-icons/tfi";
// import vms from './../Images/vms.png'


// interface NavbarProps {
//     isSidebarHovered: boolean;
//   }
  
//   const Navbar = ({ isSidebarHovered }: NavbarProps) => {

//   return (
//     // <nav className="Navbar">
//     <nav className={`Navbar ${isSidebarHovered ? 'expanded' : ''}`}>
//         <div className='container-all'>
//             <div className='container-input'>
//                 <input type="search" placeholder="Search Matches, Players, Stats ..." />
//                 <button type="submit"><RiSearchLine className="SearchIcon_sidebar" /></button>
//             </div>
//             <div className='container-text'>
//                 <h3 className='box-rate'>Continent</h3>
//                 <button type="submit"><BsBell className="SearchIcon_sidebar" /></button>
//                 <button type="submit"><FiMail className="SearchIcon_sidebar" /></button>
//                 <span><TfiWallet className="SearchIcon_sidebar" /> 1,42eth</span>
//                 <div className='box-user'>
//                     <img src={vms} alt="userProfile"></img>
//                     <div className='box-user-info'>
//                         <h3>Pickel Vartera</h3>
//                         <h4>Manager</h4>
//                     </div>
//                 </div>
//         </div>

//         </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import './../scss/Navbar.scss';
import {RiSearchLine} from "react-icons/ri";
import {BsBell} from "react-icons/bs";
import {FiMail} from "react-icons/fi";
import {TfiWallet} from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import vms from './../Images/vms.png'

interface NavbarProps {
  isSidebarHovered: boolean;
}

interface RootState {
  user: null | { name: string };
}

const Navbar = ({ isSidebarHovered }: NavbarProps) => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <nav className={`Navbar ${isSidebarHovered ? 'expanded' : ''}`}>
      <div className='container-all'>
        <div className='container-input'>
          <input type="search" placeholder="Search Matches, Players, Stats ..." />
          <button type="submit"><RiSearchLine className="SearchIcon_sidebar" /></button>
        </div>
        <div className='container-text'>
          {user ? (
            <>
              <h3 className='box-rate'>Continent</h3>
              <button type="submit"><BsBell className="SearchIcon_sidebar" /></button>
              <button type="submit"><FiMail className="SearchIcon_sidebar" /></button>
              <span><TfiWallet className="SearchIcon_sidebar" /> 1,42eth</span>
              <div className='box-user'>
                <img src={vms} alt="userProfile"></img>
                <div className='box-user-info'>
                  <h3>Pickel Vartera</h3>
                  <h4>Manager</h4>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/signup">Sign Up</Link>
              <Link to="/signin">Sign In</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
