import React from "react";
import { IoIosOptions } from "react-icons/io";
const SearchField = () => (
  <div className="">
    <div className="bg-gray-300 flex flex-row p-2 justify-between rounded-2xl">
      <input
        className="focus:outline-none rounded-2xl w-full bg-gray-300 placeholder:text-black"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="">
        <IoIosOptions className="text-2xl" />
      </button>
    </div>
  </div>
);

export default SearchField;
