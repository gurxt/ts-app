import { FC } from "react";

interface ICustomButton {
  title: string;
  type?: "danger" | "normal" | "regular";
  onClick?(): void;
}

const CustomButton: FC<ICustomButton> = ({ title, type, onClick }) => {
  let color;

  switch(type) {
    case "danger": color = "bg-red-500"; break;
    case "normal": color = "bg-gray-500"; break;
    case "regular": color = "bg-blue-500"; break;
  }

  return (
    <button onClick={onClick} className={ color + " text-white p-2 rounded-lg w-16" }>
      { title }
    </button>
  )
}

export default CustomButton;