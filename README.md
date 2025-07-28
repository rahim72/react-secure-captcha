# react-secure-captcha

**A highly customizable React Captcha component** featuring multiple captcha types including Canvas and Math modes, smooth animations powered by Framer Motion, and user-friendly toast notifications via Sonner.

## Features

- **Canvas Captcha** with customizable text, noise, colors, and fonts.
- **Math Captcha** presenting simple arithmetic questions.
- Smooth **animations** for captcha refresh and error feedback using Framer Motion.
- **Toast notifications** for success and error messages with Sonner.
- Fully **configurable props** for maximum flexibility.
- Supports **auto-validation** or manual validation modes.
- Lightweight, **TypeScript-based** and ready for production.
- Accessible with proper ARIA attributes.

## Installation

Install the package and its peer dependencies:

```bash
npm install react-secure-captcha framer-motion sonner
```

## Usage Example

```ts
"use client";

import React from "react";
import { Captcha } from "react-secure-captcha";
import { Toaster } from "sonner";

export default function CaptchaExample() {
  const handleValidation = (isValid: boolean) => {
    console.log("Captcha valid?", isValid);
  };

  return (
    <>
      <Toaster />
      <Captcha
        type="canvas"
        length={6}
        onValidate={handleValidation}
        placeholder="Enter captcha here"
      />
    </>
  );
}
```

## Props

| Prop                | Type                         | Description                                          | Default             |
| ------------------- | ---------------------------- | ---------------------------------------------------- | ------------------- |
| `type`              | `"canvas"` \| `"math"`       | Captcha type (Canvas text captcha or Math question)  | `"canvas"`          |
| `length`            | `number`                     | Number of characters in the captcha (Canvas only)    | `6`                 |
| `width`             | `number`                     | Width of the captcha display                         | `180`               |
| `height`            | `number`                     | Height of the captcha display                        | `50`                |
| `fontSize`          | `number`                     | Font size for the captcha text                       | `28`                |
| `fontFamily`        | `string`                     | Font family for captcha text                         | `"Arial"`           |
| `backgroundColor`   | `string`                     | Background color of captcha                          | `"#f9f9f9"`         |
| `textColor`         | `string`                     | Text color for captcha                               | `"#333"`            |
| `noise`             | `number`                     | Amount of noise (dots) on Canvas Captcha             | `30`                |
| `placeholder`       | `string`                     | Input field placeholder text                         | `"Enter captcha"`   |
| `errorMessage`      | `string`                     | Error message shown on invalid captcha               | `"Invalid captcha"` |
| `successMessage`    | `string`                     | Success message shown on valid captcha               | `"Captcha valid"`   |
| `autoValidate`      | `boolean`                    | Automatically validate input on complete input       | `true`              |
| `animationDuration` | `number`                     | Duration of animations in seconds                    | `0.4`               |
| `onValidate`        | `(isValid: boolean) => void` | Callback fired after validation, with success status | `undefined`         |
| `className`         | `string`                     | Customize Tailwind Css                               | `undefined`         |

## License

This project is licensed under the MIT License.
