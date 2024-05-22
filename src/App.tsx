import { useState } from "react";
import Controls from "./components/controls";
import Selections from "./components/selections";

function App() {
  const [presetNum, setPresetNum] = useState<number>(0);

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
      <div className="p-1 bg-gray-400 rounded-3xl sm:w-1/2 animate-open">
        <div className="h-96 bg-black rounded-3xl flex justify-around items-center flex-col animate-open2">
          <div className="w-4/5 bg-lime-600 rounded-3xl text-lg text-center overflow-hidden animate-open3">
            <Selections num={presetNum} />
          </div>
          <Controls num={presetNum} setNum={setPresetNum} />
        </div>
      </div>
    </>
  );
}

export default App;
