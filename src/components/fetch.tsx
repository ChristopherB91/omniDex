import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  URL: string;
}

interface Pokemon {
  name: string;
}

const Fetch: React.FC<Props> = ({ URL }) => {
  const [data, setData] = useState<Pokemon[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<{ results: Pokemon[] }>(URL);
        setData(res.data.results);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>(error)</p>;
  console.log(data);
  return (
    <>
      <ul>
        {data ? (
          data.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)
        ) : (
          <p>No data available</p>
        )}
      </ul>
    </>
  );
};

export default Fetch;
