interface Props {
  alien: number;
}

const Form: React.FC<Props> = () => {
  const questions = [
    {
      label: "Species name:",
      placeholder: "Optional",
      type: "text",
      name: "sName",
    },
    {
      label: "Nickname:",
      placeholder: "Required",
      type: "text",
      name: "nName",
    },
    {
      label: "Image(URL)",
      placeholder: "Required",
      type: "text",
      name: "image",
    },
    {
      label: "Silhouette(URL)",
      placeholder: "Optional",
      type: "text",
      name: "silhouette",
    },
    {
      label: "Abilities",
      placeholder: "Optional",
      type: "text",
      name: "abilities",
    },
  ];

  return (
    <>
      <form
        action=""
        method="post"
        className="font-custom text-lg flex flex-col items-center overflow-y-scroll max-h-44"
      >
        {questions.map((question, index) => {
          return (
            <>
              <label key={index} htmlFor={question.name}>
                {question.label}
              </label>
              <input
                type={question.type}
                name={question.name}
                id={question.name}
                placeholder={question.placeholder}
                required={question.placeholder === "Required"}
              />
            </>
          );
        })}
        <input
          type="submit"
          value="SUBMIT"
          className="bg-lime-800 text-white"
        />
      </form>
    </>
  );
};

export default Form;
