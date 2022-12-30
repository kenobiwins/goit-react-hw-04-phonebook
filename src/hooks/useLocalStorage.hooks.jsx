import { useEffect, useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify([...state]));
  }, [key, state]);

  return [state, setState];
};
