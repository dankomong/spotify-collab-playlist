import React from 'react';
import Link from 'next/link';

const Nav = ({ user }) => {
  const handleLogout = () => {
    sessionStorage.removeItem('encryptedAccessToken');
    window.location.href = '/login';
  };

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <button onClick={handleLogout}>Log out</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;