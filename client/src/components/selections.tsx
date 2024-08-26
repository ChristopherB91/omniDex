interface Props {
  num: number;
}

const preset1 = [
  { presetName: "Preset1" },
  { presetName: "Preset2" },
  { presetName: "Preset3" },
  { presetName: "Preset4" },
  { presetName: "Preset5" },
  { presetName: "Preset6" },
];

const preset2 = [
  { presetName: "Preset2" },
  { presetName: "Preset3" },
  { presetName: "Preset4" },
  { presetName: "Preset5" },
  { presetName: "Preset6" },
  { presetName: "Preset7" },
];
const Selections: React.FC<Props> = ({ num }) => {
  const presets = num !== 6 ? preset1 : preset2;
  return (
    <>
      <ul id="presets">
        {presets.map((preset, index) => {
          const isActive = num !== 6 ? num === index : num - 1 === index;
          return (
            <li
              key={index}
              className={
                isActive ? "font-custom bg-lime-800 text-white" : "font-custom"
              }
            >
              {preset.presetName}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Selections;
