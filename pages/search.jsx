import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { format } from "date-fns";
import HousingCard from "../components/HousingCard";
import Mapbox from "../components/Mapbox";
const Search = ({ searchResults }) => {
  const router = useRouter();

  const { location, numGuests, startDate, endDate } = router.query;
  const formattedStartDate = format(new Date(startDate), "MMM/d/y");
  const formattedEndDate = format(new Date(endDate), "MMM/d/yy");
  const travelDateRange = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${travelDateRange} | ${numGuests}`} />
      <main className="flex ">
        <section className="ml-10 mb-12  flex-grow">
          {/*if 1 guest change guests to guest */}
          <div className=" mb-4  ">
            <p>
              AMNTOFSTAYS - Stays from {travelDateRange} - for {numGuests}{" "}
              guests
            </p>
            <p className="my-4">Stay in {location}</p>
            <button className="button">Cancellation Flexibility</button>
            <button className="button">Type of Place</button>
            <button className="button">Price</button>
            <button className="button">Rooms and Beds</button>
            <button className="button">More filters</button>
          </div>

          {searchResults?.map((rentalUnit) => {
            return (
              <HousingCard
                key={rentalUnit.img}
                rentalUnitInformation={rentalUnit}
              />
            );
          })}
        </section>
        <section className="hidden  xl:inline-flex xl:min-w-[600px]">
          <Mapbox searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export const getServerSideProps = async () => {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
};
