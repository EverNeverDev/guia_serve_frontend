"use client";
import useAuthState from "@/store/auth.store";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const UnAuthenticatedRedirect = (Component: React.FC) => {
  const authState = useAuthState.getState();
  return function WithAuth(props: any) {
    useEffect(() => {
      if (!authState.isSigned) {
        redirect("/");
      }
    }, []);
    if (!authState.isSigned) return null;

    return <Component {...props} />;
  };
};

export default UnAuthenticatedRedirect;
