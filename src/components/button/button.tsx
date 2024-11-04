import React from "react";
import "./button.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="styled-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
