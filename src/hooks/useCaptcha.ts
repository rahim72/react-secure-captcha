import { useState, useCallback } from "react";

export function useCaptcha(initialValue: string = "") {
  const [captcha, setCaptcha] = useState(initialValue);

  const refresh = useCallback((newValue: string) => {
    setCaptcha(newValue);
  }, []);

  const validate = useCallback(
    (input: string) => input === captcha,
    [captcha]
  );

  return { captcha, refresh, validate };
}
