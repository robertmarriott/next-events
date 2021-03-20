import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home - {process.env.NEXT_PUBLIC_APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
    </>
  );
};

export default Home;
