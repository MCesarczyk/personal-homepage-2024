import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as jwt from "jsonwebtoken";
import { sortArrayOfObjects } from "utils-agnostic";

import { type SkillDto } from "@/app/admin/skills/types";
import { Card } from "@/ui/molecules/card";

export default async function SkillsPage() {
  const accessToken = cookies().get("accessToken")?.value;

  const currentUserId = (jwt.decode(accessToken as string) as jwt.JwtPayload)?.id;

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
      <ul className="flex flex-col gap-4">
        {sortArrayOfObjects(skills, "state")
          ?.filter(({ userId }) => userId === currentUserId)
          .map(({ id, content, state }) => (
            <li key={id}>
              <Card content={content} state={state} />
            </li>
          ))}
      </ul>
    </div>
  );
}
