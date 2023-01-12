import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { MediumCard } from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardData }) {
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
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-3xl font-semibold pb-5">Explore Nearby</h2>
          {/*Pull data from server: Static Rendering*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(
              ({ location, img: locationImg, distance: locationDistance }) => {
                return (
                  <SmallCard
                    key={location}
                    locationImg={locationImg}
                    locationDistance={locationDistance}
                    location={location}
                  />
                );
              }
            )}
          </div>
        </section>
        <section>
          <h2 className="font-semibold text-3xl py-4">Live anywhere</h2>
          <div className=" flex flex-row space-x-3 overflow-scroll scrollbar-hide">
            {cardData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
export async function getStaticProps() {
  const data = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const exploreData = await data.json();

  const houseTypeData = await fetch("https://www.jsonkeeper.com/b/VHHT");
  const cardData = await houseTypeData.json();
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
