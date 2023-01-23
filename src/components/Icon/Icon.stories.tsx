import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Icon } from './Icon';
import { IconSize, IconName } from './types';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    size: IconSize,
    name: IconName,
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Info = Template.bind({});

Info.args = {
  size: IconSize.Large,
  name: IconName.Info,
};
