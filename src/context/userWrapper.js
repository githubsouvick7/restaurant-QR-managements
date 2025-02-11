"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { UserProvider } from "./userContext";

const UserWrapper = ({ children }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("authToken", token);
      router.push("/");
    }
  }, [searchParams, router]);

  return <UserProvider>{children}</UserProvider>;
};

export default UserWrapper;
