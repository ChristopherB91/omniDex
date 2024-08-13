import Form from "./form";
import ultimatrix from "../assets/omniUlt.svg";

interface Primus {
  name: string;
  nickname: string;
  image: string;
  silhouette: string;
  abilities: string[];
  ultimate: string | null;
}

interface Props {
  URL: string;
  alien: number;
  dial: boolean;
  preset: number;
  load: boolean;
  error: string | undefined;
  data: Primus[];
  ult: boolean;
  setUlt: React.Dispatch<React.SetStateAction<boolean>>;
  add: boolean;
  aAlien: () => void;
  fref: React.RefObject<HTMLFormElement>;
}

const Fetch: React.FC<Props> = ({
  URL,
  alien,
  dial,
  preset,
  load,
  error,
  data,
  ult,
  setUlt,
  fref,
  add,
  aAlien,
}) => {
  const ultimate = () => {
    if (ult) {
      setUlt(false);
    } else {
      setUlt(true);
    }
  };
  if (load) return <p>Loading...</p>;
  if (error) return <p>(error)</p>;
  if (preset !== 6)
    return (
      <>
        {dial ? (
          <div className="grid grid-cols-3 justify-center-center">
            <div className="flex justify-center items-center">
              <img
                src={ult ? `${data[alien].ultimate}` : `${data[alien].image}`}
                alt="silhouette of alien"
                className="h-40 max-w-full"
              />
            </div>
            <div>
              <p className="bg-lime-800 text-white underline text">Species</p>
              <p className="text-sm">
                {data[alien].name === null ? "Unkown" : `${data[alien].name}`}
              </p>
              <p className="bg-lime-800 text-white underline">Nickname</p>
              <p className="text-sm">{data[alien].nickname}</p>
              {data[alien].ultimate && (
                <input
                  type="image"
                  src={ultimatrix}
                  onClick={ultimate}
                  className="h-auto w-3/4"
                />
              )}
            </div>
            <div className="overflow-y-scroll h-44 no-scrollbar">
              <p className="bg-lime-800 text-white underline">Abilities: </p>
              {data[alien].abilities.map((ability: string, index: number) => {
                return (
                  <p key={index} className="text-sm">
                    {ability}
                  </p>
                );
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
  if (alien !== data.length) {
    return (
      <>
        {dial ? (
          <div className="grid grid-cols-3 text-s justify-center-center">
            <div className="flex justify-center items-center">
              <img
                src={ult ? `${data[alien].ultimate}` : `${data[alien].image}`}
                alt="silhouette of alien"
                className="h-40 max-w-full"
              />
            </div>
            <div>
              <p className="bg-lime-800 text-white underline text">Species</p>
              <p>
                {data[alien].name === null ? "Unkown" : `${data[alien].name}`}
              </p>
              <p className="bg-lime-800 text-white underline">Nickname</p>
              <p>{data[alien].nickname}</p>
              {data[alien].ultimate && (
                <input
                  type="image"
                  src={ultimatrix}
                  onClick={ultimate}
                  className="h-auto w-3/4"
                />
              )}
            </div>
            <div className="overflow-y-scroll h-44 no-scrollbar">
              <p className="bg-lime-800 text-white underline">Abilities: </p>
              {data[alien].abilities.map((ability: string, index: number) => {
                return <p key={index}>{ability}</p>;
              })}
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <img
              src={
                `${data[alien].silhouette}` === ""
                  ? `${data[alien].image}`
                  : `${data[alien].silhouette}`
              }
              alt="silhouette of alien"
              className="max-h-40 max-w-full"
            />
          </div>
        )}
      </>
    );
  } else
    return add ? (
      <Form url={URL} fRef={fref} aAlien={aAlien} />
    ) : (
      <button
        className="px-3 py-0.5 rounded bg-lime-800 text-white font-bold"
        onClick={aAlien}
        disabled
      >
        +
      </button>
    );
};

export default Fetch;
