import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { ButtonIconPosition, ButtonSize, ButtonType } from './types';
import { IconName } from '../Icon/types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: ButtonType,
    size: ButtonSize,
    iconName: IconName,
    iconPosition: ButtonIconPosition,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  type: ButtonType.Primary,
  size: ButtonSize.Small,
  disabled: false,
  loading: false,
  onClick: () => console.log('click Primary'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  type: ButtonType.Secondary,
  size: ButtonSize.Small,
  disabled: false,
  loading: false,
  onClick: () => console.log('click Secondary'),
};

export const Flat = Template.bind({});
Flat.args = {
  label: 'Button',
  type: ButtonType.Flat,
  size: ButtonSize.Small,
  disabled: false,
  onClick: () => console.log('click Flat'),
};

export const Destructive = Template.bind({});
Destructive.args = {
  label: 'Button',
  type: ButtonType.Destructive,
  size: ButtonSize.Small,
  disabled: false,
  onClick: () => console.log('click Destructive'),
};
