import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Icon } from './Icon';
import { IconSize, IconName } from './types';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    size: {
      description: 'Defines the size of the element (s: 20x20, l: 24x24)',
      options: ['s', 'l'],
      table: {
        defaultValue: {
          summary: 's',
        },
      },
    },
    name: {
      description: 'Indicates which icon to use',
      options: IconName,
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Info = Template.bind({});

Info.args = {
  size: IconSize.Large,
  name: IconName.Info,
};
