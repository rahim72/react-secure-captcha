"use client";

import React, { useState, useEffect, useCallback } from "react";
import CanvasCaptcha from "./CanvasCaptcha";
import MathCaptcha from "./MathCaptcha";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { LuRefreshCw } from "react-icons/lu";

export type CaptchaType = "canvas" | "math";

interface CaptchaProps {
  type?: CaptchaType;
  length?: number;
  width?: number;
  height?: number;
  fontSize?: number;
  fontFamily?: string;
  backgroundColor?: string;
  textColor?: string;
  noise?: number;
  placeholder?: string;
  errorMessage?: string;
  successMessage?: string;
  autoValidate?: boolean;
  animationDuration?: number;
  onValidate?: (isValid: boolean) => void;
  className?: string;
}

const generateRandomText = (length: number) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
};

const generateMathQuestion = () => {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  return {
    question: `${a} + ${b} = ?`,
    answer: (a + b).toString()
  };
};

const Captcha: React.FC<CaptchaProps> = ({
  type = "canvas",
  length = 6,
  width = 180,
  height = 50,
  fontSize = 28,
  fontFamily = "Arial",
  backgroundColor = "#f9f9f9",
  textColor = "#333",
  noise = 30,
  placeholder = "کد امنیتی را وارد کنید",
  errorMessage = "کد اشتباه است!",
  successMessage = "کد صحیح است",
  autoValidate = true,
  animationDuration = 0.4,
  onValidate,
  className = ""
}) => {
  const [captchaText, setCaptchaText] = useState("");
  const [mathAnswer, setMathAnswer] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [key, setKey] = useState(0);

  const refreshCaptcha = useCallback(() => {
    if (type === "canvas") {
      const newText = generateRandomText(length);
      setCaptchaText(newText);
      setInputValue("");
      setError(null);
      setKey((k: any) => k + 1);
    } else if (type === "math") {
      const { question, answer } = generateMathQuestion();
      setCaptchaText(question);
      setMathAnswer(answer);
      setInputValue("");
      setError(null);
      setKey((k) => k + 1);
    }
  }, [length, type]);

  useEffect(() => {
    refreshCaptcha();
  }, [refreshCaptcha]);

  const validateCaptcha = useCallback(
    (value: string) => {
      const valid =
        (type === "canvas" && value === captchaText) ||
        (type === "math" && value === mathAnswer);

      if (valid) {
        toast.success(successMessage);
        setError(null);
        onValidate?.(true);
        return true;
      } else {
        toast.error(errorMessage);
        setError(errorMessage);
        onValidate?.(false);
        refreshCaptcha();
        return false;
      }
    },
    [
      captchaText,
      errorMessage,
      mathAnswer,
      onValidate,
      refreshCaptcha,
      successMessage,
      type
    ]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);

    if (
      autoValidate &&
      val.length >= (type === "canvas" ? length : mathAnswer.length)
    ) {
      validateCaptcha(val);
    }
  };

  return (
    <div className={`flex flex-col gap-3 w-full max-w-sm`}>
      <div className={`flex flex-row gap-2 items-center ${className}`}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="flex-1 border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
          aria-label="captcha input"
        />
        <div className="flex flex-row gap-2 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={key}
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 5 }}
              transition={{ duration: animationDuration }}
            >
              {type === "canvas" ? (
                <CanvasCaptcha
                  key={key}
                  text={captchaText}
                  width={width}
                  height={height}
                  fontSize={fontSize}
                  fontFamily={fontFamily}
                  backgroundColor={backgroundColor}
                  textColor={textColor}
                  noise={noise}
                />
              ) : (
                <MathCaptcha
                  question={captchaText}
                  width={width}
                  height={height}
                  fontSize={fontSize}
                  fontFamily={fontFamily}
                  backgroundColor={backgroundColor}
                  textColor={textColor}
                />
              )}
            </motion.div>
          </AnimatePresence>
          <button
            type="button"
            onClick={refreshCaptcha}
            className="p-2 hover:bg-gray-100 rounded transition"
            aria-label="refresh captcha"
          >
            <LuRefreshCw className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
      {error && (
        <motion.span
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm"
          role="alert"
        >
          {error}
        </motion.span>
      )}
      {!autoValidate && (
        <button
          type="button"
          onClick={() => validateCaptcha(inputValue)}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          تایید
        </button>
      )}
    </div>
  );
};

export default Captcha;
