import { decryptData, encryptData } from "@/utils/crypto";
import { useCallback } from "react";

const useLocalStorage = () => {
  const obertItem = useCallback((key: string) => {
    const value = localStorage.getItem(key) || undefined;
    if (!value) return undefined;
    return decryptData(value);
  }, []);
  const salvarItem = useCallback((key: string, value: string) => {
    localStorage.setItem(key, encryptData(value));
  }, []);
  const removerItem = useCallback((key: string) => {
    localStorage.removeItem(key);
  }, []);

  const removeLocalStorage = () => localStorage.clear();

  return { obertItem, salvarItem, removerItem, removeLocalStorage };
};

export default useLocalStorage;
