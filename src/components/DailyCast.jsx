import { useSelector } from "react-redux";
import { format } from "date-fns";
import { getIconPath } from "../assets/Icons";
const DailyCast = () => {
  const { current } = useSelector((store) => store.weather);

  return (
    <div className="mt-20 space-y-3 flex-start-col">
      <h3 className="text-2xl font-bold text-Neutral-0">Daily forecast</h3>
      <div className="w-full gap-2 p-2 grid-dynamic-120 justify-items-center">
        {current?.daily.time.map((r, idx) => {
          return (
            <div key={r} className="w-full p-4 rounded-2xl bg-Neutral-800 flex flex-col gap-3.5 items-center max-w-30">
              <span className="font-bold text-Neutral-200 text-md">
                {format(new Date(r), "eee")}
              </span>
              <div>
                <img
                  src={getIconPath(current?.daily.weather_code[idx])}
                  className="grow-0 max-w-30"
                  alt=""
                />
              </div>
              <div className="w-full flex-between">
                <span className="text-xs font-bold text-Neutral-200">
                  {current?.daily.temperature_2m_min[idx].toFixed()}
                  {current?.current_units.temperature_2m}
                </span>
                <span className="text-xs font-bold text-Neutral-200">
                  {current?.daily.temperature_2m_max[idx].toFixed()}
                  {current?.current_units.temperature_2m}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyCast;
