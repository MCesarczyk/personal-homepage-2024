"use client";

import type { Meta, StoryFn } from "@storybook/react";
import { type ComponentProps } from "react";

import { Button } from "./Button";

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
