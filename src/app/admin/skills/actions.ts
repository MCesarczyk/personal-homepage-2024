import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { type SkillDto } from "@/app/admin/skills/types";

export const handleEditSkill = async (id: string, payload: Partial<SkillDto>) => {
  "use server";

  const accessToken = cookies().get("accessToken")?.value;

  const response = await fetch(`${process.env.API_URL}${process.env.API_PREFIX}/skill/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    console.log("Error updating skill data");
  }

  const skillUpdateResponse = await response.json();
  revalidatePath("/admin/skills");
  console.log(skillUpdateResponse, "Skill updated");
};
