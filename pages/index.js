import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/requests';

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Nav */}
      <Nav />
      {/* Results */}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { genre = 'fetchTrending' } = context.query;
  // send api request to 3rd party TMDB api.
  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url}`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
