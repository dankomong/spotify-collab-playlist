import { fetchUserName } from '../../utilities/spotify/spotifyAPI';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const accessToken = req.headers.authorization.replace('Bearer ', '');
      
      // Fetch user name
      const userName = await fetchUserName(accessToken);

      res.status(200).json({ userName });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}