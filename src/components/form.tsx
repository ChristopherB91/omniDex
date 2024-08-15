import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  url: string;
  fRef: React.RefObject<HTMLFormElement>;
  aAlien: () => void;
  upd: boolean;
  con2: () => void;
  data: data[];
  alienNum: number;
}

interface data {
  id: number;
  name: string;
  nickname: string;
  image: string;
  silhouette: string;
  abilities: string[];
  ultimate: string | null;
}

const Form: React.FC<Props> = ({
  url,
  fRef,
  aAlien,
  upd,
  data,
  alienNum,
  con2,
}) => {
  const [formData, setFormData] = useState<data>({
    id: 0,
    name: "",
    nickname: "",
    image: "",
    silhouette: "",
    abilities: [""],
    ultimate: "",
  });

  useEffect(() => {
    if (upd) setFormData({ ...data[alienNum] });
  }, [upd, alienNum, data]);

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        name === "abilities"
          ? value.split(",").map((ability) => ability.trim())
          : value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = upd
        ? await axios.put(`${url}/updAlien/${data[alienNum].id}`, formData)
        : await axios.post(`${url}/addAlien`, formData);
      window.alert(response.data);
    } catch (error) {
      window.alert("Error injectiing alien DNA");
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

  const esc = () => {
    if (!upd) {
      aAlien;
    } else {
      con2;
    }
  };
  return (
    <>
      <form
        ref={fRef}
        onSubmit={handleSubmit}
        className="font-custom text-lg flex flex-col items-center overflow-y-scroll no-scrollbar max-h-44"
      >
        <button
          className="px-3 py-0.5 rounded bg-lime-800 text-white "
          onClick={esc}
        >
          -
        </button>
        {questions.map((question, index) => {
          return (
            <div key={index}>
              <label htmlFor={question.name}>{question.label}</label>
              <br />
              <input
                key={index}
                type={question.type}
                name={question.name}
                id={question.name}
                placeholder={question.placeholder}
                required={question.placeholder === "Required"}
                onChange={change}
                value={formData[question.name as keyof data] || ""}
                autoFocus={question.name === "name"}
              />
            </div>
          );
        })}
        <input type="submit" className="visible" />
      </form>
    </>
  );
};

export default Form;
