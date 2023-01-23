import React from 'react';
import { IconSize, IconName } from './types';
import './icon.scss';

interface IconProps {
  size?: IconSize;
  name: IconName;
}

export const Icon = ({ size = IconSize.Large, name }: IconProps) => {
  const getSize = (): string => {
    return size === IconSize.Large ? '24px' : '20px';
  };

  return (
    <svg className="intelas-icon" width={getSize()} height={getSize()}>
      <use href={`#${name}`} />
    </svg>
  );
};
