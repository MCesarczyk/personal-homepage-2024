"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import { Button } from "@/ui";

export const Topbar = () => {
  const accessToken = Cookies.get("accessToken");
  const router = useRouter();
  const [username, setUsername] = useState("");

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

    console.log(data.accessToken);
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

  return (
    <div className="w-2/3 md:w-1/2 mt-[-48px] mb-16 mr-auto flex flex-col sm:flex-row items-center gap-6 z-20">
      <p className="h-full">{username}</p>
      <Button onClick={logout}>Log out</Button>
      <Button onClick={refreshToken}>Refresh token</Button>
    </div>
  );
};
