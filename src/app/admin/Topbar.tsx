"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import * as jwt from "jsonwebtoken";

import { Button } from "@/ui";

export const Topbar = () => {
  const accessToken = Cookies.get("accessToken");
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [tokenExpires, setTokenExpires] = useState<number | undefined>();

  const getUserData = async () => {
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_PREFIX}/user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
    });

    const data = await user.json();

    setUsername(data.email);
  };

  const refreshToken = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_PREFIX}/auth/refresh`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      },
    );

    const data = await response.json();

    const newAccessToken = data.accessToken;

    Cookies.set("accessToken", newAccessToken);

    const decodedToken: string | jwt.JwtPayload | null = jwt.decode(newAccessToken as unknown as string);

    if (decodedToken && typeof decodedToken !== "string" && decodedToken.exp) {
      setTokenExpires(new Date(new Date(decodedToken.exp * 1000).getTime() - Date.now() - 60 * 1000).getTime());
    }

    console.log(newAccessToken);
  };

  const logout = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_PREFIX}/auth/logout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
      },
    );

    if (response.ok) {
      Cookies.remove("accessToken");
      router.push("/login");
    }
  };

  useEffect(() => {
    getUserData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const refreshTimeout = setTimeout(() => {
      refreshToken();
    }, tokenExpires);

    return () => clearTimeout(refreshTimeout);
  }, [accessToken, tokenExpires]);

  return (
    <div className="w-2/3 md:w-1/2 mt-[-48px] mb-16 mr-auto flex flex-col sm:flex-row items-center gap-6 z-20">
      <p className="h-full">{username}</p>
      <Button onClick={logout}>Log out</Button>
      <Button onClick={refreshToken}>Refresh token</Button>
    </div>
  );
};
