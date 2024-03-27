"use client";

import { Button, Input } from "@/ui";

interface SkillCreateFormProps {
  handleCreateNewSkill: (content: string) => void;
}

export const SkillCreateForm = ({ handleCreateNewSkill }: SkillCreateFormProps) => {
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const content = formData.get("content") as string;

    handleCreateNewSkill(content);
  };

  return (
    <form className="my-8 flex gap-8" onSubmit={handleFormSubmit}>
      <Button variant="PRIMARY" type="submit">
        Add new
      </Button>
      <Input name="content" placeholder="Enter new content" />
    </form>
  );
};
