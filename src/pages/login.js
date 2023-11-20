import getConfig from 'next/config';
import cryptoRandomString from 'crypto-random-string';
import base64 from 'base64url';
import crypto from 'crypto';

const Login = () => {
  const { publicRuntimeConfig } = getConfig();
  const { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } = publicRuntimeConfig;
    
  const handleSpotifyLogin = () => {
    // Generate a random code verifier (high entropy)
    const codeVerifier = cryptoRandomString({ length: 128, type: 'base64' });

    // Create a code challenge from the code verifier
    const codeChallenge = generateCodeChallenge(codeVerifier);

    const authEndpoint = 'https://accounts.spotify.com/authorize';

    const scopes = [
      'user-read-private',
      'user-read-email',
      'playlist-modify-public', // Add necessary scopes
    ].join(' ');

    const authUrl = `${authEndpoint}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${SPOTIFY_REDIRECT_URI}&scope=${scopes}&response_type=code&code_challenge_method=S256&code_challenge=${codeChallenge}&code_verifier=${codeVerifier}`;

    // Redirect the user to the Spotify authorization URL
    window.location.href = authUrl;
  };

  // Function to generate code challenge from code verifier using SHA256 hashing
  const generateCodeChallenge = (verifier) => {
    const buffer = Buffer.from(verifier);
    const hash = crypto.createHash('sha256').update(buffer).digest('base64');
    const codeChallenge = base64.encode(hash);
    return codeChallenge;
  }


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