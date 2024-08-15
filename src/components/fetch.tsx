import Form from "./form";
import { useState } from "react";
import axios from "axios";

interface Primus {
  id: number;
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
  fref,
  add,
  aAlien,
}) => {
  const [del, setDel] = useState<boolean>(false);
  const [upd, setUpd] = useState<boolean>(false);

  const confirm = () => {
    if (del) {
      setDel(false);
    } else {
      setDel(true);
    }
  };

  const confirm2 = () => {
    if (upd) {
      setUpd(false);
    } else {
      setUpd(true);
    }
  };

  const remove = async () => {
    try {
      const response = await axios.delete(`${URL}/delAlien/${data[alien].id}`);
      window.alert(response.data);
    } catch (error) {
      window.alert(error);
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
        {upd ? (
          <Form
            url={URL}
            fRef={fref}
            aAlien={aAlien}
            upd={upd}
            con2={confirm2}
            data={data}
            alienNum={alien}
          />
        ) : dial ? (
          <div className="grid grid-cols-3 text-sm justify-center-center">
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
              <div className="inline-flex">
                {del ? (
                  <div>
                    <button
                      disabled
                      className="bg-lime-700 text-black font-bold py-1 px-2 border-b-4 border-lime-500"
                    >
                      Are you sure?
                    </button>
                    <div className="ineline-flex">
                      <button
                        onClick={remove}
                        className="bg-lime-900 hover:bg-lime-700 text-white hover:text-black font-bold py-2 px-4 rounded-l"
                      >
                        YES
                      </button>
                      <button
                        className="bg-lime-900 hover:bg-lime-700 text-white hover:text-black font-bold py-2 px-4 rounded-r"
                        onClick={confirm}
                      >
                        NO
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={confirm}
                      className=" bg-lime-900 hover:bg-lime-700 text-white hover:text-black font-bold py-2 px-1 rounded-l"
                    >
                      Delete
                    </button>

                    <button
                      onClick={confirm2}
                      className="bg-lime-900 hover:bg-lime-700 text-white hover:text-black  font-bold py-2 px-1 rounded-r"
                    >
                      Update
                    </button>
                  </>
                )}
              </div>
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
                `${data[alien].silhouette}` === "" || null || undefined
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
      <Form
        url={URL}
        fRef={fref}
        aAlien={aAlien}
        upd={upd}
        con2={confirm2}
        data={data}
        alienNum={alien}
      />
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
