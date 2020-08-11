import React from "react";
import "./styles.css";

interface ButtonProps {
  title: string;
  onClick: Function;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button id="button" onClick={(e) => onClick(e)}>
      {title}
    </button>
  );
};

export default Button;
