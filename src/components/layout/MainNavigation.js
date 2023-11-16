import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Spotify Collab Playlist</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Filler 1</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Filler 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;