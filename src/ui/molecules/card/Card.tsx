"use client";

import { type SkillState } from "@/app/admin/skills/types";
import { Select, Link } from "../../atoms";

interface CardProps {
  content: string;
  state: SkillState;
}

export const Card = ({ content, state }: CardProps) => (
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
      />
      <Link variant="SECONDARY">Edit</Link>
      <Link variant="SECONDARY">
        <span className="text-red-500">Delete</span>
      </Link>
    </div>
  </div>
);
