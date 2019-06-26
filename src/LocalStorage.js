import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(
    window.localStorage.getItem(key) || initialValue
  );
  return [
    storedValue,
    function(newValue) {
      window.localStorage.setItem(key, newValue);
      setStoredValue(newValue);
    }
  ];
}
