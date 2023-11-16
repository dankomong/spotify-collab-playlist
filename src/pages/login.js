import getConfig from 'next/config';

const Login = () => {
    
  const handleSpotifyLogin = () => {
    const { publicRuntimeConfig } = getConfig();
    const { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } = publicRuntimeConfig;

    const authEndpoint = 'https://accounts.spotify.com/authorize';

    const scopes = [
      'user-read-private',
      'playlist-modify-public', // Add necessary scopes
    ].join(' ');

    const authUrl = `${authEndpoint}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${SPOTIFY_REDIRECT_URI}&scope=${scopes}&response_type=token`;

    // Redirect the user to the Spotify authorization URL
    window.location.href = authUrl;
  };


  return (
    <div>
      <div>
        <h1>Login Page</h1>
        <button onClick={handleSpotifyLogin}>Login with Spotify</button>
      </div>
    </div>
  );
};

export default Login;