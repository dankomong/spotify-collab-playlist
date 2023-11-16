import { spotifyApi } from '../lib/spotify';
import Nav from '../components/layout/Nav';

export default function Home({ user }) {
  return (
    <div>
      <Nav />
      <h1>Welcome, {user.display_name}!</h1>
      <p>Your email address: {user.email}</p>
      <p>Your Spotify URI: {user.uri}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { accessToken } = context.req.cookies;

  if (!accessToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  spotifyApi.setAccessToken(accessToken);

  const user = await spotifyApi.getMe();

  return {
    props: {
      user,
    },
  };
}