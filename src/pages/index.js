import { useEffect, useState } from 'react';
import Nav from '../components/layout/Nav';
import { retrieveAndDecryptToken } from '../utilities/tokenUtils';

export default function Home() {
  const [name, setName ] = useState('')

  useEffect(() => {
    const accessToken = retrieveAndDecryptToken();
    console.log('ACCESS TOKEN', accessToken)
    // Make a GET request to the intermediary API route to fetch user playlists
    fetch('/api/userCreds', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`, // Replace with your access token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setName(data.userName); // Update state with fetched playlists
      })
      .catch((error) => {
        console.error('Error fetching playlists:', error);
      });
  }, []);


  return (
    <div>
      <Nav />
      <h1>Welcome, {name}!</h1>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const accessToken = sessionStorage.getItem('accessToken');
//   const name = await fetchUserName(accessToken)
//   return {
//     props: {
//       name
//     },
//   };
// }