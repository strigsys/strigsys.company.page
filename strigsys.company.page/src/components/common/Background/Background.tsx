// src/components/Background.tsx
import React, { ReactNode } from "react";
import "./Background.css";

interface BackgroundProps {
  backgroundImage: string;
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children, backgroundImage }) => {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return <div className="background" style={style}>{children}</div>;
};

export default Background;

