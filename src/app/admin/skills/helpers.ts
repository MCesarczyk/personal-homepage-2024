import { type SkillDto } from "@/app/admin/skills/types";

export const sortArrayOfSkillsDescending = (a: SkillDto, b: SkillDto) => {
  const stateA = a.content.toUpperCase();
  const stateB = b.content.toUpperCase();
  if (stateA < stateB) {
    return 1;
  }
  if (stateA > stateB) {
    return -1;
  }
  return 0;
};
