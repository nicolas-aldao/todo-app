import { useState, useEffect } from "react";

function useLocalStorage(name, defaultValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(defaultValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(name);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(name, JSON.stringify(defaultValue));
          parsedItem = defaultValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });
  const saveItem = (item) => {
    try{
    localStorage.setItem(name, JSON.stringify(item));
    setItem(item);
    }catch(error){
      setError(error);
    }
  };
  return {item, saveItem, loading, error};
}

export { useLocalStorage };
