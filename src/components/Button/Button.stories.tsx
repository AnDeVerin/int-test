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
  type: ButtonType.Primary,
  label: 'Button',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
