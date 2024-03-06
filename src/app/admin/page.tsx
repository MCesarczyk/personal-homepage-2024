import { cookies } from "next/headers";
import { PageTitle } from "@/ui";

export default async function Admin() {
  const accessToken = cookies().get("access_token")?.value;

  const user = await fetch(`${process.env.API_URL}${process.env.API_PREFIX}/user/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });
  const data = await user.json();

  return (
    <>
      <PageTitle>Admin panel</PageTitle>
      <p>Welcome, {data.name}!</p>
    </>
  );
}
