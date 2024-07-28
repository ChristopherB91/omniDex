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
  abilities: JSON;
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>(error)</p>;
  if (preset !== 6)
    return (
      <>
        {dial ? (
          <img
            src={data[alien].image}
            alt="silhouette of alien"
            className="h-40 max-w-full"
          />
        ) : (
          <img
            src={data[alien].silhouette}
            alt="silhouette of alien"
            className="h-40 max-w-full"
          />
        )}
      </>
    );
  else return <Form alien={alien} />;
};

export default Fetch;
