import { useState, useEffect } from "react";
import axios from "axios";
import Fetch from "./components/fetch";
import Controls from "./components/controls";
import Selections from "./components/selections";

interface Primus {
  id: number;
  name: string;
  nickname: string;
  image: string;
  silhouette: string;
  abilities: string[];
  ultimate: string | null;
}

function App() {
  const [presetNum, setPresetNum] = useState<number>(0);
  const [alienNum, setAlienNum] = useState<number>(presetNum * 10);
  const [fetched, setFetched] = useState<boolean>(false);
  const [dialed, setDialed] = useState<boolean>(false);
  const [ultimate, setUltimate] = useState<boolean>(false);
  const [data, setData] = useState<Primus[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [add, setAdd] = useState<boolean>(false);
  const baseUrl: string = `https://omnidex.onrender.com/primus`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(baseUrl + "/allAliens");
        setData(res.data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addAlien = () => {
    if (add) {
      setAdd(false);
    } else {
      setAdd(true);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold underline text-lime-500 place-items-center text-center">
          Welcome to the
          <br />
          OmniDex
        </h1>
      </div>
      <br />
      <div className="p-1 bg-gray-400 rounded-3xl sm:w-4/6 animate-open md:w-3/6 lg:w-2/6">
        <div className="h-96 bg-black rounded-3xl flex justify-around items-center flex-col animate-open2">
          <div className="w-4/5 max-h-44 overflow-hidden bg-lime-600 rounded-3xl text-lg text-center animate-open3">
            {fetched ? (
              <Fetch
                URL={baseUrl}
                alien={alienNum}
                dial={dialed}
                preset={presetNum}
                load={loading}
                error={error}
                data={data}
                ult={ultimate}
                setUlt={setUltimate}
                add={add}
                aAlien={addAlien}
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
            ult={ultimate}
            setUlt={setUltimate}
            err={error}
            add={add}
            aAlien={addAlien}
            data={data}
          />
        </div>
      </div>
    </>
  );
}

export default App;
