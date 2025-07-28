"use client";

import React, { useRef, useEffect } from "react";

interface CanvasCaptchaProps {
  text: string;
  width?: number;
  height?: number;
  fontSize?: number;
  fontFamily?: string;
  backgroundColor?: string;
  textColor?: string;
  noise?: number;
  className?: string;
}

const CanvasCaptcha: React.FC<CanvasCaptchaProps> = ({
  text,
  width = 180,
  height = 50,
  fontSize = 28,
  fontFamily = "Arial",
  backgroundColor = "#f9f9f9",
  textColor = "#333",
  noise = 30,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < noise; i++) {
      ctx.fillStyle = `rgba(0,0,0,${Math.random()})`;
      ctx.beginPath();
      ctx.arc(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 5,
        0,
        2 * Math.PI
      );
      ctx.fill();
    }

    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(text, width / 2, height / 2);
  }, [
    text,
    width,
    height,
    fontSize,
    fontFamily,
    backgroundColor,
    textColor,
    noise,
  ]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="rounded-md border border-gray-300"
    />
  );
};

export default CanvasCaptcha;
