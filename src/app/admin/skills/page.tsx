import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { type SkillDto } from "@/app/admin/skills/types";

export default async function SkillsPage() {
  const accessToken = cookies().get("accessToken")?.value;

  const response = await fetch(`${process.env.API_URL}${process.env.API_PREFIX}/skill`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  if (!response.ok) {
    return redirect("/login");
  }

  const skills: SkillDto[] = (await response.json()) || [];

  return (
    <div className="py-8">
      <ul>
        {skills?.map(({ id, content, state }) => (
          <li key={id}>
            <a href={`/admin/skills/${id}`}>{content}</a>
            <span>State: {state}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
