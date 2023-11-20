import { fetchUserPlaylists } from '../../utilities/spotify/spotifyAPI'; // Import the function

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const accessToken = req.headers.authorization.replace('Bearer ', '');
      const playlists = await fetchUserPlaylists(accessToken);
      res.status(200).json({ playlists });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch playlists' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}