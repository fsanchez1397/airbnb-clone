import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home({ exploreData }) {
  console.log(exploreData);
  return (
    <>
      <Head>
        <title>Create Next App</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl bg-red-300 mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div></div>
          {/*Pull data from server: Static Rendering*/}
        </section>
        <section></section>
      </main>
    </>
  );
}
export async function getStaticProps() {
  const data = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const exploreData = await data.json();

  return {
    props: {
      exploreData,
    },
  };
}
