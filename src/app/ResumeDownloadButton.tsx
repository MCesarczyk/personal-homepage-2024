"use client";

import { Button } from "@/ui/atoms/button";
import { saveFileFromUrlWithName } from "@/common/utils";
import { DownloadIcon } from "@/assets";

export const ResumeDownloadButton = () => {
  const handleClick = () => saveFileFromUrlWithName("/CV-EN.pdf", "Michał Cesarczyk CV.pdf");

  return (
    <Button onClick={handleClick}>
      <div className="h-5 w-4 mr-2">
        <DownloadIcon />
      </div>
      Download CV
    </Button>
  );
};
