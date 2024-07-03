import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  URL: string;
}

interface Primus {
  name: string;
  nickname: string;
  image: string;
  silhouette: string;
  abilities: JSON;
  ultimate: string | null;
}

const Fetch: React.FC<Props> = ({ URL }) => {
  const [data, setData] = useState<Primus[]>([]);
  const [loading, setLoading] = useState<boolean>();
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
  return (
    <>
      <img
        src={data[0].silhouette}
        alt="silhouette of alien"
        className="h-40 max-w-full"
      />
    </>
  );
};

export default Fetch;
