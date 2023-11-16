import React from 'react';
import Link from 'next/link';
import { destroyCookie } from 'nookies';

const Nav = ({ user }) => {
  const handleLogout = () => {
    destroyCookie(null, 'accessToken');
    window.location.href = '/login';
  };

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
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