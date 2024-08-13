import left from "../assets/arrowL.svg";
import right from "../assets/arrowR.svg";
import up from "../assets/arrowU.svg";
import down from "../assets/arrowD.svg";
import omni from "../assets/omni.svg";
import omniDe from "../assets/omniDe.svg";
import omniAdd from "../assets/omniAdd.svg";
import omniDial from "../assets/omniDial.svg";
import { useEffect, useState } from "react";

interface Props {
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
  fetched: boolean;
  setF: React.Dispatch<React.SetStateAction<boolean>>;
  alien: number;
  setAlien: React.Dispatch<React.SetStateAction<number>>;
  dial: boolean;
  setDial: React.Dispatch<React.SetStateAction<boolean>>;
  setUlt: React.Dispatch<React.SetStateAction<boolean>>;
  err: string | undefined;
  submit: (e: React.SyntheticEvent) => void;
  add: boolean;
  aAlien: () => void;
  data: Primus[];
}

interface Primus {
  name: string;
  nickname: string;
  image: string;
  silhouette: string;
  abilities: string[];
  ultimate: string | null;
}

const Controls: React.FC<Props> = ({
  num,
  setNum,
  fetched,
  setF,
  alien,
  setAlien,
  dial,
  setDial,
  setUlt,
  err,
  // submit,
  add,
  aAlien,
  data,
}) => {
  const [image, setImage] = useState<string>(omni);

  useEffect(() => {
    const error = () => {
      if (err) {
        setImage(omniDe);
      }
    };
    error();
  }, [err]);

  const next = () => {
    if (num < 6) {
      setNum(num + 1);
    } else {
      setNum(0);
    }
  };

  const prev = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(6);
    }
  };

  const nextA = () => {
    if (num !== 6) {
      if (alien >= num * 10 + 9) {
        setAlien(num * 10);
      } else {
        setAlien(alien + 1);
      }
    } else {
      if (alien >= data.length) {
        setAlien(num * 10);
      } else {
        setAlien(alien + 1);
      }
    }
  };

  const prevA = () => {
    if (num !== 6) {
      if (alien <= num * 10) {
        setAlien(num * 10 + 9);
      } else {
        setAlien(alien - 1);
      }
    } else {
      if (alien <= num * 10) {
        setAlien(data.length);
      } else {
        setAlien(alien - 1);
      }
    }
  };

  const timeout = () => {
    setF(false);
    setDial(false);
    setUlt(false);
    setNum(0);
    setAlien(0);
    setImage(omni);
  };

  const omniBttn = () => {
    if (num === 6 && alien === data.length) {
      aAlien();
      setImage(omniAdd);
      if (add) {
        setImage(omniDial);
      }
    } else if (dial && fetched) {
      timeout();
    } else if (fetched) {
      setDial(true);
      setImage(omniDe);
    } else {
      setAlien(num * 10);
      setF(true);
      setImage(omniDial);
    }
  };

  return (
    <>
      <div id="container" className="flex justify-evenly">
        <div
          id="arrows"
          className="grid grid-cols-3 grid-rows-3 place-items-center"
        >
          <input
            type="image"
            src={up}
            alt="up arrow"
            onClick={prev}
            disabled={fetched ? true : false}
            className="h-auto w-3/4 row-start-1 row-end-1 col-start-2 col-end-3"
          />
          <input
            type="image"
            src={left}
            alt="left arrow"
            onClick={prevA}
            disabled={dial || add ? true : false || fetched ? false : true}
            className="h-auto w-3/4 row-start-2 row-end-3 col-start-1 col-end-2 place-self-end"
          />
          <input
            type="image"
            src={right}
            disabled={dial || add ? true : false || fetched ? false : true}
            onClick={nextA}
            alt="right arrow"
            id="rArrow"
            className="h-auto w-3/4 row-start-2 row-end-3 col-start-3 col-end-4 place-self-start"
          />
          <input
            type="image"
            src={down}
            alt="down arrow"
            onClick={next}
            disabled={fetched ? true : false}
            className="h-auto w-3/4 row-start-3 row-end-4 col-start-2 col-end-3"
          />
        </div>
        <input
          type="image"
          src={image}
          alt="confirmation button"
          onClick={omniBttn}
          disabled={err ? true : false}
          className="h-auto w-1/3"
        />
      </div>
    </>
  );
};

export default Controls;
