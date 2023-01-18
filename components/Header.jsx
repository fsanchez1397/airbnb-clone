import Image from "next/image";
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import { format } from "date-fns";
const Header = ({ placeholder }) => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numGuests, setNumGuests] = useState(1);
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = [
    {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
    },
  ];
  const search = (e) => {
    e.preventDefault();
    setSearchInput("");
    // router.push("/search");
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        numGuests,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      },
    });
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-10">
      {/*Left */}
      <div
        onClick={() => router.push("/")}
        className="sticky flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="http://links.papareact.com/qd3"
          fill
          style={{ objectFit: "contain", objectPosition: "left" }}
          alt="AirBnB Company Logo"
        />
      </div>
      {/*middle */}
      <div className="flex items-center md:border-2 rounded-full md:shadow-sm max-w-md">
        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className="flex-grow pl-3 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-[5.9px] cursor-pointer md:mx-3" />
      </div>
      {/*right */}
      <div className="flex items-center justify-end space-x-4">
        <p className="hidden md:inline cursor-pointer">Become A Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer text-gray-800" />
        <div className="flex items-center space-x-2 border-2 p-1 rounded-full ">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className=" flex flex-col col-span-3 mx-auto ">
          {/*Calendar */}
          <div className="relative overflow-hidden">
            <DateRangePicker
              ranges={selectionRange}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
          </div>

          <div className="flex items-center border-b mb-4">
            <h2 className="font-semibold text-2xl flex-grow">
              Number of Guest
            </h2>
            <UsersIcon className="h-7" />
            <input
              value={numGuests}
              onChange={(e) => setNumGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-1  text-red-400 text-lg"
            />
          </div>
          {/*Cancel / Search Buttons */}
          <div className="flex   ">
            <button
              className="flex-grow hover:bg-gray-200"
              onClick={(e) => {
                e.preventDefault();
                setSearchInput("");
              }}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
