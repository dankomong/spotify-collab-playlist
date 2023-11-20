export default async function handler(req, res) {
    const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REDIRECT_URI } = process.env;
    const { code, codeVerifier } = req.query;
    console.log('HELLOOOO', req.query);
  
    try {
      // Request an access token from Spotify's token endpoint
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: SPOTIFY_CLIENT_ID,
          client_secret: SPOTIFY_CLIENT_SECRET,
          redirect_uri: SPOTIFY_REDIRECT_URI,
          grant_type: 'authorization_code',
          code,
          code_verifier: codeVerifier,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        // Handle successful token exchange
        res.status(200).json(data);
      } else {
        // Handle errors from Spotify token endpoint
        const errorData = await response.json();
        console.error('Failed to exchange authorization code:', errorData);
        res.status(response.status).json({ error: 'Failed to exchange authorization code' });
      }
    } catch (error) {
      // Handle fetch or other errors
      console.error('Error exchanging authorization code:', error);
      res.status(500).json({ error: 'Failed to exchange authorization code' });
    }
  }