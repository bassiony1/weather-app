import { useState } from "react";
import { useSelector } from "react-redux";
import { getIconPath } from "../assets/Icons";
const Asider = () => {
  const { isLoading, current } = useSelector((store) => store.weather);

  const Week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [currentDay, setCurrentDay] = useState(() => {
    return new Date().getDay() - 1;
  });
  const currentDayNumber = new Date().getDay();
  return (
    <div className="flex flex-col gap-6 p-4 mt-20 rounded-2xl bg-Neutral-800">
      <div className="flex-between ">
        <h3 className="text-lg font-bold text-Neutral-0">Hourly forecast</h3>
        <div className="relative">
          <select
            defaultValue={currentDay}
            className="py-2 pl-4 pr-12 border rounded-lg appearance-none cursor-pointer bg-Neutral-700 border-slate-300 text-Neutral-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setCurrentDay(e.target.value);
            }}
          >
            {Week.map((d, idx) => {
              return (
                <option key={idx} value={idx}>
                  {d}
                </option>
              );
            })}
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500">
            <svg
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="grid gap-4 ">
        {current?.hourly.temperature_2m
          .slice(
            Math.abs(currentDay - currentDayNumber) * 24 + 13,
            Math.abs(currentDay - currentDayNumber) * 24 + 23,
          )
          .map((r, idx) => {
            return (
              <div
                className={`p-4 w-full min-h-10 bg-Neutral-700 rounded-2xl flex-between ${
                  isLoading && "animate-pulse"
                }`}
                key={idx}
              >
                <div className="gap-2 flex-center">
                  {!isLoading ? (
                    <>
                      <div>
                        <img
                          src={getIconPath(
                            current?.hourly.weather_code[
                              idx +
                                Math.abs(currentDay - currentDayNumber) * 24 +
                                15
                            ],
                          )}
                          className="grow-0 max-w-10"
                          alt=""
                        />
                      </div>
                      <span className="text-lg font-bold text-Neutral-200">
                        {1 + idx} PM
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold text-Neutral-200">
                      --
                    </span>
                  )}
                </div>
                <span className="font-bold text-Neutral-200 text-md">
                  {isLoading
                    ? "--"
                    : `${r}${current?.current_units.temperature_2m}`}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Asider;
