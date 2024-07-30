import { useState } from "react";
import Fetch from "./components/fetch";
import Controls from "./components/controls";
import Selections from "./components/selections";

function App() {
  const [presetNum, setPresetNum] = useState<number>(0);
  const [alienNum, setAlienNum] = useState<number>(presetNum * 10);
  const [fetched, setFetched] = useState<boolean>(false);
  const [dialed, setDialed] = useState<boolean>(false);
  const url: string = `http://localhost:8080/primus/allAliens`;

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold underline text-lime-500 place-items-center text-center">
          Welcome to
          <br />
          OmniDex
        </h1>
      </div>
      <br />
      <div className="p-1 bg-gray-400 rounded-3xl sm:w-1/2 animate-open md:w-2/4 lg:w-2/4">
        <div className="h-96 bg-black rounded-3xl flex justify-around items-center flex-col animate-open2">
          <div className="w-4/5 max-h-44 overflow-hidden bg-lime-600 rounded-3xl text-lg text-center animate-open3">
            {fetched ? (
              <Fetch
                URL={url}
                alien={alienNum}
                dial={dialed}
                preset={presetNum}
              />
            ) : (
              <Selections num={presetNum} />
            )}
          </div>
          <Controls
            num={presetNum}
            setNum={setPresetNum}
            fetched={fetched}
            setF={setFetched}
            alien={alienNum}
            setAlien={setAlienNum}
            dial={dialed}
            setDial={setDialed}
          />
        </div>
      </div>
    </>
  );
}

export default App;
