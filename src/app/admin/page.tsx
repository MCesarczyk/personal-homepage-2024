import { cookies } from "next/headers";

import { Link } from "@/ui";

export default async function AdminPage() {
  const accessToken = cookies().get("accessToken")?.value;

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
      <p>Welcome, {data.name}! 🎉</p>
      <div className="pt-4 sm:p-0">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center">Change your data</h1>
        <ul className="flex gap-4 justify-center text-xl capitalize p-4">
          <li>
            <Link href="/admin/skills">skills</Link>
          </li>
          <li>
            <Link href="/admin/projects">projects</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
