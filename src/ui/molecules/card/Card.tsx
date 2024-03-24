"use client";

import { type ChangeEvent } from "react";
import { type SkillDto, type SkillState } from "@/app/admin/skills/types";
import { Select, Button } from "../../atoms";

interface CardProps {
  id: string;
  content: string;
  state: SkillState;
  changeState: (id: string, payload: Partial<SkillDto>) => void;
  editSkill: (id: string) => void;
  deleteSkill: (id: string) => void;
}

export const Card = ({ id, content, state, changeState, editSkill, deleteSkill }: CardProps) => {
  const handleStateChange = (e: ChangeEvent<HTMLSelectElement>) =>
    changeState(id, { state: e.target.value as SkillState });

  const handleEdit = () => editSkill(id);

  const handleDelete = () => deleteSkill(id);

  return (
    <div className="text-left text-sm px-4 py-2 md:px-8 md:py-4 md:text-base rounded bg-white dark:bg-gray-800 border-4 border-gray-500 border-opacity-10 dark:border-opacity-10 shadow-md shadow-gray-900 transition-all ease-in duration-300 hover:shadow-blue-500 flex gap-4 md:gap-8 items-center justify-between">
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-800 dark:text-blue-600">
        {content}
      </h3>
      <div className="flex gap-4 md:gap-8">
        <Select
          options={[
            { value: "PLANNED", label: "Planned" },
            { value: "RUNNING", label: "Running" },
            { value: "COMPLETED", label: "Completed" },
          ]}
          value={state}
          onChange={handleStateChange}
        />
        <Button onClick={handleEdit} variant="SECONDARY">
          Edit
        </Button>
        <Button onClick={handleDelete} variant="SECONDARY">
          <span className="text-red-500">Delete</span>
        </Button>
      </div>
    </div>
  );
};
