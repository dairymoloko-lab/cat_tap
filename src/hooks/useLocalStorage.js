import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);

      if (stored === null || stored === "undefined") {
        return initialValue;
      }

      return JSON.parse(stored);
    } catch (e) {
      console.warn("Ошибка парсинга localStorage:", key);
      return initialValue;
    }
  });

  const setStoredValue = (newValue) => {
    try {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (e) {
      console.warn("Ошибка сохранения:", key);
    }
  };

  return [value, setStoredValue];
}