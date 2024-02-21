import type { Meta, StoryFn } from '@storybook/react';
import { ComponentProps, useEffect, useState } from 'react';

import { ThemeSwitcher } from './ThemeSwitcher';
import clsx from 'clsx';

const meta: Meta<typeof ThemeSwitcher> = {
  component: ThemeSwitcher,
  title: 'Organisms/ThemeSwitcher',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

const Template: StoryFn<ComponentProps<typeof ThemeSwitcher>> = (args) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    isDarkTheme
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [isDarkTheme]);

  return (
    <div className={clsx(isDarkTheme ? "text-white bg-gray-900" : "text-gray-900 bg-white", "h-full w-full flex items-center justify-center p-6")}>
      <ThemeSwitcher {...args} {...{ isDarkTheme, toggleDarkTheme }} />
    </div>
  );
};

export const _ThemeSwitcher = Template.bind({});
_ThemeSwitcher.args = {};
_ThemeSwitcher.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
