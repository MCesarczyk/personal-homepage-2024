import type { Meta, StoryFn } from "@storybook/react";
import { type ComponentProps } from "react";

import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: "Organisms/Footer",
  tags: ["autodocs"],
  argTypes: {
    address: { control: "text", description: "Address" },
    note: { control: "text", description: "Author name" },
    children: { control: "text", description: "Footer content" },
  },
};
export default meta;

const Template: StoryFn<ComponentProps<typeof Footer>> = (args) => (
  <div className="text-gray-950 dark:text-white">
    <Footer {...args} />
  </div>
);

export const _Footer = Template.bind({});
_Footer.args = {
  address: "lorem.ipsum@dolor.sit",
  note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  children: [<>Footer content</>],
};
_Footer.parameters = {
  backgrounds: {
    default: "dark",
  },
};
