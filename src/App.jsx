import Navbar from "./components/Navbar";
import SearchSection from "./components/SearchSection";
import Asider from "./components/Aside";
import MainCast from "./components/MainCast";
import DailyCast from "./components/DailyCast";
import { useSelector } from "react-redux";

function App() {
  const { isLoading, current } = useSelector((store) => store.weather);

  return (
    <div className="w-full h-full px-2 py-10 bg-Neutral-900">
      <div className="container h-full">
        <Navbar />
        <main className="grid gap-5">
          <SearchSection />
          {(isLoading || current) && (
            <div className="grid gap-8 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <MainCast />
                <DailyCast />
              </div>
              <div className="mb-20 lg:col-span-2">
                <Asider />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
