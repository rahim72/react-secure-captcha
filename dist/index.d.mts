import React from 'react';

type CaptchaType = "canvas" | "math";
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
}
declare const Captcha: React.FC<CaptchaProps>;

interface CanvasCaptchaProps {
    text: string;
    width?: number;
    height?: number;
    fontSize?: number;
    fontFamily?: string;
    backgroundColor?: string;
    textColor?: string;
    noise?: number;
}
declare const CanvasCaptcha: React.FC<CanvasCaptchaProps>;

interface MathCaptchaProps {
    question: string;
    width?: number;
    height?: number;
    fontSize?: number;
    fontFamily?: string;
    backgroundColor?: string;
    textColor?: string;
}
declare const MathCaptcha: React.FC<MathCaptchaProps>;

declare function useCaptcha(initialValue?: string): {
    captcha: string;
    refresh: (newValue: string) => void;
    validate: (input: string) => boolean;
};

export { CanvasCaptcha, Captcha, type CaptchaType, MathCaptcha, useCaptcha };
