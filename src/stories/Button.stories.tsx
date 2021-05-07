// Button.stories.tsx

import React from 'react';

import { Story } from '@storybook/react';

import { ButtonProps, Button } from '../modules/common/components/Button';

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Click me!',
  color: 'primary',
};

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
  },
};
