import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./form";

interface Props {
  URL: string;
  alien: number;
  dial: boolean;
  preset: number;
}

interface Primus {
  name: string;
  nickname: string;
  image: string;
  silhouette: string;
  abilities: string[];
  ultimate: string | null;
}

const Fetch: React.FC<Props> = ({ URL, alien, dial, preset }) => {
  const [data, setData] = useState<Primus[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(URL);
        setData(res.data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [URL]);

  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>(error)</p>;
  if (preset !== 6)
    return (
      <>
        {dial ? (
          <div className="grid grid-cols-3">
            <img
              src={data[alien].image}
              alt="silhouette of alien"
              className="h-40 max-w-full"
            />
            <div>
              <p className="bg-lime-800 text-white underline">Species</p>
              <p>{data[alien].name}</p>
              <p className="bg-lime-800 text-white underline">Nickname</p>
              <p>{data[alien].nickname}</p>
            </div>
            <div className="overflow-y-scroll text-lg h-44">
              <p className="bg-lime-800 text-white underline">Abilities: </p>
              {data[alien].abilities.map((ability, index) => {
                return <p key={index}>{ability}</p>;
              })}
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <img
              src={data[alien].silhouette}
              alt="silhouette of alien"
              className="max-h-40 max-w-full"
            />
          </div>
        )}
      </>
    );
  else return <Form alien={alien} />;
};

export default Fetch;
