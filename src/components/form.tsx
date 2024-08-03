import axios from "axios";
import { useState, useRef } from "react";

interface Props {
  url: string;
}

interface data {
  name: string;
  nickname: string;
  image: string;
  silhouette: string;
  abilities: string[];
  ultimate: string;
}

const Form: React.FC<Props> = ({ url }) => {
  const [formData, setFormData] = useState<data>({
    name: "",
    nickname: "",
    image: "",
    silhouette: "",
    abilities: [""],
    ultimate: "",
  });

  const formRef = useRef(null);

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    if (name === "abilities") {
      setFormData({
        ...formData,
        abilities: value.split(",").map((ability) => ability.trim()),
      });
    }
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/addAlien`, formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error injectiing alien DNA", error);
    }
  };

  const questions = [
    {
      label: "Species name:",
      placeholder: "Optional",
      type: "text",
      name: "name",
    },
    {
      label: "Nickname:",
      placeholder: "Required",
      type: "text",
      name: "nickname",
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
    {
      label: "Ultimate(URL)",
      placeholder: "Optional",
      type: "text",
      name: "ultimate",
    },
  ];

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="font-custom text-lg flex flex-col items-center overflow-y-scroll no-scrollbar max-h-44"
      >
        {questions.map((question, index) => {
          return (
            <div key={index}>
              <label key={index} htmlFor={question.name}>
                {/* {question.label} */}
              </label>
              <br />
              <input
                key={index}
                type={question.type}
                name={question.name}
                id={question.name}
                placeholder={question.placeholder}
                required={question.placeholder === "Required"}
                onChange={change}
                value={formData[question.name]}
                autoFocus={question.name === "name"}
              />
            </div>
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
