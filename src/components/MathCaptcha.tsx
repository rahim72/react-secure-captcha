"use client";

import React from "react";

interface MathCaptchaProps {
  question: string;
  width?: number;
  height?: number;
  fontSize?: number;
  fontFamily?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

const MathCaptcha: React.FC<MathCaptchaProps> = ({
  question,
  width = 180,
  height = 50,
  fontSize = 28,
  fontFamily = "Arial",
  backgroundColor = "#f9f9f9",
  textColor = "#333",
  className = ""
}) => {
  return (
    <div
      style={{ width, height, backgroundColor }}
      className={`flex items-center justify-center rounded-md border border-gray-300 select-none ${className}`}
    >
      <span
        style={{ fontSize, fontFamily, color: textColor }}
        className="font-bold"
      >
        {question}
      </span>
    </div>
  );
};

export default MathCaptcha;
