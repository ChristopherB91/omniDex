import left from "../assets/arrowL.svg";
import right from "../assets/arrowR.svg";
import up from "../assets/arrowU.svg";
import down from "../assets/arrowD.svg";
import omni from "../assets/omni.svg";

interface Props {
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
}

const Controls: React.FC<Props> = ({ num, setNum }) => {
  const next = () => {
    if (num < 5) {
      setNum(num + 1);
    } else {
      setNum((num = 0));
    }
    console.log(num);
  };

  const prev = () => {
    if (num > 1) {
      setNum(num - 1);
    } else {
      setNum(5);
    }
    console.log(num);
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
            className="h-auto w-3/4 row-start-1 row-end-1 col-start-2 col-end-3"
          />
          <input
            type="image"
            src={left}
            alt="left arrow"
            className="h-auto w-3/4 row-start-2 row-end-3 col-start-1 col-end-2 place-self-end"
          />
          <input
            type="image"
            src={right}
            alt="right arrow"
            className="h-auto w-3/4 row-start-2 row-end-3 col-start-3 col-end-4 place-self-start"
          />
          <input
            type="image"
            src={down}
            alt="down arrow"
            onClick={next}
            className="h-auto w-3/4 row-start-3 row-end-4 col-start-2 col-end-3"
          />
        </div>
        <input
          type="image"
          src={omni}
          alt="confirmation button"
          className="h-auto w-1/3"
        />
      </div>
    </>
  );
};

export default Controls;
