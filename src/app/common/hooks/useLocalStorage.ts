import { useState } from "react";

const useLocalStorage = (key: string = "", initialValue: string = "") => {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  const [value, setValue] = useState(initial);
  const setStoredValue = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  return [value, setStoredValue];
};

export default useLocalStorage;
