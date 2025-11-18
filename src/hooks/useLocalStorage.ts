import { useState } from "react";

export default function useLocalStorage(key: string, defaultvalue: boolean) {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);

      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(defaultvalue));
        return defaultvalue;
      }
    } catch (err) {
      console.log("Internal api error:", err);
      localStorage.setItem(key, JSON.stringify(defaultvalue));
      return defaultvalue;
    }
  });

  const setLocalStorageStateValue = (
    valueOrFn: (param: boolean) => boolean | boolean
  ) => {
    let newValue;
    if (typeof valueOrFn === "function") {
      const fn = valueOrFn;
      newValue = fn(localStorageValue);
    } else {
      newValue = valueOrFn;
    }

    localStorage.setItem(key, JSON.stringify(newValue));
    setLocalStorageValue(newValue);
  };
  return [localStorageValue, setLocalStorageStateValue];
}
