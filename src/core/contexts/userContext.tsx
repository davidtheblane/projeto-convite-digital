"use client";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IUser } from "../interfaces/user.interface";
import useAPI from "../hooks/use-api";
import useLocalStorage from "../hooks/use-local-storage";

export interface UserContextProps {
  user: IUser | undefined;
  token: string | undefined;
  loading: boolean;
  error: string | undefined;

  createUser: (
    data: Omit<IUser, "id" | "createdAt" | "updatedAt">
  ) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const { httpGet, httpPost, extrairDados } = useAPI();
  const { obertItem, salvarItem, removerItem } = useLocalStorage();

  useEffect(() => {
    const fetchUser = async () => {
      const token = obertItem("@token");

      try {
        const response = await httpGet("auth/me", token);

        if (response.ok) {
          const data = await extrairDados(response);
          setUser(data);
          setToken(token);
          return;
        }
        throw response;
      } catch (error) {
        console.log({ error });
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [extrairDados, httpGet, obertItem]);

  const createUser = useCallback(
    async (data: Omit<IUser, "id" | "createdAt" | "updatedAt">) => {
      setLoading(true);
      setError(undefined);

      return await httpPost("users", data)
        .then(async (res) => {
          return res.ok;
        })
        .catch((error) => {
          console.log("error", error);
          setError(error.messagem);
          return false;
        })
        .finally(() => {
          setLoading(false);
          return true;
        });
    },
    [httpPost]
  );

  const login = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      setError(undefined);

      return await httpPost("auth/login", { email, password })
        .then(async (res) => {
          const data = await extrairDados(res);
          const { user, access_token } = data as {
            user: IUser;
            access_token: string;
          };
          setUser(user);
          setToken(access_token);

          salvarItem("@token", access_token);
          return true;
        })
        .catch((error) => {
          console.log("error", error);
          setError(error.messagem);
          return false;
        })
        .finally(() => {
          setLoading(false);
          return true;
        });
    },
    [extrairDados, httpPost, salvarItem]
  );

  const logout = useCallback(() => {
    setUser(undefined);
    setToken(undefined);

    removerItem("@token");
  }, [removerItem]);

  const contextValue = useMemo(
    () => ({
      user,
      token,
      loading,
      error,
      createUser,
      login,
      logout,
    }),
    [user, token, loading, error, createUser, login, logout]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
