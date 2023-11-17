// Function to fetch user's playlists from Spotify API
const fetchUserPlaylists = async (accessToken) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me/playlists', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`, // Include the access token in the Authorization header
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.items; // Return the playlists or handle the response accordingly
      } else {
        throw new Error('Failed to fetch playlists');
      }
    } catch (error) {
      console.error('Error fetching playlists:', error);
      // Handle error scenarios (e.g., show an error message to the user)
      return []; // Return an empty array or handle the error accordingly
    }
  };

  const fetchUserName = async (accessToken) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`, // Include the access token in the Authorization header
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.display_name; // Return the user's name
      } else {
        throw new Error('Failed to fetch user name');
      }
    } catch (error) {
      console.error('Error fetching user name:', error);
      // Handle error scenarios (e.g., show an error message to the user)
      return null; // Return null or handle the error accordingly
    }
  };
  
export { fetchUserPlaylists, fetchUserName }; // Export the function for use in other files/components
  