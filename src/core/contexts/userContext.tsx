"use client";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { IUser } from "../interfaces/user.interface";
import useAPI from "../hooks/use-api";
import useLocalStorage from "../hooks/use-local-storage";
import { useRouter } from "next/navigation";

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
  isAuthenticated: () => Promise<void>;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const { httpGet, httpPost, extrairDados } = useAPI();
  const { salvarItem, removerItem } = useLocalStorage();

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
          salvarItem("@user", user);
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
    removerItem("@user");
  }, [removerItem]);

  const isAuthenticated = useCallback(async () => {
    console.log({ user, token });
    if (!user || !token) return router.push("/login");

    const res = await httpGet("healthCheck", token);

    if (!res.ok) return router.push("/login");
  }, [user, token, router, httpGet]);

  const contextValue = useMemo(
    () => ({
      user,
      token,
      loading,
      error,
      createUser,
      login,
      logout,
      isAuthenticated,
    }),
    [user, token, loading, error, createUser, login, logout, isAuthenticated]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
