"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUser from "../hooks/use-user";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  // eslint-disable-next-line react/display-name
  return (props: P) => {
    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user?.id) {
        router.push("/login");
      }
    }, [user, loading, router]);

    if (loading)
      return (
        <div className="flex flex-col w-full h-screen items-center justify-center gap-2">
          <h1 className="text-3xl font-semibold">Carregando...</h1>
        </div>
      );

    return user?.id ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
