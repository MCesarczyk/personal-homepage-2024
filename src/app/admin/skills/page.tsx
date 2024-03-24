import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as jwt from "jsonwebtoken";
import { sortArrayOfObjects } from "utils-agnostic";

import { revalidatePath } from "next/cache";
import { type SkillState, type SkillDto } from "@/app/admin/skills/types";
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

  const handleChangeState = async (id: string, newState: SkillState) => {
    "use server";

    const response = await fetch(`${process.env.API_URL}${process.env.API_PREFIX}/skill/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
      body: JSON.stringify({ state: newState }),
    });

    if (response.ok) {
      revalidatePath("/admin/skills");
      console.log(response, "State changed");
    }
  };

  const handleEdit = async (id: string) => {
    "use server";

    console.log(id, "Skill update");
  };

  const handleDelete = async (id: string) => {
    "use server";

    console.log(id, "Skill delete");
  };

  return (
    <div className="py-8">
      <ul className="flex flex-col gap-4">
        {sortArrayOfObjects(skills, "state")
          ?.filter(({ userId }) => userId === currentUserId)
          .map(({ id, content, state }) => (
            <li key={id}>
              <Card
                id={id}
                changeState={handleChangeState}
                editSkill={handleEdit}
                deleteSkill={handleDelete}
                content={content}
                state={state}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
