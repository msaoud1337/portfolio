import { useEffect, useState } from 'react';

export default function useLocalStorage<ValueType>(key: string, defaultValue: ValueType) {
  const isClient = typeof window !== 'undefined';

  const [value, setValue] = useState(() => {
    if (isClient) {
      const storedValue = localStorage.getItem(key);
      return storedValue === null ? defaultValue : JSON.parse(storedValue);
    }
    return defaultValue;
  });

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const listener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(e.newValue ? JSON.parse(e.newValue) : e.newValue);
      }
    };

    window.addEventListener('storage', listener);

    return () => {
      return window.removeEventListener('storage', listener);
    };
  }, [isClient, key, defaultValue]);

  const setValueInLocalStorage = (newValue: ValueType) => {
    setValue((currentValue: any) => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));
      return result;
    });
  };

  return [value, setValueInLocalStorage];
}
