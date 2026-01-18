import { useSelector } from "react-redux";
import { format } from "date-fns";
import { getIconPath } from "../assets/Icons";
const MainCast = () => {
  const { isLoading, current } = useSelector((store) => store.weather);
  return (
    <div className="mt-20 space-y-5">
      <div className="relative gap-4 flex-center-col min-h-70 overflow-clip rounded-2xl bg-Neutral-700">
        {isLoading && (
          <div className="flex flex-col items-center gap-2 ">
            <span className="animate-spin [animation-duration:3s]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#fff"
                  d="M9.25 1.5c0 .719-.563 1.25-1.25 1.25-.719 0-1.25-.531-1.25-1.25C6.75.812 7.281.25 8 .25c.688 0 1.25.563 1.25 1.25ZM8 13.25c.688 0 1.25.563 1.25 1.25 0 .719-.563 1.25-1.25 1.25-.719 0-1.25-.531-1.25-1.25 0-.688.531-1.25 1.25-1.25ZM15.75 8c0 .719-.563 1.25-1.25 1.25-.719 0-1.25-.531-1.25-1.25 0-.688.531-1.25 1.25-1.25.688 0 1.25.563 1.25 1.25Zm-13 0c0 .719-.563 1.25-1.25 1.25C.781 9.25.25 8.719.25 8c0-.688.531-1.25 1.25-1.25.688 0 1.25.563 1.25 1.25Zm.625-5.844c.719 0 1.25.563 1.25 1.25 0 .719-.531 1.25-1.25 1.25-.688 0-1.25-.531-1.25-1.25 0-.687.563-1.25 1.25-1.25Zm9.219 9.219c.687 0 1.25.531 1.25 1.25 0 .688-.563 1.25-1.25 1.25-.719 0-1.25-.563-1.25-1.25 0-.719.531-1.25 1.25-1.25Zm-9.219 0c.719 0 1.25.531 1.25 1.25 0 .688-.531 1.25-1.25 1.25-.688 0-1.25-.563-1.25-1.25 0-.719.563-1.25 1.25-1.25Z"
                />
              </svg>
            </span>
            <span className="text-Neutral-0">Loading..</span>
          </div>
        )}
        {current && !isLoading && (
          <>
            <div className="absolute z-1 top-0 left-0 right-0 bottom-0 bg-[url(/assets/images/bg-today-small.svg)] bg-no-repeat bg-center bg-cover sm:hidden"></div>
            <div className="absolute hidden sm:block z-1 top-0 left-0 right-0 bottom-0 bg-[url(/assets/images/bg-today-large.svg)] bg-no-repeat bg-center bg-cover"></div>
            <div className="flex flex-col gap-1 z-8 ">
              <p className="text-3xl font-bold text-center text-Neutral-0">
                {current?.timezone?.replace("/", ", ")}
              </p>
              <p className="text-sm text-center text-Neutral-200">
                {format(new Date(current?.current?.time), "iiii, PP")}
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 z-8">
              <div>
                <img
                  src={getIconPath(current?.current?.weather_code)}
                  className="grow-0 max-w-20"
                  alt=""
                />
              </div>
              <p className="text-6xl font-bold text-Neutral-0">
                {current?.current?.temperature_2m}{" "}
                {current?.current_units.temperature_2m}
              </p>
            </div>{" "}
          </>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="flex flex-col gap-4 p-4 border rounded-2xl bg-Neutral-800 border-Neutral-600">
          <span className="text-Neutral-200 text-md">Feels Like</span>
          {!isLoading ? (
            <span className="text-Neutral-0 text-md">
              {current?.current?.apparent_temperature}{" "}
              {current?.current_units.apparent_temperature}
            </span>
          ) : (
            <span className="text-Neutral-0 text-md animate-pulse">--</span>
          )}
        </div>
        <div className="flex flex-col gap-4 p-4 border rounded-2xl bg-Neutral-800 border-Neutral-600">
          <span className="text-Neutral-200 text-md">Humidaty</span>
          {!isLoading ? (
            <span className="text-Neutral-0 text-md">
              {current?.current?.relative_humidity_2m}{" "}
              {current?.current_units.relative_humidity_2m}
            </span>
          ) : (
            <span className="text-Neutral-0 text-md animate-pulse">--</span>
          )}
        </div>
        <div className="flex flex-col gap-4 p-4 border rounded-2xl bg-Neutral-800 border-Neutral-600">
          <span className="text-Neutral-200 text-md">Wind</span>
          {!isLoading ? (
            <span className="text-Neutral-0 text-md">
              {current?.current?.wind_speed_10m}{" "}
              {current?.current_units.wind_speed_10m}
            </span>
          ) : (
            <span className="text-Neutral-0 text-md animate-pulse">--</span>
          )}
        </div>
        <div className="flex flex-col gap-4 p-4 border rounded-2xl bg-Neutral-800 border-Neutral-600">
          <span className="text-Neutral-200 text-md">Precipitation</span>
          {!isLoading ? (
            <span className="text-Neutral-0 text-md">
              {current?.current?.precipitation}{" "}
              {current?.current_units.precipitation}
            </span>
          ) : (
            <span className="text-Neutral-0 text-md animate-pulse">--</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainCast;
