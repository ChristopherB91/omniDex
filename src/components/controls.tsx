import left from "../assets/arrowL.svg";
import right from "../assets/arrowR.svg";
import up from "../assets/arrowU.svg";
import down from "../assets/arrowD.svg";
import omni from "../assets/omni.svg";
import omniDe from "../assets/omniDe.svg";

interface Props {
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
  fetched: boolean;
  setF: React.Dispatch<React.SetStateAction<boolean>>;
  alien: number;
  setAlien: React.Dispatch<React.SetStateAction<number>>;
  dial: boolean;
  setDial: React.Dispatch<React.SetStateAction<boolean>>;
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
}) => {
  const next = () => {
    if (num < 6) {
      setNum(num + 1);
    } else {
      setNum((num = 0));
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
    if (alien >= num * 10 + 9) {
      setAlien(num * 10);
    } else {
      setAlien(alien + 1);
      console.log(alien);
    }
  };

  const prevA = () => {
    if (alien <= num * 10) {
      setAlien(num * 10 + 9);
    } else {
      setAlien(alien - 1);
      console.log(alien);
    }
  };

  const fetcher = () => {
    setAlien(num * 10);
    setF(true);
  };

  const dialed = () => {
    setDial(true);
  };

  const timeout = () => {
    setDial(false);
    setF(false);
    setNum(0);
    setAlien(0);
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
            disabled={dial ? true : false || fetched ? false : true}
            className="h-auto w-3/4 row-start-2 row-end-3 col-start-1 col-end-2 place-self-end"
          />
          <input
            type="image"
            src={right}
            disabled={dial ? true : false || fetched ? false : true}
            onClick={nextA}
            alt="right arrow"
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
        {dial ? (
          <input
            type="image"
            src={omniDe}
            alt="confirmation button"
            onClick={timeout}
            className="h-auto w-1/3"
          />
        ) : (
          <input
            type="image"
            src={omni}
            alt="confirmation button"
            onClick={fetched ? dialed : fetcher}
            className="h-auto w-1/3"
          />
        )}
      </div>
    </>
  );
};

export default Controls;
