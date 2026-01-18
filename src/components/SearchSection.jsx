import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, clearSearch } from "../store/search";
import { setCord, getWeather } from "../store/weather";
const SearchSection = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { results, isLoading, error } = useSelector((store) => store.search);
  const handleClick = () => {
    if (search.length > 2) {
      dispatch(getCountries(search));
    }
  };
  const handleClear = () => {
    dispatch(clearSearch());
    setSearch("");
  };
  const handleChoice = (e, longitude, latitude, city, country) => {
    dispatch(getWeather({ longitude, latitude }));
    dispatch(setCord({ longitude, latitude, city, country }));
    dispatch(clearSearch());
    setSearch("");
  };
  return (
    <div className="grid justify-center gap-4 ">
      <h1 className="text-Neutral-0 font-bold text-7xl leading-[1.2] text-center text-wrap py-10">
        How's the Sky looking today
      </h1>
      <div className="grid gap-4 lg:grid-cols-6">
        <div className="relative flex items-center gap-2 p-2 px-4 rounded-lg lg:col-span-5 bg-Neutral-700">
          {isLoading && (
            <div className="absolute left-0 z-10 flex items-center w-full h-full gap-4 p-4 rounded-lg bg-Neutral-700 top-35 lg:top-18">
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                  className="animate-spin  [animation-duration:3s]"
                >
                  <path
                    fill="#fff"
                    d="M9.25 1.5c0 .719-.563 1.25-1.25 1.25-.719 0-1.25-.531-1.25-1.25C6.75.812 7.281.25 8 .25c.688 0 1.25.563 1.25 1.25ZM8 13.25c.688 0 1.25.563 1.25 1.25 0 .719-.563 1.25-1.25 1.25-.719 0-1.25-.531-1.25-1.25 0-.688.531-1.25 1.25-1.25ZM15.75 8c0 .719-.563 1.25-1.25 1.25-.719 0-1.25-.531-1.25-1.25 0-.688.531-1.25 1.25-1.25.688 0 1.25.563 1.25 1.25Zm-13 0c0 .719-.563 1.25-1.25 1.25C.781 9.25.25 8.719.25 8c0-.688.531-1.25 1.25-1.25.688 0 1.25.563 1.25 1.25Zm.625-5.844c.719 0 1.25.563 1.25 1.25 0 .719-.531 1.25-1.25 1.25-.688 0-1.25-.531-1.25-1.25 0-.687.563-1.25 1.25-1.25Zm9.219 9.219c.687 0 1.25.531 1.25 1.25 0 .688-.563 1.25-1.25 1.25-.719 0-1.25-.563-1.25-1.25 0-.719.531-1.25 1.25-1.25Zm-9.219 0c.719 0 1.25.531 1.25 1.25 0 .688-.531 1.25-1.25 1.25-.688 0-1.25-.563-1.25-1.25 0-.719.563-1.25 1.25-1.25Z"
                  />
                </svg>
              </span>
              <p className="text-sm text-Neutral-200 ">Search in progress</p>
            </div>
          )}
          {results.length > 0 && (
            <div className="absolute left-0 z-10 grid w-full min-h-full overflow-y-auto rounded-lg scrollbar scrollbar-thumb-Blue-500 scrollbar-track-Neutral-700 max-h-90 bg-Neutral-600 top-35 lg:top-18">
              {results.map((r) => {
                return (
                  <button
                    onClick={(e) =>
                      handleChoice(
                        e,
                        r.longitude,
                        r.latitude,
                        r.name,
                        r.country
                      )
                    }
                    key={r.id}
                    className="w-full gap-2 p-4 border-b rounded-lg cursor-pointer flex-start-col border-b-Neutral-700 hover:bg-Neutral-800"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://open-meteo.com/images/country-flags/${r.country_code.toLowerCase()}.svg`}
                        alt=""
                        className="max-w-10"
                      />
                      <p className="text-md text-Neutral-200 ">{r.name}</p>
                    </div>
                    <div className="text-Neutral-300">
                      <p className="text-xs text-left text-Neutral-300 sm:text-sm">
                        {r.country || ""}{" "}
                        {`(${r.latitude.toFixed(2)}°N ${r.longitude.toFixed(
                          2
                        )}°E ${r.elevation}m asl)`}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
          {error.length > 0 && (
            <div className="absolute left-0 z-10 flex items-center w-full h-full gap-4 p-4 rounded-lg bg-Neutral-700 top-35 lg:top-18">
              <p className="w-full text-sm text-center text-red-600 ">
                {error}
              </p>
            </div>
          )}
          <span className="shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                fill="#D4D3D9"
                d="M19.844 18.82c.195.196.195.508 0 .664l-.899.899c-.156.195-.468.195-.664 0l-4.726-4.727a.63.63 0 0 1-.117-.351v-.508c-1.446 1.21-3.282 1.953-5.313 1.953A8.119 8.119 0 0 1 0 8.625C0 4.172 3.633.5 8.125.5c4.453 0 8.125 3.672 8.125 8.125 0 2.031-.781 3.906-1.992 5.313h.508c.117 0 .234.078.351.156l4.727 4.726ZM8.125 14.875a6.243 6.243 0 0 0 6.25-6.25c0-3.438-2.813-6.25-6.25-6.25a6.243 6.243 0 0 0-6.25 6.25 6.219 6.219 0 0 0 6.25 6.25Z"
              />
            </svg>
          </span>

          <input
            type="text"
            className="block h-full py-2 grow outline-0 text-Neutral-300 "
            placeholder="Search for a place"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search.length > 0 && (
            <button onClick={handleClear} className="shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#ACACB7"
                  d="M9 .531c4.781 0 8.719 3.938 8.719 8.719 0 4.816-3.938 8.719-8.719 8.719A8.717 8.717 0 0 1 .281 9.25C.281 4.469 4.184.531 9 .531Zm4.957 3.762c-2.566-2.566-6.574-2.707-9.316-.563l9.879 9.88c2.144-2.743 2.003-6.75-.563-9.317Zm-9.95 9.95c2.567 2.566 6.575 2.706 9.317.562l-9.879-9.88c-2.144 2.743-2.004 6.75.563 9.317Z"
                />
              </svg>
            </button>
          )}
        </div>
        <button
          onClick={handleClick}
          disabled={search.length < 3}
          className="w-full p-4 lg:col-span-1 text-Neutral-0 bg-Blue-500 rounded-xl focus:outline focus:outline-Neutral-200 focus:outline-offset-2 disabled:bg-Neutral-800"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
