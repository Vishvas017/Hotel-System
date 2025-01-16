import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#343a40',
    color: '#ffffff',
    padding: '0.5rem 1rem',
  };

  const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    margin: '0 1rem',
  };

  const brandStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textDecoration: 'none',
  };

  return (
    <nav style={navbarStyle}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NavLink style={brandStyle} to="/">
          Hotel Management
        </NavLink>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <NavLink
              style={linkStyle}
              to="/rooms"
              activeStyle={{ fontWeight: 'bold', color: '#00ff00' }}
            >
              Rooms
            </NavLink>
          </li>
          <li>
            <NavLink
              style={linkStyle}
              to="/reservations"
              activeStyle={{ fontWeight: 'bold', color: '#00ff00' }}
            >
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink
              style={linkStyle}
              to="/reservation-form"
              activeStyle={{ fontWeight: 'bold', color: '#00ff00' }}
            >
              Make Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              style={linkStyle}
              to="/profile"
              activeStyle={{ fontWeight: 'bold', color: '#00ff00' }}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              style={linkStyle}
              to="/logout"
              activeStyle={{ fontWeight: 'bold', color: '#00ff00' }}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
