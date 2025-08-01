import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const getNavLinkStyle = ({ isActive }) => ({
    color: isActive ? 'green' : 'black',
  });

  return (
    <>
      <header className='section-navbar'>
        <section className='top_txt'>
          <div className='head container'>
            <div className='head_txt'>
              <p>Get Thapa Membership, 30-day return or refund guarantee.</p>
            </div>
            <div className='sign_in_up'>
              <NavLink to="#">SIGN IN</NavLink>
              <NavLink to="#">SIGN UP</NavLink>
            </div>
          </div>
        </section>

        <div className='container'>
          <div className='navbar-brand'>
            <NavLink to="index">
              <p>ThapaFlix</p>
            </NavLink>
          </div>

          <nav>
            <ul>
              <li className='nav-item'>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/about" style={({ isActive }) => ({
                    color: isActive ? 'red' : 'black'
                  })}>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/movie" className="nav-link" style={getNavLinkStyle}>
                  Movie
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
