import type { Meta, StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';

import { Link } from './Link';

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Atoms/Link',
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'Link text' },
    onClick: { action: 'clicked', description: 'Click event' },
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
  }
};
export default meta;

const Template: StoryFn<ComponentProps<typeof Link>> = (args) => (
  <Link {...args} />
);

export const _Link = Template.bind({});
_Link.args = {
  children: 'Link',
};
