import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleLogin = async (formData: FormData) => {
  "use server";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  console.log(`Logging in as ${email} with password ${password} to ${process.env.API_URL}`);

  const response = await fetch(`${process.env.API_URL}${process.env.API_PREFIX}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  cookies().set("access_token", data.accessToken);

  redirect("/admin");
};
