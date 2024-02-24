"use client";

import type { Meta, StoryFn } from "@storybook/react";
import { type ComponentProps } from "react";
import JSZipUtils from "jszip-utils";
import saveAs from "save-as";

import { Button } from "./Button";

const saveFileFromUrlWithName = async (url: string, name: string) => {
  const buffer = await JSZipUtils.getBinaryContent(url);
  return saveAs(new Blob([buffer]), name);
};

const handleClick = () =>
  // saveFileFromUrlWithName("https://css4.pub/2015/icelandic/dictionary.pdf", "Dictionary of Iceland.pdf");
  saveFileFromUrlWithName("/sample.pdf", "Dictionary of Iceland.pdf");

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Atoms/Button",
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "Button text" },
    onClick: { action: "clicked", description: "Click event" },
  },
};
export default meta;

const Template: StoryFn<ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const _Button = Template.bind({});
_Button.args = {
  children: "Button",
};

export const DownloadButton = Template.bind({});
DownloadButton.args = {
  children: "Download",
  onClick: handleClick,
};
