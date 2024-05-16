interface Props {
  num: number;
}

const Selections: React.FC<Props> = ({ num }) => {
  return (
    <>
      <ul id="presets">
        <li
          className={
            num === 0 ? "font-custom bg-lime-800 text-white" : "font-custom"
          }
        >
          Preset1
        </li>
        <li
          className={
            num === 1 ? "font-custom bg-lime-800 text-white" : "font-custom"
          }
        >
          Preset2
        </li>
        <li
          className={
            num === 2 ? "font-custom bg-lime-800 text-white" : "font-custom"
          }
        >
          Preset3
        </li>
        <li
          className={
            num === 3 ? "font-custom bg-lime-800 text-white" : "font-custom"
          }
        >
          Preset4
        </li>
        <li
          className={
            num === 4 ? "font-custom bg-lime-800 text-white" : "font-custom"
          }
        >
          Preset5
        </li>
        <li
          className={
            num === 5 ? "font-custom bg-lime-800 text-white" : "font-custom"
          }
        >
          Preset6
        </li>
      </ul>
    </>
  );
};

export default Selections;
