interface Props {
  num: number;
}

const presets = [
  { presetName: "Preset1" },
  { presetName: "Preset2" },
  { presetName: "Preset3" },
  { presetName: "Preset4" },
  { presetName: "Preset5" },
  { presetName: "Preset6" },
];
const Selections: React.FC<Props> = ({ num }) => {
  return (
    <>
      <ul id="presets">
        {presets.map((preset, index) => (
          <li
            key={index}
            className={
              num === index
                ? "font-custom bg-lime-800 text-white animate-text"
                : "font-custom animate-text"
            }
          >
            {preset.presetName}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Selections;
