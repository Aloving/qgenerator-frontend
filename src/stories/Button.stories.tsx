import React from 'react';

import { Story } from '@storybook/react';

import { ButtonProps, Button } from '../modules/common/components/Button';

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Click me!',
  color: 'primary',
};

export const Outlined = Template.bind({});

Outlined.args = {
  children: 'Click me!',
  color: 'primary',
  variant: 'outlined',
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Click me!',
  color: 'secondary',
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
