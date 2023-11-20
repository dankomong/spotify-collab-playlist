import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { encryptAndStoreToken } from '../utilities/spotify/tokenUtils';

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    // Extract the access token from the URL parameters after the Spotify redirect
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');

    if (accessToken) {
      // Store the access token in sessionStorage
      // In this case I have a helper function to encrypt and decrypt
      encryptAndStoreToken(accessToken);
      router.push('/'); // Replace '/dashboard' with your desired route
    }
  }, [router]);

  return <div>Logging you in...</div>;
};

export default Callback;